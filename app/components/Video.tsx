import React from "react";

const Video = () => {
	return (
		<div className=" bg-neutral-900 flex flex-col gap-8 px-8 md:px-16 py-16">
			<h1 className="font-serif text-gray-200 text-2xl md:text-4xl font-bold">
				Video snimci
			</h1>
			<div className="grid gap-8 md:grid-cols-2">
				<video
					src="/video1.mp4"
					className="aspect-video w-full bg-gray-950 rounded-xl"
					controls
				></video>
				<video
					src="/video2.mp4"
					className="aspect-video w-full bg-gray-950 rounded-xl"
					controls
				></video>
			</div>
		</div>
	);
};

export default Video;
