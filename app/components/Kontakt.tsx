import Link from "next/link";
import React from "react";

const Kontakt = () => {
	return (
		<div
			id="kontakt"
			className="w-full px-8 md:px-16 py-16 gap-16 bg-neutral-900 flex flex-col "
		>
			<h2 className=" text-2xl md:text-6xl pb-8 border-b-2 border-neutral-800 -mb-8 text-gray-500 font-bold text-center font-serif">
				Kontakt
			</h2>
			<div className="w-full flex  justify-center items-center">
				<div className="grid md:grid-cols-2  gap-8 md:gap-16 mx-auto ">
					<Link
						href={"mailto:atesic7@gmail.com"}
						className="text-gray-400 md:text-left text-center duration-100 hover:text-gray-300 md:text-xl "
					>
						atesic7@gmail.com
					</Link>

					<Link
						href={"tel:+381644737375"}
						className="text-gray-400 hover:text-gray-300 md:text-left text-center duration-100 md:text-xl "
					>
						064/473-73-75
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Kontakt;
