import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useId, useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ImageCarousel({
	images,
	descriptions = [],
	autoPlay = true,
	interval = 5000,
}) {
	const uniqueId = useId();
	const paginationId = `swiper-pagination-${uniqueId}`;
	const [modalImage, setModalImage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Handle both array of strings and array of objects
	const slides =
		Array.isArray(images) && images.length > 0 && typeof images[0] === "object"
			? images
			: images.map((image, index) => ({
					image,
					description: descriptions[index] || "",
			  }));

	const handleImageClick = (slide) => {
		setModalImage(slide);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setModalImage(null);
	};

	return (
		<div className="w-full overflow-hidden pb-12 font-sans">
			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				pagination={{
					clickable: true,
					el: `#${paginationId}`,
				}}
				autoplay={
					autoPlay
						? {
								delay: interval,
								disableOnInteraction: false,
						  }
						: false
				}
				loop={true}
				className="w-full"
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="flex flex-col items-center justify-center min-h-48 sm:min-h-64 md:min-h-80 lg:min-h-96 px-2">
							<div
								className="cursor-pointer hover:opacity-90 transition-opacity"
								onClick={() => handleImageClick(slide)}
							>
								<Image
									src={slide.image}
									alt={`Slide ${index + 1}`}
									width={800}
									height={600}
									className="w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 object-contain"
								/>
							</div>
							{slide.description && (
								<div className="text-center px-2 pb-2 mt-2">
									<p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium font-sans">
										{slide.description}
									</p>
								</div>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div
				id={paginationId}
				className="swiper-pagination flex justify-center mt-4"
			></div>

			{/* Image Modal */}
			<ImageModal
				isOpen={isModalOpen}
				image={modalImage?.image}
				description={modalImage?.description}
				onClose={closeModal}
			/>
		</div>
	);
}
