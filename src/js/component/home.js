import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

export function Home() {
	return (
		<>
			<Navbar />
			<div className="container text-center mt-5">
				<Jumbotron />
				<div className="cards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
