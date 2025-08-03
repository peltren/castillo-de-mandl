// pages/index.js
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "../hooks/useTranslations";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
	const { t } = useTranslations();

	// Array of castle images
	const castleImages = [
		"/images/castle/castle1.jpg",
		"/images/castle/castle2.jpg",
		"/images/castle/castle3.jpg",
		"/images/castle/castle4.jpg",
		"/images/castle/castle5.jpg",
		"/images/castle/castle6.jpg",
		"/images/castle/castle7.jpg",
		"/images/castle/castle8.jpg",
		"/images/castle/castle9.jpg",
	];

	return (
		<>
			<main className="min-h-screen bg-white flex flex-col font-sans">
				{/* Header Section */}
				<header className="text-center py-4 flex-shrink-0">
					{/* Logo */}
					<div className="mb-0 inline-block">
						<Image
							src="/images/mandl2.jpg"
							alt={t.logoAlt}
							width={0}
							height={0}
							className="w-auto h-auto max-h-36 md:max-h-40"
						/>
					</div>
				</header>

				{/* Castle Content Section */}
				<div className="flex-1 px-4 md:px-8">
					<div className="max-w-4xl mx-auto">
						{/* Image Carousel - Fixed container to prevent horizontal scroll */}
						<div className="mb-6 md:mb-8 overflow-hidden">
							<div className="w-full max-w-full">
								<ImageCarousel images={castleImages} />
							</div>
						</div>

						<div className="mb-6 md:mb-8 space-y-4">
							{t.castle.description.map((paragraph, index) => (
								<p
									key={index}
									className="description-serif text-justify text-indented"
								>
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</div>

				{/* Main Interactive Grid */}
				<div className="flex-1 flex items-center justify-center px-4 md:px-8 py-4">
					<div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 w-full max-w-4xl">
						{/* Block 1 - SUITES */}
						<Link
							href="/suites"
							className="aspect-[4/3] rounded-lg overflow-hidden group hover:opacity-90 transition-opacity"
						>
							<div className="relative h-4/5 md:h-5/6">
								<Image
									src="/images/suites/premium/las_calas/las_calas2.jpg"
									alt="Suites"
									fill
									className="object-cover"
									priority
								/>
							</div>
							<div className="h-1/5 md:h-1/6 bg-purple-700 flex items-center justify-center">
								<span className="text-white font-serif font-semibold text-sm md:text-base text-center">
									{t.suitesNav}
								</span>
							</div>
						</Link>

						{/* Block 2 - CUISINE */}
						<Link
							href="/cuisine"
							className="aspect-[4/3] rounded-lg overflow-hidden group hover:opacity-90 transition-opacity"
						>
							<div className="relative h-4/5 md:h-5/6">
								<Image
									src="/images/cuisine/menu5.jpg"
									alt="Cuisine"
									fill
									className="object-cover"
									priority
								/>
							</div>
							<div className="h-1/5 md:h-1/6 bg-orange-800 flex items-center justify-center">
								<span className="text-white font-serif font-semibold text-sm md:text-base text-center">
									{t.gastronomyNav}
								</span>
							</div>
						</Link>

						{/* Block 3 - LA CUMBRE */}
						<Link
							href="/cumbre"
							className="aspect-[4/3] rounded-lg overflow-hidden group hover:opacity-90 transition-opacity"
						>
							<div className="relative h-4/5 md:h-5/6">
								<Image
									src="/images/cumbre/cumbre6.jpg"
									alt="La Cumbre"
									fill
									className="object-cover"
									priority
								/>
							</div>
							<div className="h-1/5 md:h-1/6 bg-cyan-600 flex items-center justify-center">
								<span className="text-white font-serif font-semibold text-sm md:text-base text-center">
									{t.laCumbre}
								</span>
							</div>
						</Link>

						{/* Block 4 - RELAX */}
						<Link
							href="/relax"
							className="aspect-[4/3] rounded-lg overflow-hidden group hover:opacity-90 transition-opacity"
						>
							<div className="relative h-4/5 md:h-5/6">
								<Image
									src="/images/relax/relax4.jpg"
									alt="Relax"
									fill
									className="object-cover"
									priority
								/>
							</div>
							<div className="h-1/5 md:h-1/6 bg-green-700 flex items-center justify-center">
								<span className="text-white font-serif font-semibold text-sm md:text-base text-center">
									{t.activities}
								</span>
							</div>
						</Link>

						{/* Block 5 - GOLF */}
						<Link
							href="/golf"
							className="aspect-[4/3] rounded-lg overflow-hidden group hover:opacity-90 transition-opacity"
						>
							<div className="relative h-4/5 md:h-5/6">
								<Image
									src="/images/golf/golf3.jpg"
									alt="Golf"
									fill
									className="object-cover"
									priority
								/>
							</div>
							<div className="h-1/5 md:h-1/6 bg-teal-700 flex items-center justify-center">
								<span className="text-white font-serif font-semibold text-sm md:text-base text-center">
									{t.golfNav}
								</span>
							</div>
						</Link>

						{/* Block 6 - HISTORY */}
						<Link
							href="/history"
							className="aspect-[4/3] rounded-lg overflow-hidden group hover:opacity-90 transition-opacity"
						>
							<div className="relative h-4/5 md:h-5/6">
								<Image
									src="/images/history/history1.jpg"
									alt="History"
									fill
									className="object-cover"
									priority
								/>
							</div>
							<div className="h-1/5 md:h-1/6 bg-yellow-600 flex items-center justify-center">
								<span className="text-white font-serif font-semibold text-sm md:text-base text-center">
									{t.historyNav}
								</span>
							</div>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
