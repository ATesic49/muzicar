import type { Metadata } from "next";
import { Roboto_Mono, Roboto_Serif } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({
	weight: ["200", "400", "500", "700"],
	subsets: ["latin"],
});

const robotoSerif = Roboto_Serif({
	variable: "--font-roboto-serif",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Aleksa za Proslave",
	description:
		"U koliko želite da ulepšate vašu proslavu sa Ex-Yu muzikom uživo. Na pravom ste mestu... ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} ${robotoSerif.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
