import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState("en");

	useEffect(() => {
		// Check if there's a saved language preference in localStorage
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage) {
			setLanguage(savedLanguage);
		}
	}, []);

	const changeLanguage = (newLanguage) => {
		setLanguage(newLanguage);
		localStorage.setItem("language", newLanguage);
	};

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
