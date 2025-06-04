import Image from "next/image";
import React from "react";
import slika from "@/public/imgs/slik1.jpg";
import slika2 from "@/public/imgs/slika5.jpg";
import slika3 from "@/public/imgs/slika3.jpg";
import slika4 from "@/public/imgs/slika2.jpg";
const Hero = () => {
	const list = [
		{ ime: "S l i k e", slika: slika },
		{ ime: "S n i m c i", slika: slika2 },
		{ ime: "R E P E R T O A R", slika: slika4 },
		{ ime: "K o n t a k t", slika: slika3 },
	];
	return (
		<div className="grid  grid-cols-4 px-0 gap-2 justify-center w-full bg-neutral-900 min-h-screen overflow-hidden">
			{list.map((li, i) => {
				return (
					<div
						key={i}
						className="relative w-full flex justify-center items-center rotate-6 min-h-[120%] -translate-y-[10%]  overflow-hidden rounded-xl h-full   cursor-pointer hover:scale-105 duration-200"
					>
						<Image
							src={li.slika}
							alt=""
							className="absolute h-full w-full object-cover blur-xs "
						/>
						<div className="inset-0  absolute z-10 bg-black opacity-40"></div>

						<h2
							style={{ textOrientation: "mixed", writingMode: "sideways-lr" }}
							className=" uppercase  font-serif text-gray-200 opacity-70 z-20 text-6xl font-bold text"
						>
							{li.ime}
						</h2>
					</div>
				);
			})}
		</div>
	);
};

export default Hero;
