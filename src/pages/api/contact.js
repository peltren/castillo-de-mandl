import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		const { fullName, email, phone, consult } = req.body;

		// Validate required fields
		if (!fullName || !email || !consult) {
			return res.status(400).json({
				success: false,
				message: "Por favor completa todos los campos obligatorios",
			});
		}

		const subject = `Nueva consulta de ${fullName}`;
		const emailContent = `
Nueva consulta recibida desde el sitio web:

Nombre: ${fullName}
Email: ${email}
Teléfono: ${phone || "No proporcionado"}

Consulta:
${consult}

---
Enviado desde el formulario de contacto de El Castillo de Mandl
    `;

		// Log the submission
		console.log("Contact form submission:", {
			fullName,
			email,
			phone,
			consult,
			timestamp: new Date().toISOString(),
		});

		// SMTP configuration
		const smtpConfig = {
			host: process.env.SMTP_HOST,
			port: parseInt(process.env.SMTP_PORT) || 465,
			secure: process.env.SMTP_SECURE === "true",
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
			tls: {
				rejectUnauthorized: false,
			},
		};

		// Try to send email via SMTP if configured
		if (
			process.env.SMTP_HOST &&
			process.env.SMTP_USER &&
			process.env.SMTP_PASS
		) {
			try {
				// Create transporter
				const transporter = nodemailer.createTransport(smtpConfig);

				// Verify connection configuration
				await transporter.verify();

				// Send email
				await transporter.sendMail({
					from: `"${fullName}" <${
						process.env.SMTP_FROM || process.env.SMTP_USER
					}>`,
					to: "info@elcastillodemandl.com",
					replyTo: email,
					subject: subject,
					text: emailContent,
					html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">Nueva consulta recibida</h2>
              <p><strong>Nombre:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
              <p><strong>Consulta:</strong></p>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
                ${consult.replace(/\n/g, "<br>")}
              </div>
              <hr style="margin: 20px 0;">
              <p style="color: #666; font-size: 12px;">
                Enviado desde el formulario de contacto de El Castillo de Mandl
              </p>
            </div>
          `,
				});

				console.log("Email sent successfully via SMTP");

				return res.status(200).json({
					success: true,
					message: "¡Mensaje enviado correctamente! Te contactaremos pronto.",
				});
			} catch (smtpError) {
				console.error("SMTP error:", smtpError);

				// Return error message to user
				return res.status(500).json({
					success: false,
					message:
						"Error al enviar el mensaje. Por favor intenta nuevamente o contáctanos directamente.",
				});
			}
		}

		// Fallback: Create mailto link if SMTP is not configured
		const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
			`Re: ${subject}`
		)}&body=${encodeURIComponent(emailContent)}`;

		return res.status(200).json({
			success: true,
			message: "Se abrirá tu cliente de correo para enviar el mensaje.",
			mailtoLink,
		});
	} catch (error) {
		console.error("Error processing contact form:", error);
		return res.status(500).json({
			success: false,
			message: "Error interno del servidor. Por favor intenta nuevamente.",
		});
	}
}
