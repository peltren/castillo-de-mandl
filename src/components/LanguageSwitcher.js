import { useTranslations } from "../hooks/useTranslations";

export default function LanguageSwitcher() {
	const { t, language, changeLanguage } = useTranslations();

	return (
		<div className="flex justify-center items-center gap-2 text-xs font-serif">
			<button
				onClick={() => changeLanguage("es")}
				className={`transition-all duration-200 cursor-pointer ${
					language === "es"
						? "text-amber-300 font-semibold"
						: "text-gray-300 hover:text-white"
				}`}
				title={t.switchToSpanish}
			>
				ESPAÑOL
			</button>
			<span className="text-gray-400">-</span>
			<button
				onClick={() => changeLanguage("en")}
				className={`transition-all duration-200 cursor-pointer ${
					language === "en"
						? "text-amber-300 font-semibold"
						: "text-gray-300 hover:text-white"
				}`}
				title={t.switchToEnglish}
			>
				ENGLISH
			</button>
		</div>
	);
}
