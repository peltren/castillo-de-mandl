import { useState } from "react";
import ImageCarousel from "./ImageCarousel";

export default function RoomCategories({
	categories,
	defaultActiveTab = null,
}) {
	const [activeTab, setActiveTab] = useState(
		defaultActiveTab || Object.keys(categories)[0]
	);

	return (
		<>
			{/* Category Tabs */}
			<div className="flex justify-center mb-8 font-serif">
				<div className="flex flex-wrap gap-2 sm:gap-4 bg-gray-100 p-2 rounded-lg w-full sm:w-auto">
					{Object.keys(categories).map((categoryKey) => (
						<button
							key={categoryKey}
							onClick={() => setActiveTab(categoryKey)}
							className={`px-4 py-2 rounded-md font-medium transition-colors font-serif flex-1 sm:flex-none sm:w-32 min-w-0 text-center ${
								activeTab === categoryKey
									? "bg-purple-700 text-white"
									: "bg-white text-gray-700 hover:bg-gray-200"
							}`}
						>
							{categoryKey.toUpperCase()}
						</button>
					))}
				</div>
			</div>

			{/* Room Categories */}
			{Object.entries(categories)
				.filter(([categoryKey, category]) => activeTab === categoryKey)
				.map(([categoryKey, category]) => (
					<div key={categoryKey} className="mb-12">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{category.rooms.map((room, roomIndex) => (
								<div
									key={roomIndex}
									className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
								>
									<div className="p-4 sm:p-6">
										<h3 className="text-2xl font-black mb-4 text-center text-gray-900 font-serif tracking-wide">
											{room.name}
										</h3>
									</div>
									<div className="w-full">
										<ImageCarousel images={room.images} autoPlay={false} />
									</div>
									<div className="px-4 pb-4 sm:p-6">
										<p className="text-gray-600 leading-relaxed font-serif text-justify text-indented">
											{room.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
		</>
	);
}
