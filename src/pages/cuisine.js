// pages/gastronomy.js
import Image from "next/image";
import { useTranslations } from "../hooks/useTranslations";
import { usePageColor } from "../hooks/usePageColor";
import ImageCarousel from "../components/ImageCarousel";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/router";

export default function Cuisine() {
	const { t } = useTranslations();
	const router = useRouter();
	const { bg, hover } = usePageColor();

	// Main cuisine image
	const cuisineImage = "/images/cuisine/cuisine1.jpg";

	// Array of menu images with descriptions for carousel
	const menuImages = [
		{
			image: "/images/cuisine/menu1.jpg",
			description: t.menu1Description,
		},
		{
			image: "/images/cuisine/menu2.jpg",
			description: t.menu2Description,
		},
		{
			image: "/images/cuisine/menu3.jpg",
			description: t.menu3Description,
		},
		{
			image: "/images/cuisine/menu4.jpg",
			description: t.menu4Description,
		},
		{
			image: "/images/cuisine/menu5.jpg",
			description: t.menu5Description,
		},
		{
			image: "/images/cuisine/menu6.jpg",
			description: t.menu6Description,
		},
		{
			image: "/images/cuisine/menu7.jpg",
			description: t.menu7Description,
		},
	];

	return (
		<>
			<main className="min-h-screen bg-white p-8">
				<div className="max-w-4xl mx-auto">
					{/* Title with Logo */}
					<PageHeader title={t.gastronomy.title} />

					{/* Main cuisine image */}
					<div className="mb-6">
						<Image
							src={cuisineImage}
							alt="Cuisine"
							width={1200}
							height={800}
							className="w-full h-auto rounded-lg shadow-lg"
						/>
					</div>

					{/* Description */}
					<div className="mb-8 space-y-4">
						{t.gastronomy.description.map((paragraph, index) => (
							<p
								key={index}
								className="description-serif text-justify text-indented"
							>
								{paragraph}
							</p>
						))}
					</div>

					{/* Menu Carousel */}
					<div className="mb-8">
						<h2 className="text-2xl font-semibold mb-4">{t.menuTitle}</h2>
						<ImageCarousel images={menuImages} />
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
