import Video from "./components/Video";
import Hero from "./components/Hero";
import Slike from "./components/Slike";
import Kontakt from "./components/Kontakt";
import Repertoar from "./components/Repertoar";
export default function Home() {
	return (
		<div>
			{/* <div className="min-h-screen w-full relative px-16 py-32 flex items-center">
				<Image
					src={hero}
					alt=""
					priority
					fill
					className="object-cover -z-10 h-full absolute   "
				/>

				<div className="inset-0 bg-black opacity-40 -z-[5] absolute "></div>
				<div className="flex gap-8 z-10 text-gray-50   flex-col">
					<h1 className="font-bold font-serif  text-6xl">Muzika za proslave</h1>
					<p className="text-gray-400">
						Ulepšajte Svoje Proslave Zvucima Gitare
					</p>
					<button className="text-gray-200 font-semibold bg-amber-600 cursor-pointer w-fit py-2 rounded-lg   px-8">
						Nastavi
					</button>
				</div>
			</div> */}
			<Hero />
			<Slike />
			<Video />
			<Repertoar />
			<Kontakt />
		</div>
	);
}
