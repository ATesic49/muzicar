import React from "react";

const repertoar1 = [
	"Azra - Fa Fa",
	"Azra - Ako Znaš Bilo Što",
	"Babe - Ko Me Tero",
	"Babe - Noć Bez Sna",
	"Bajaga - Život Je Nekad Siv Nekad Žut",
	"Bjelo Dugme - Da Te Bogdo Ne Volim",
	"Bijelo Dugme - Jer Kad Ostariš",
	"Branimir Štulić - Mokre Ulice ",
	"Branimir Štulić - Men Se Dušo Od Tebe Ne Rastaje ",
	"Divlje Jagode - Marija",
	"Đorđe Balašević - Olivera",
	"Ekatarina Velika - Amerika",
	"Električni Orgazam - Kapetan Esid",
	"Gibonni - Činim pravu stvar",
	"Gibonni - Libar",
	"ITD Band - Lagano Umirem",
	"Kerber - Izmedju jave i sna",
	"Kiki Lesendrić - Uvek Te Đavo Nadje Lakse Nego Ja",
];
const repertoar2 = [
	"Leb i Sol - Čuvam noć od budnih",
	"Oliver Mandić - Odlazim a Volim Te",
	"Oliver Mandić - Poludeću",
	"Parni Valjak - Lutka za bal",
	"Prljavo Kazalište - Šteta što je kurva",
	"Prljavo Kazalište - Uzalud Vam Trud Svirači",
	"Riblja Čorba - Kad Hodaš",
	"Riblja Čorba - Neću Da Ispadnem Životinja",
	"Van Gogh - Za Godine Tvoje",
	"Vlada Divljan - Nebeska tema",
	"Zabranjeno Pušenje - Balada o Pišonji i Žugi",
	"Zabranjeno Pušenje - Fikreta",
	"Zdravko Čolić - Moja draga",
	"Zdravko Čolić - Sto ti dadoh",
	"Zdravko Čolić - Svadbarskim Sokakom",
	"Željko Bebek - Mene tjera neki vrag",
	"Yu Grupa - Dunavom Još Šibaju Vetrovi",
];
const Repertoar = () => {
	return (
		<div className="w-full px-8 md:px-16 py-16 gap-16 bg-neutral-900 flex flex-col ">
			<h2 className="text-4xl text-gray-200 font-bold ">Repertoar</h2>
			<div className="w-full grid md:grid-cols-2 text-gray-400  gap-16 max-w-screen-lg mx-auto">
				<div className="grid w-full grid-rows-10">
					{repertoar1.map((li, i) => (
						<p
							key={i}
							className="border-b-2 border-b-gray-700 w-full py-2"
						>
							{li}
						</p>
					))}
				</div>
				<div className="grid w-full grid-rows-10">
					{repertoar2.map((li, i) => (
						<p
							key={i}
							className="border-b-2 border-b-gray-700 w-full py-2"
						>
							{li}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Repertoar;
