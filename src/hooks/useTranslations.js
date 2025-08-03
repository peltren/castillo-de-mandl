import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export function useTranslations() {
	const { language, changeLanguage } = useLanguage();
	const t = translations[language];

	return {
		t,
		language,
		changeLanguage,
	};
}
