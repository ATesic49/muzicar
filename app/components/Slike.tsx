import React from "react";
import lazarIJA from "@/public/imgs/lazarIJa.jpg";
import slika from "@/public/imgs/slik1.jpg";
import Image from "next/image";
const Slike = () => {
	return (
		<div className="w-full px-16 py-16 gap-8 bg-neutral-900 flex flex-col font-serif">
			<h2 className="text-4xl text-gray-200 font-bold">Slike</h2>
			<div className="grid grid-cols-2 gap-8 w-full">
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
			</div>
		</div>
	);
};

export default Slike;
