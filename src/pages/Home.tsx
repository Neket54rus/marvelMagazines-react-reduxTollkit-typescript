import React from "react"

import { RandomChar, Chars } from "../components"
import visionBg from "../assets/img/vision.png"

export const Home: React.FunctionComponent = () => {
	return (
		<>
			<RandomChar />
			<Chars />
			<img className="bg__decoration" src={visionBg} alt="vision" />
		</>
	)
}
