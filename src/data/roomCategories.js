// src/data/roomCategories.js
export const getRoomCategories = (t) => ({
	junior: {
		title: "JUNIOR SUITES",
		rooms: [
			{
				name: "DEL PRINCIPE",
				description: t.delPrincipeDescription,
				images: [
					"/images/suites/junior/del_principe/del_principe1.jpg",
					"/images/suites/junior/del_principe/del_principe2.jpg",
					"/images/suites/junior/del_principe/del_principe3.jpg",
					"/images/suites/junior/del_principe/plano.jpg",
				],
			},
			{
				name: "LA BOHARDILLA",
				description: t.laBohardillaDescription,
				images: [
					"/images/suites/junior/la_bohardilla/la_bohardilla1.jpg",
					"/images/suites/junior/la_bohardilla/la_bohardilla2.jpg",
					"/images/suites/junior/la_bohardilla/la_bohardilla3.jpg",
					"/images/suites/junior/la_bohardilla/plano.jpg",
				],
			},
			{
				name: "LA MADRIGUERA",
				description: t.laMadrigueraDescription,
				images: [
					"/images/suites/junior/la_madriguera/la_madriguera1.jpg",
					"/images/suites/junior/la_madriguera/la_madriguera2.jpg",
					"/images/suites/junior/la_madriguera/la_madriguera3.jpg",
					"/images/suites/junior/la_madriguera/plano.jpg",
				],
			},
			{
				name: "LOS MOLLES",
				description: t.losMollesDescription,
				images: [
					"/images/suites/junior/los_molles/los_molles1.jpg",
					"/images/suites/junior/los_molles/los_molles2.jpg",
					"/images/suites/junior/los_molles/los_molles3.jpg",
					"/images/suites/junior/los_molles/plano.jpg",
				],
			},
			{
				name: "LA QUEBRADA",
				description: t.laQuebradaDescription,
				images: [
					"/images/suites/junior/la_quebrada/la_quebrada1.jpg",
					"/images/suites/junior/la_quebrada/la_quebrada2.jpg",
					"/images/suites/junior/la_quebrada/la_quebrada3.jpg",
					"/images/suites/junior/la_quebrada/plano.jpg",
				],
			},
			{
				name: "LAS ROSAS",
				description: t.lasRosasDescription,
				images: [
					"/images/suites/junior/las_rosas/las_rosas1.jpg",
					"/images/suites/junior/las_rosas/las_rosas2.jpg",
					"/images/suites/junior/las_rosas/las_rosas3.jpg",
					"/images/suites/junior/las_rosas/plano.jpg",
				],
			},
			{
				name: "LA VIARAPA",
				description: t.laViarapaDescription,
				images: [
					"/images/suites/junior/la_viarapa/la_viarapa1.jpg",
					"/images/suites/junior/la_viarapa/la_viarapa2.jpg",
					"/images/suites/junior/la_viarapa/la_viarapa3.jpg",
					"/images/suites/junior/la_viarapa/plano.jpg",
				],
			},
		],
	},
	senior: {
		title: "SENIOR SUITES",
		rooms: [
			{
				name: "EL VENETO",
				description: t.elVenetoDescription,
				images: [
					"/images/suites/senior/el_veneto/el_veneto1.jpg",
					"/images/suites/senior/el_veneto/el_veneto2.jpg",
					"/images/suites/senior/el_veneto/el_veneto3.jpg",
					"/images/suites/senior/el_veneto/plano.jpg",
				],
			},
			{
				name: "LA TOSCANA",
				description: t.laToscanaDescription,
				images: [
					"/images/suites/senior/la_toscana/la_toscana1.jpg",
					"/images/suites/senior/la_toscana/la_toscana2.jpg",
					"/images/suites/senior/la_toscana/la_toscana3.jpg",
					"/images/suites/senior/la_toscana/plano.jpg",
				],
			},
			{
				name: "LOS CUEROS",
				description: t.losCuerosDescription,
				images: [
					"/images/suites/senior/los_cueros/los_cueros1.jpg",
					"/images/suites/senior/los_cueros/los_cueros2.jpg",
					"/images/suites/senior/los_cueros/los_cueros3.jpg",
					"/images/suites/senior/los_cueros/plano.jpg",
				],
			},
		],
	},
	premium: {
		title: "PREMIUM SUITES",
		rooms: [
			{
				name: "DE FRITZ",
				description: t.deFritzDescription,
				images: [
					"/images/suites/premium/de_fritz/de_fritz1.jpg",
					"/images/suites/premium/de_fritz/de_fritz2.jpg",
					"/images/suites/premium/de_fritz/de_fritz3.jpg",
					"/images/suites/premium/de_fritz/de_fritz4.jpg",
					"/images/suites/premium/de_fritz/plano.jpg",
				],
			},
			{
				name: "LAS CALAS",
				description: t.lasCalasDescription,
				images: [
					"/images/suites/premium/las_calas/las_calas1.jpg",
					"/images/suites/premium/las_calas/las_calas2.jpg",
					"/images/suites/premium/las_calas/las_calas3.jpg",
					"/images/suites/premium/las_calas/las_calas4.jpg",
					"/images/suites/premium/las_calas/plano.jpg",
				],
			},
			{
				name: "LA COLONIAL",
				description: t.laColonialDescription,
				images: [
					"/images/suites/premium/la_colonial/la_colonial1.jpg",
					"/images/suites/premium/la_colonial/la_colonial2.jpg",
					"/images/suites/premium/la_colonial/la_colonial3.jpg",
					"/images/suites/premium/la_colonial/la_colonial4.jpg",
					"/images/suites/premium/la_colonial/plano.jpg",
				],
			},
		],
	},
});
