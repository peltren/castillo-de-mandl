// pages/relax.js
import { useTranslations } from "../hooks/useTranslations";
import { usePageColor } from "../hooks/usePageColor";
import ImageCarousel from "../components/ImageCarousel";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/router";

export default function Relax() {
	const { t } = useTranslations();
	const router = useRouter();
	const { bg, hover } = usePageColor();

	// Array of relax images
	const relaxImages = [
		"/images/relax/relax1.jpg",
		"/images/relax/relax2.jpg",
		"/images/relax/relax3.jpg",
		"/images/relax/relax4.jpg",
		"/images/relax/relax5.jpg",
		"/images/relax/relax6.jpg",
		"/images/relax/relax7.jpg",
	];

	return (
		<>
			<main className="min-h-screen bg-white p-8">
				<div className="max-w-4xl mx-auto">
					<PageHeader title={t.relax.title} />

					{/* Image Carousel */}
					<div className="mb-8">
						<ImageCarousel images={relaxImages} />
					</div>

					<div className="mb-8 space-y-4">
						{t.relax.description.map((paragraph, index) => (
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
