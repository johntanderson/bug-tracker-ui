import React, { useState, Children } from "react";
import ReactCardFlip from "react-card-flip";
import Tile from "./Tile";

export default function FlippyTile({ children }) {
	const [isFlipped, setFlipped] = useState(false);
	children = Children.toArray(children);

	const handleClick = (e) => {
		e.preventDefault();
		setFlipped(!isFlipped);
	};

	return (
		<ReactCardFlip isFlipped={isFlipped}>
			<Tile front onClick={handleClick}>
				{children[0]}
			</Tile>
			<Tile back onClick={handleClick}>
				{children[1]}
			</Tile>
		</ReactCardFlip>
	);
}
