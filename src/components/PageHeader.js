import { useRouter } from "next/router";
import Image from "next/image";

export default function PageHeader({ title, className = "" }) {
	const router = useRouter();

	const handleLogoClick = () => {
		router.back();
	};

	return (
		<div className={`flex items-center justify-start gap-4 mb-6 ${className}`}>
			{/* Logo with link to home */}
			<button
				onClick={handleLogoClick}
				className="flex-shrink-0 hover:opacity-80 transition-opacity"
			>
				<Image
					src="/images/logo.jpg"
					alt="Castillo de Mandl Logo"
					width={60}
					height={60}
					className="w-12 h-12 md:w-16 md:h-16 object-contain"
				/>
			</button>

			{/* Page title */}
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-serif">
				{title}
			</h1>
		</div>
	);
}
