import { useRouter } from "next/router";

export function usePageColor() {
	const router = useRouter();
	const { pathname } = router;

	// Color mapping based on the index page grid colors
	const colorMap = {
		"/suites": {
			bg: "bg-purple-700",
			hover: "hover:bg-purple-600",
		},
		"/cuisine": {
			bg: "bg-orange-800",
			hover: "hover:bg-orange-700",
		},
		"/cumbre": {
			bg: "bg-cyan-600",
			hover: "hover:bg-cyan-500",
		},
		"/relax": {
			bg: "bg-green-700",
			hover: "hover:bg-green-600",
		},
		"/golf": {
			bg: "bg-teal-700",
			hover: "hover:bg-teal-600",
		},
		"/history": {
			bg: "bg-yellow-600",
			hover: "hover:bg-yellow-500",
		},
	};

	// Get the color for the current page, default to purple if not found
	const pageColor = colorMap[pathname] || colorMap["/suites"];

	return pageColor;
}
