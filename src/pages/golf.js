// pages/golf.js
import { useTranslations } from "../hooks/useTranslations";
import { usePageColor } from "../hooks/usePageColor";
import ImageCarousel from "../components/ImageCarousel";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/router";

export default function Golf() {
	const { t } = useTranslations();
	const router = useRouter();
	const { bg, hover } = usePageColor();

	// Array of golf images
	const golfImages = [
		"/images/golf/golf1.jpg",
		"/images/golf/golf2.jpg",
		"/images/golf/golf3.jpg",
		"/images/golf/golf4.jpg",
		"/images/golf/golf5.jpg",
		"/images/golf/golf6.jpg",
		"/images/golf/golf7.jpg",
	];

	return (
		<>
			<main className="min-h-screen bg-white p-8">
				<div className="max-w-4xl mx-auto">
					<PageHeader title={t.golf.title} />

					{/* Image Carousel */}
					<div className="mb-8">
						<ImageCarousel images={golfImages} />
					</div>

					<div className="mb-8 space-y-4">
						{t.golf.description.map((paragraph, index) => (
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
