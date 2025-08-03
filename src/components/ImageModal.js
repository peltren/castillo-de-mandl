import { useEffect } from "react";
import Image from "next/image";

export default function ImageModal({ isOpen, image, description, onClose }) {
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
			onClick={onClose}
		>
			<div className="flex flex-col items-center justify-center max-w-7xl max-h-full p-2 sm:p-4">
				<div className="relative">
					<Image
						src={image}
						alt={description || "Imagen ampliada"}
						width={1920}
						height={1080}
						className="max-w-[95vw] max-h-[85vh] object-scale-down cursor-pointer"
						priority
					/>
				</div>

				{description && (
					<div className="mt-4 bg-black bg-opacity-75 text-white p-2 sm:p-4 max-w-[95vw] max-h-[10vh] overflow-y-auto rounded cursor-pointer">
						<p className="text-xs sm:text-sm md:text-base text-center font-medium leading-tight">
							{description}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
