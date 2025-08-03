// pages/cumbre.js
import { useTranslations } from "../hooks/useTranslations";
import { usePageColor } from "../hooks/usePageColor";
import ImageCarousel from "../components/ImageCarousel";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/router";

export default function Cumbre() {
	const { t } = useTranslations();
	const router = useRouter();
	const { bg, hover } = usePageColor();

	// Array of cumbre images
	const cumbreImages = [
		"/images/cumbre/cumbre1.jpg",
		"/images/cumbre/cumbre2.jpg",
		"/images/cumbre/cumbre3.jpg",
		"/images/cumbre/cumbre4.jpg",
		"/images/cumbre/cumbre5.jpg",
		"/images/cumbre/cumbre6.jpg",
		"/images/cumbre/cumbre7.jpg",
	];

	return (
		<>
			<main className="min-h-screen bg-white p-8">
				<div className="max-w-4xl mx-auto">
					<PageHeader title={t.cumbre.title} />

					{/* Image Carousel */}
					<div className="mb-8">
						<ImageCarousel images={cumbreImages} />
					</div>

					<div className="mb-8 space-y-4">
						{t.cumbre.description.map((paragraph, index) => (
							<p
								key={index}
								className="description-serif text-justify text-indented"
							>
								{paragraph}
							</p>
						))}
					</div>

					<div className="mt-16">
						<button
							onClick={() => router.back()}
							className={`hidden md:inline-block px-6 py-3 ${bg} text-white no-underline rounded-lg font-bold ${hover} transition-colors`}
						>
							{t.backToHome}
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
