import React from "react";
import lazarIJA from "@/public/imgs/LazarIJa.jpg";
import slika from "@/public/imgs/slik1.jpg";
import slika6 from "@/public/imgs/slika6.jpg";
import slika7 from "@/public/imgs/slika7.jpg";
import Image from "next/image";
const Slike = () => {
	return (
		<div
			id="slike"
			className="w-full  px-8 md:px-16 py-16 gap-8 bg-neutral-900 flex flex-col font-serif"
		>
			<h2 className="text-2xl md:text-4xl text-gray-200 font-bold">Slike</h2>
			<div className="grid md:grid-cols-2 gap-8 w-full">
				<div className="rounded-sm bg-gray-800 aspect-video w-full overflow-hidden">
					<Image
						src={lazarIJA}
						className="object-cover"
						alt=""
					></Image>
				</div>
				<div className="rounded-sm bg-gray-800 aspect-video w-full overflow-hidden ">
					<Image
						src={slika}
						className="object-cover -translate-y-1/2"
						alt=""
					></Image>
				</div>
				<div className="rounded-sm bg-gray-800 aspect-video w-full overflow-hidden ">
					<Image
						src={slika6}
						className="object-cover -translate-y-1/2"
						alt=""
					></Image>
				</div>
				<div className="rounded-sm bg-gray-800 aspect-video w-full overflow-hidden ">
					<Image
						src={slika7}
						className="object-cover -translate-y-1/2"
						alt=""
					></Image>
				</div>
			</div>
		</div>
	);
};

export default Slike;
