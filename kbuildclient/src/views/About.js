import React from "react";

import "../css/About.css";

const About = () => {
	return (
		<div>
			<div className="about-page-content">
				<div>
					<p>
						<span style={{ fontWeight: "bold" }}>Please note:</span> The prices listed on the site
						might not be 100% correct, as I can not know when a site is having a sale or when they
						change their price. Also, I can not check if a item is in stock or not, so please check
						out the linked site for more information.
					</p>
				</div>
				<p style={{ padding: "0px", margin: "0px" }}>
					{/* TODO: Spell check this */}
					Welcome to the world of mechanical keyboards! This website should help you in picking your
					parts for your next mechanical keyboard build. If you look around the internet, it seems
					as if there's an infinite amount of parts to choose from. The point of my site is to
					reduce that amount and not to overwhelm you with parts. <br />
					On the Home page, you're going to find all the parts that you're going to need to build a
					keyboard. Those are as follows: keycaps, switches, plate, PCB, stabilizers and a case.
					There are many more piece that you might want like o-rings, LEDs and etc., but those
					aren't mandatory so we aren't going to focus on them right now. <br />
					Once you finally get all your parts, it's time to assemble your keyboard! Unless you went
					with a hotswappable PCB, you're going to need a soldering iron. You're also going to need
					a screwdriver. Once you finally have everything you need, you can start looking at videos
					on YouTube on how to build a keyboard. It really shouldn't be too hard, it's almost as if
					you're making a sandwich, with keyboard parts.
				</p>

				<h3 style={{ marginTop: "55px" }}>Here are some good videos:</h3>
				<div>
					<iframe
						title="First video"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/JpV-eJNrXjk"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				{/* <div>Ad</div> */}
				<div style={{ marhinTop: "75px" }}>
					<iframe
						title="Second video"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/SABRc5qlnuk"
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	);
};
export default About;
