import prod_1_5PNG from "@images/1_5.png";
import prod_1_4PNG from "@images/1_4.png";
import prod_1_3PNG from "@images/1_3.png";
import prod_1_2PNG from "@images/1_2.png";
import prod_1_1PNG from "@images/1_1.png";

//1
import ice_cube_1 from '@images/ice_cube_1.png';
import ice_cube_2 from '@images/ice_cube_2.png';
import ice_cube_3 from '@images/ice_cube_3.png';
import ice_cube_4 from '@images/ice_cube_4.png';

import leaf_1 from '@images/leaf_1.png';
import leaf_2 from '@images/leaf_2.png';

import lemon_1 from '@images/lemon_1.png';
import lemon_2 from '@images/lemon_2.png';
import lemon_3 from '@images/lemon_3.png';
//2
import cherry2_1 from '@images/cherry2_1.png';
import cherry2_2 from '@images/cherry2_2.png';
import cherry2_3 from '@images/cherry2_3.png';

import leaf2_1 from '@images/leaf2_1.png';
import leaf2_2 from '@images/leaf2_2.png';
import leaf2_4 from '@images/leaf2_4.png';
/* + Кубики льда */
//3
import cola_bg from '@images/cola_bg.png';
import cola_cup from '@images/cola_cup.png';
//4
import peach1 from '@images/peach1.png';
import peach2 from '@images/peach2.png';
import peach3 from '@images/peach3.png';
import leaf4_2 from '@images/leaf4_2.png';
import leaf4_3 from '@images/leaf4_3.png';
//5
import tarragon_bg2 from '@images/tarragon_bg2.png';
import tarragon_secondary from '@images/tarragon_secondary.png';

import PaymentPageSdk from "@raiffeisen-ecom/payment-sdk";
export interface ICompositionLink {
	id: string;
	style: {
		background?: string;
		opacity?: string;
	};
}
// export const paymentPage = new PaymentPageSdk("000001680200002-80200002", {
// 	url: "https://test.ecom.raiffeisen.ru/pay",
// });

export const serverURL = "http://localhost:3001";


export const productStorageName = "selectedProducts";
export const productsQuantity = 5;
export const tempItems = [
	{
		pic: prod_1_2PNG,
		mainColor: "#DBE4A7",
		sideColor: "#e6ecc1",
		rating: "5.0",
		title: "Лимон",
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: "шт",
		properties: ["21 ккал", "200 мл"],
		id:1
	},
	{
		pic: prod_1_1PNG,
		mainColor: "#FF4E5A",
		sideColor: "#f46c81",
		rating: "4.8",
		title: "Вишня",
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: "шт",
		properties: ["21 ккал", "200 мл"],
		id:2
	},
	{
		pic: prod_1_5PNG,
		mainColor: "#2D1109",
		sideColor: "#4c342e",
		rating: "4.7",
		title: "Coca-Cola",
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: "шт",
		properties: ["21 ккал", "200 мл"],
		id:3
	},
	{
		pic: prod_1_4PNG,
		mainColor: "#FBB35E",
		sideColor: "#FCCA8E",
		rating: "5.0",
		title: "Персик",
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: "шт",
		properties: ["21 ккал", "200 мл"],
		id:4
	},
	{
		pic: prod_1_3PNG,
		mainColor: "#3F9B0B",
		sideColor: "#65af3c",
		rating: "5.0",
		title: "Тархун",
		description: "Натуральные ингредиенты",
		price: "10",
		mesure: "шт",
		properties: ["21 ккал", "200 мл"],
		id:5
	},
];

export const Compositionlinks:Array<ICompositionLink> = [
	{
		id: "start_page",
		style: {},
	},
	{
		id: "swiper",
		style: {
			background: "#008CE6",
			opacity: "1",
		},
	},
];
export const tempProducts = [
	{
		title: "Лимон",
		image: prod_1_2PNG,
		secondatyImage: [{ pic: lemon_2, styles: { width: "270px", height: "270px", right: "80px", top: "65px" } },],
		backgroundStyle: { background: "#FFC700" },
		circleFill: "#FFC700",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FFC700",
		pinStroke: "white",
		sideTextColor: "#2F2F2F",
		layerOptionLen: 9,
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 2,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							top: "55%",
							left: "17%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				}, {
					pic: ice_cube_2,
					RTLIndex: 7,
					style: {
						size: {
							width: "98px ",
							height: "91px ",
						},
						position: {
							bottom: "20%",
							right: "20%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				}, {
					pic: lemon_1,
					RTLIndex: 6,
					style: {
						size: {
							width: "250px",
							height: "125px ",
						},
						position: {
							bottom: "0",
							right: "23%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				}, {
					pic: leaf_1,
					RTLIndex: 4,
					style: {
						size: {
							width: "214px ",
							height: "108px",
						},
						position: {
							bottom: "0",
							left: "19%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				},
			]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_3,
				RTLIndex: 5,
				style: {
					size: {
						width: "90px",
						height: "82px",
					},
					position: {
						bottom: "0",
						right: "45%"
					},
					transform: {

						transform: "rotate(0deg)"
					}
				}
			}, {
				pic: leaf_2,
				RTLIndex: 8,
				style: {
					size: {
						width: "165px",
						height: "150px",
					},
					position: {
						top: "50px",
						right: "20%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: lemon_3,
				RTLIndex: 1,
				style: {
					soze: {
						width: "112px",
						height: "161px",
					},
					position: {
						top: "150px",
						left: "20%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_4,
				RTLIndex: 0,
				style: {
					size: {
						width: "72px",
						height: "72px",
					},
					position: {
						top: "80px",
						left: "28%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: leaf2_4,
				RTLIndex: 3,
				style: {
					size: {
						width: "44px",
						height: "66px",
					},
					position: {
						top: "70%",
						left: "25%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			},]
		},],
	}, {
		title: "Вишня",
		image: prod_1_1PNG,
		secondatyImage: [{ pic: cherry2_3, styles: { width: "139px", height: "auto", top: "30px", right: "10%" } },
		{ pic: cherry2_1, styles: { width: "139px", height: "auto", bottom: "220px", left: "14%" } },
		{ pic: leaf2_2, styles: { width: "139px", height: "auto", top: "150px", left: "15%" } }],
		backgroundStyle: { background: "#FF4E5A" },
		circleFill: "#FF4E5A",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FF4E5A",
		pinStroke: "white",
		sideTextColor: "#fff",
		layerOptionLen: 9,
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 0,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							top: "21%",
							left: "19%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				}, {
					pic: leaf2_4,
					RTLIndex: 7,
					style: {
						size: {
							width: "66px ",
							height: "auto ",
						},
						position: {
							bottom: "15%",
							right: "20%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				}, {
					pic: cherry2_1,
					RTLIndex: 6,
					style: {
						size: {
							width: "121px",
							height: "auto ",
						},
						position: {
							bottom: "-25px",
							right: "23%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				}, {
					pic: leaf2_1,
					RTLIndex: 4,
					style: {
						size: {
							width: "173px ",
							height: "auto",
						},
						position: {
							bottom: "0",
							left: "19%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				},
			]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [
				{
					pic: ice_cube_2,
					RTLIndex: 8,
					style: {
						size: {
							width: "94px",
							height: "auto",
						},
						position: {
							top: "50px",
							right: "20%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				}, {
					pic: cherry2_2,
					RTLIndex: 3,
					style: {
						soze: {
							width: "112px",
							height: "161px",
						},
						position: {
							bottom: "150px",
							left: "17%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_4,
				RTLIndex: 4,
				style: {
					size: {
						width: "72px",
						height: "72px",
					},
					position: {
						bottom: "60px",
						left: "32%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: leaf2_4,
				RTLIndex: 2,
				style: {
					size: {
						width: "89px",
						height: "auto",
					},
					position: {
						top: "50%",
						left: "25%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			}, {
				pic: leaf2_4,
				RTLIndex: 8,
				style: {
					size: {
						width: "35px",
						height: "auto",
					},
					position: {
						top: "50px",
						right: "34%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			},
			]
		},],
	}, {
		title: "Кола",
		image: prod_1_5PNG,
		secondatyImage: [],
		backgroundStyle: { background: `url(${cola_bg}) bottom center / 110% auto no-repeat, #230D07` },
		circleFill: "#230D07",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#230D07",
		pinStroke: "white",
		sideTextColor: "#fff",
		layerOptionLen: 9,
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 1,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							bottom: "17%",
							left: "28%"
						},
						transform: {
							transform: "rotate(-30deg)"
						}
					}
				}, {
					pic: ice_cube_4,
					RTLIndex: 2,
					style: {
						size: {
							width: "68px",
							height: "auto",
						},
						position: {
							bottom: "20px",
							right: "36%"
						},
						transform: {
							transform: "rotate(0deg)",
							opacity: "0.7"
						}
					}
				},
			]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 0, layerStyle: {
				background: `url(${cola_cup}) right 8% center no-repeat`,
				height: "100%",
			},
			bgItems: []
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [{
				pic: ice_cube_4,
				RTLIndex: 0,
				style: {
					size: {
						width: "72px",
						height: "72px",
					},
					position: {
						top: "80px",
						left: "28%"
					},
					transform: {
						transform: "rotate(0deg)",
						opacity: "0.5"
					}
				}
			}, {
				pic: ice_cube_4,
				RTLIndex: 3,
				style: {
					size: {
						width: "130px",
						height: "auto",
					},
					position: {
						bottom: "-20px",
						right: "29%"
					},
					transform: {
						transform: "rotate(30deg)",
						opacity: "0.9"
					}
				}
			},]
		},],
	}, {
		title: "Персик",
		image: prod_1_4PNG,
		secondatyImage: [{ pic: peach1, styles: { width: "250px", height: "250px", right: "175px", top: "54px" } }],
		backgroundStyle: { background: "#FBB35E" },
		circleFill: "#FBB35E",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FBB35E",
		pinStroke: "white",
		sideTextColor: "#fff",
		layerOptionLen: 9,
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 1,
					style: {
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							top: "8%",
							left: "20%"
						},
						transform: {
							transform: "rotate(40deg)"
						}
					}
				}, {
					pic: ice_cube_1,
					RTLIndex: 5,
					style: {
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							bottom: "8%",
							right: "35%"
						},
						transform: {
							transform: "rotate(40deg)"
						}
					}
				}, {
					pic: peach3,
					RTLIndex: 6,
					style: {
						size: {
							width: "264px",
							height: "auto",
						},
						position: {
							bottom: "0",
							right: "22%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				}, {
					pic: leaf4_3,
					RTLIndex: 4,
					style: {
						size: {
							width: "264px",
							height: "auto",
						},
						position: {
							bottom: "0",
							left: "25%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				},
			]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [{
				pic: ice_cube_4,
				RTLIndex: 3,
				style: {
					size: {
						width: "90px",
						height: "82px",
					},
					position: {
						bottom: "0",
						left: "16%"
					},
					transform: {
						transform: "rotate(45deg)"
					}
				}
			}, {
				pic: leaf4_2,
				RTLIndex: 0,
				style: {
					size: {
						width: "217px",
						height: "auto",
					},
					position: {
						top: "-10px",
						left: "26%"
					},
					transform: {
						transform: "rotate(0deg)"
					}
				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [{
				pic: ice_cube_4,
				RTLIndex: 8,
				style: {
					size: {
						width: "72px",
						height: "72px",
					},
					position: {
						top: "80px",
						right: "16%"
					},
					transform: {
						transform: "rotate(0deg)"
					}
				}
			}, {
				pic: peach2,
				RTLIndex: 2,
				style: {
					size: {
						width: "158px",
						height: "auto",
					},
					position: {
						top: "27%",
						left: "12%"
					},
					transform: {
						transform: "rotate(0deg)"
					}
				}
			}, {
				pic: leaf4_2,
				RTLIndex: 5,
				style: {
					size: {
						width: "131px",
						height: "auto",
					},
					position: {
						top: "31%",
						right: "24%"
					},
					transform: {
						transform: "rotate(180deg)"
					}
				}
			},]
		},],
	}, {
		title: "Тархун",
		image: prod_1_3PNG,
		secondatyImage: [{ pic: tarragon_secondary, styles: { width: "357px", height: "auto" } }],
		backgroundStyle: { background: "#3F9B0B" },
		circleFill: "#3F9B0B",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#3F9B0B",
		pinStroke: "white",
		sideTextColor: "#fff",
		layerOptionLen: 9,
		noAnimatedBG: [{
			pic: tarragon_bg2,
			RTLIndex: 5,
			style: {
				size: {
					width: "auto",
					height: "auto",
				},
				position: {
					bottom: "-11%",
					right: "31%"
				},
				transform: {
					transform: "rotate(-4deg)"
				}
			}
		}, {
			pic: tarragon_bg2,
			RTLIndex: 8,
			style: {
				size: {
					width: "auto",
					height: "auto",
				},
				position: {
					top: "-12%",
					right: "11%"
				},
				transform: {
					transform: "rotate(80deg)"
				}
			}
		},],
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 1,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							top: "51%",
							left: "17%"
						},
						transform: {
							transform: "rotate(-45deg)"
						}
					}
				}, {
					pic: ice_cube_1,
					RTLIndex: 4,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							bottom: "5%",
							right: "34%"
						},
						transform: {
							transform: "rotate(35deg)"
						}
					}
				},
			]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [{
				pic: ice_cube_2,
				RTLIndex: 2,
				style: {
					size: {
						width: "98px ",
						height: "91px ",
					},
					position: {
						bottom: "22%",
						left: "28%"
					},
					transform: {
						transform: "rotate(-45deg)"
					}
				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [{
				pic: ice_cube_4,
				RTLIndex: 0,
				style: {
					size: {
						width: "72px",
						height: "72px",
					},
					position: {
						top: "80px",
						left: "28%"
					},
					transform: {
						transform: "rotate(0deg)"
					}
				}
			}, {
				pic: ice_cube_4,
				RTLIndex: 3,
				style: {
					size: {
						width: "90px",
						height: "auto",
					},
					position: {
						top: "90px",
						right: "30%"
					},
					transform: {
						transform: "rotate(0deg)"
					}
				}
			},]
		},],
	}, {
		title: "Лимон",
		image: prod_1_2PNG,
		secondatyImage: [{ pic: lemon_2, styles: { width: "250px", height: "250px" } }],
		backgroundStyle: { background: "#FBB35E" },
		circleFill: "#FBB35E",
		ccal: "21 ккал",
		ml: "200 мл",
		pinFill: "#FBB35E",
		pinStroke: "white",
		sideTextColor: "#fff",
		layerOptionLen: 9,
		layerOptions: [{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [
				{
					pic: ice_cube_1,
					RTLIndex: 2,
					style: {//
						size: {
							width: "119px",
							height: "108px",
						},
						position: {
							top: "55%",
							left: "17%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				}, {
					pic: ice_cube_2,
					RTLIndex: 7,
					style: {
						size: {
							width: "98px ",
							height: "91px ",
						},
						position: {
							bottom: "20%",
							right: "20%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				}, {
					pic: lemon_1,
					RTLIndex: 6,
					style: {
						size: {
							width: "250px",
							height: "125px ",
						},
						position: {
							bottom: "0",
							right: "23%"
						},
						transform: {
							transform: "rotate(0deg)"
						}
					}
				}, {
					pic: leaf_1,
					RTLIndex: 4,
					style: {
						size: {
							width: "214px ",
							height: "108px",
						},
						position: {
							bottom: "0",
							left: "19%"
						},
						transform: {
							transform: "rotate(0deg)"

						}
					}
				},
			]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {},
			bgItems: [{
				pic: ice_cube_3,
				RTLIndex: 5,
				style: {
					size: {
						width: "90px",
						height: "82px",
					},
					position: {
						bottom: "0",
						right: "45%"
					},
					transform: {
						transform: "rotate(0deg)"
					}
				}
			}, {
				pic: leaf_2,
				RTLIndex: 8,
				style: {
					size: {
						width: "165px",
						height: "150px",
					},
					position: {
						top: "50px",
						right: "20%"
					},
					transform: {
						transform: "rotate(0deg)"
					}
				}
			}, {
				pic: lemon_3,
				RTLIndex: 1,
				style: {
					soze: {
						width: "112px",
						height: "161px",
					},
					position: {
						top: "150px",
						left: "20%"
					},
					transform: {
						transform: "rotate(0deg)"

					}
				}
			},]
		},
		{
			parallaxCoefficientX: 1, parallaxCoefficientY: 1, layerStyle: {

			},
			bgItems: [{
				pic: ice_cube_4,
				RTLIndex: 0,
				style: {
					size: {
						width: "72px",
						height: "72px",
					},
					position: {
						top: "80px",
						left: "28%"
					},
					transform: {
						transform: "rotate(0deg)"
					}
				}
			}, {
				pic: leaf2_4,
				RTLIndex: 3,
				style: {
					size: {
						width: "44px",
						height: "66px",
					},
					position: {
						top: "70%",
						left: "25%"
					},
					transform: {
						transform: "rotate(0deg)"
					}
				}
			},]
		},],
	},
];