// pages/suites.js
import { useTranslations } from "../hooks/useTranslations";
import { usePageColor } from "../hooks/usePageColor";
import RoomCategories from "../components/RoomCategories";
import { getRoomCategories } from "../data/roomCategories";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/router";

export default function Suites() {
	const { t } = useTranslations();
	const router = useRouter();
	const { bg, hover } = usePageColor();

	// Room data organized by category
	const roomCategories = getRoomCategories(t);

	return (
		<>
			<main className="min-h-screen bg-white p-8">
				<div className="max-w-4xl mx-auto">
					<PageHeader title={t.suites.title} />
					<div className="mb-8 space-y-4">
						{t.suites.description.map((paragraph, index) => (
							<p
								key={index}
								className="description-serif text-justify text-indented"
							>
								{paragraph}
							</p>
						))}
					</div>

					<RoomCategories
						categories={roomCategories}
						defaultActiveTab="junior"
					/>

					<div className="mt-16">
						<button
							onClick={() => router.back()}
							className={`hidden md:inline-block px-6 py-3 ${bg} text-white no-underline rounded-lg font-bold ${hover} transition-colors font-sans`}
						>
							{t.backToHome}
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
