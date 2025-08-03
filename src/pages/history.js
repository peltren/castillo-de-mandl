// pages/history.js
import Image from "next/image";
import { useTranslations } from "../hooks/useTranslations";
import { usePageColor } from "../hooks/usePageColor";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/router";

export default function History() {
	const { t } = useTranslations();
	const router = useRouter();
	const { bg, hover } = usePageColor();

	// Helper function to group text and images for desktop layout
	const groupSectionsForDesktop = (sections) => {
		const groups = [];
		let currentTexts = [];

		for (let i = 0; i < sections.length; i++) {
			const section = sections[i];

			if (section.type === "paragraph") {
				currentTexts.push(section.content);
			} else if (section.type === "image") {
				// Create a group with accumulated texts and the current image
				groups.push({
					texts: [...currentTexts],
					image: section,
					key: `desktop-${i}`,
				});
				currentTexts = []; // Reset texts for next group
			}
		}

		// Handle any remaining texts without an image
		if (currentTexts.length > 0) {
			groups.push({
				texts: currentTexts,
				image: null,
				key: `desktop-text-only-${groups.length}`,
			});
		}

		return groups;
	};

	return (
		<>
			<main className="min-h-screen bg-white p-8">
				<div className="max-w-4xl mx-auto">
					{/* Title with Logo */}
					<PageHeader title={t.history.title} />

					{/* Mobile layout - Content with intercalated images */}
					<div className="space-y-8 md:hidden">
						{t.history.sections.map((section, index) => (
							<div key={index}>
								{section.type === "paragraph" ? (
									<div className="prose prose-lg max-w-none">
										<p className="description-serif text-justify text-indented">
											{section.content}
										</p>
									</div>
								) : section.type === "image" ? (
									<div className="flex justify-center">
										<Image
											src={section.src}
											alt={section.alt}
											width={800}
											height={600}
											className="w-full max-w-2xl object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow"
										/>
									</div>
								) : null}
							</div>
						))}
					</div>

					{/* Desktop layout with images on right and text on left */}
					<div className="hidden md:block space-y-12">
						{groupSectionsForDesktop(t.history.sections).map((item) => (
							<div
								key={item.key}
								className="flex flex-col lg:flex-row gap-8 items-start"
							>
								{/* Text content */}
								{item.texts && item.texts.length > 0 && (
									<div className="flex-1 prose prose-lg max-w-none space-y-4">
										{item.texts.map((text, textIndex) => (
											<p
												key={textIndex}
												className="description-serif text-justify text-indented"
											>
												{text}
											</p>
										))}
									</div>
								)}

								{/* Image content */}
								{item.image && (
									<div className="flex-1 flex justify-center lg:justify-end">
										<Image
											src={item.image.src}
											alt={item.image.alt}
											width={300}
											height={225}
											className="w-full max-w-sm object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow"
										/>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Back to Home button */}
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
