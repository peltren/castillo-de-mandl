import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "../hooks/useTranslations";
import Link from "next/link";

export default function Footer() {
	const { t } = useTranslations();

	return (
		<footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-6 mt-auto relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 bg-black/20"></div>
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="flex justify-between items-center">
					<div className="text-left">
						<Link
							href="/contact"
							className="inline-flex items-center px-4 py-2 text-base text-gray-300 hover:text-white transition-all duration-300 font-bold tracking-wide font-serif rounded-lg hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-gray-600"
						>
							{t.contact}
						</Link>
					</div>
					<div className="font-serif font-light">
						<LanguageSwitcher />
					</div>
				</div>
			</div>
		</footer>
	);
}
