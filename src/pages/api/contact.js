import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	try {
		const { name, surname, email, phone, consult } = req.body;

		// Validate required fields
		if (!name || !surname || !email || !consult) {
			return res.status(400).json({ message: "Missing required fields" });
		}

		const subject = `Nueva consulta de ${name} ${surname}`;
		const emailContent = `
      Nueva consulta recibida desde el sitio web:
      
      Nombre: ${name} ${surname}
      Email: ${email}
      Teléfono: ${phone || "No proporcionado"}
      
      Consulta:
      ${consult}
      
      ---
      Enviado desde el formulario de contacto de El Castillo de Mandl
    `;

		// Log the submission
		console.log("Contact form submission:", {
			name,
			surname,
			email,
			phone,
			consult,
			timestamp: new Date().toISOString(),
		});

		// Try to send email via SendGrid if configured
		const sendGridApiKey = process.env.SENDGRID_API_KEY;
		if (sendGridApiKey) {
			try {
				sgMail.setApiKey(sendGridApiKey);
				await sgMail.send({
					to: "reservas@elcastillodemandl.com",
					from: "noreply@elcastillodemandl.com",
					subject: subject,
					text: emailContent,
					html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">Nueva consulta recibida</h2>
              <p><strong>Nombre:</strong> ${name} ${surname}</p>
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

				return res.status(200).json({
					success: true,
					message: "Mensaje enviado correctamente",
				});
			} catch (sendGridError) {
				console.error("SendGrid error:", sendGridError);
			}
		}

		// Fallback: Create mailto link
		const mailtoLink = `mailto:reservas@elcastillodemandl.com?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(emailContent)}`;

		return res.status(200).json({
			success: true,
			message:
				"Mensaje procesado. Se abrirá tu cliente de correo para enviar el mensaje.",
			mailtoLink,
		});
	} catch (error) {
		console.error("Error processing contact form:", error);
		res.status(500).json({
			success: false,
			message: "Error al procesar el formulario",
		});
	}
}
