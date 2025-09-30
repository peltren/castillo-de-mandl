// pages/contact.js
import { useTranslations } from "../hooks/useTranslations";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/router";
import API_CONFIG from "../config/api";

export default function Contact() {
	const { t } = useTranslations();
	const router = useRouter();
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		consult: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		// Validate required fields
		if (!formData.fullName || !formData.email || !formData.consult) {
			setSubmitStatus({
				type: "error",
				message: "Por favor completa todos los campos obligatorios",
			});
			setIsSubmitting(false);
			return;
		}

		try {
			// Llamar al backend en Vercel
			const response = await fetch(
				`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SEND_EMAIL}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			const result = await response.json();

			if (result.success) {
				setSubmitStatus({
					type: "success",
					message: "¡Mensaje enviado correctamente! Te contactaremos pronto.",
				});

				// Reset form
				setFormData({
					fullName: "",
					email: "",
					phone: "",
					consult: "",
				});
			} else {
				setSubmitStatus({
					type: "error",
					message:
						result.message || "Error al enviar el mensaje. Inténtalo de nuevo.",
				});
			}
		} catch (error) {
			console.error("Error:", error);
			setSubmitStatus({
				type: "error",
				message: "Error de conexión. Inténtalo de nuevo más tarde.",
			});
		}

		setIsSubmitting(false);
	};

	return (
		<>
			<main className="min-h-screen bg-white p-8 font-sans">
				<div className="max-w-6xl mx-auto">
					<PageHeader title={t.contactTitle} />
					<p className="text-lg leading-relaxed mb-8 text-gray-600 max-w-2xl mx-auto font-sans text-justify text-indented">
						{t.contactDescription}
					</p>

					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Information */}
						<div className="bg-gray-50 rounded-lg p-8">
							<div className="space-y-6">
								<a
									href="https://www.instagram.com/elcastillodemandl"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-start space-x-3 hover:text-blue-600 transition-colors"
								>
									<div className="flex-shrink-0 mt-1">
										<svg
											className="w-5 h-5 text-gray-600"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
										</svg>
									</div>
									<div>
										<p className="text-gray-600 font-sans">
											@elcastillodemandl
										</p>
									</div>
								</a>

								<a
									href="https://wa.me/5493548593427"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-start space-x-3 hover:text-green-600 transition-colors"
								>
									<div className="flex-shrink-0 mt-1">
										<svg
											className="w-5 h-5 text-gray-600"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
										</svg>
									</div>
									<div>
										<p className="text-gray-600 font-sans">
											+54 9 3548 59-3427
										</p>
									</div>
								</a>

								<a
									href="mailto:reservas@elcastillodemandl.com"
									className="flex items-start space-x-3 hover:text-blue-600 transition-colors"
								>
									<div className="flex-shrink-0 mt-1">
										<svg
											className="w-5 h-5 text-gray-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div>
										<p className="text-gray-600 font-sans">
											reservas@elcastillodemandl.com
										</p>
									</div>
								</a>

								<a
									href="https://www.google.com/maps/place/El+Castillo+de+Mandl/@-30.9846838,-64.4811785,17z/data=!4m20!1m10!3m9!1s0x942d857b7cd22c8f:0x47bcdccbbbd4018f!2sEl+Castillo+de+Mandl!5m2!4m1!1i2!8m2!3d-30.9846884!4d-64.4786036!16s%2Fg%2F12vsrzg32!3m8!1s0x942d857b7cd22c8f:0x47bcdccbbbd4018f!5m2!4m1!1i2!8m2!3d-30.9846884!4d-64.4786036!16s%2Fg%2F12vsrzg32?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-start space-x-3 hover:text-blue-600 transition-colors"
								>
									<div className="flex-shrink-0 mt-1">
										<svg
											className="w-5 h-5 text-gray-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<div>
										<p className="text-gray-600 leading-relaxed font-sans">
											{t.addressText}
											<br />
											{t.addressCity}
										</p>
									</div>
								</a>
							</div>
						</div>

						{/* Contact Form */}
						<div className="bg-white rounded-lg shadow-lg p-8">
							<h2 className="text-2xl font-semibold mb-6 text-gray-800 font-serif">
								{t.contactFormTitle}
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="fullName"
										className="block text-sm font-medium text-gray-700 mb-2 font-sans"
									>
										{t.fullNameLabel} *
									</label>
									<input
										type="text"
										id="fullName"
										name="fullName"
										value={formData.fullName}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-sans"
										placeholder="Your full name"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-2 font-sans"
									>
										{t.emailLabel} *
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-sans"
										placeholder="your.email@example.com"
									/>
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-2 font-sans"
									>
										{t.phoneLabel}
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-sans"
										placeholder="Your phone number"
									/>
								</div>

								<div>
									<label
										htmlFor="consult"
										className="block text-sm font-medium text-gray-700 mb-2 font-sans"
									>
										{t.consultLabel} *
									</label>
									<textarea
										id="consult"
										name="consult"
										value={formData.consult}
										onChange={handleInputChange}
										required
										rows={6}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none font-sans"
										placeholder="Please tell us about your inquiry..."
									/>
								</div>

								{submitStatus && (
									<div
										className={`p-4 rounded-lg mb-4 ${
											submitStatus.type === "success"
												? "bg-green-100 text-green-800 border border-green-200"
												: "bg-red-100 text-red-800 border border-red-200"
										}`}
									>
										{submitStatus.message}
									</div>
								)}

								<button
									type="submit"
									disabled={isSubmitting}
									className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 font-sans ${
										isSubmitting
											? "bg-gray-400 cursor-not-allowed"
											: "bg-blue-600 text-white hover:bg-blue-700"
									}`}
								>
									{isSubmitting ? (
										<span className="flex items-center justify-center">
											<svg
												className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											{t.sendingMessage}
										</span>
									) : (
										t.sendMessageButton
									)}
								</button>
							</form>
						</div>
					</div>

					{/* Back to Home Button */}
					<div className="mt-16">
						<button
							onClick={() => router.back()}
							className="hidden md:inline-block px-8 py-4 bg-gray-800 text-white no-underline rounded-lg font-bold hover:bg-gray-700 transition-colors font-sans"
						>
							{t.backToHome}
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
