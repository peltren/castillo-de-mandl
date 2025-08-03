// src/pages/_app.js
import Head from "next/head";
import "../styles/globals.css";
import "../styles/swiper.css";
import { LanguageProvider } from "../context/LanguageContext";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>El Castillo de Mandl</title>
				<meta
					name="description"
					content="El Castillo de Mandl - Hotel and Resort in La Cumbre, Córdoba, Argentina"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/logo.jpg" />
			</Head>
			<LanguageProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</LanguageProvider>
		</>
	);
}
