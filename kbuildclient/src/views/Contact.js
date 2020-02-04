import React from "react";

const Contact = () => {
	return (
		<div style={{ margin: "0px 23%", fontSize: "18px" }}>
			<p>
				You can reach me with any questions or concerns at the following e-mail:
				<span style={{ fontWeight: "bold" }}> randomseller38@gmail.com</span>
			</p>
			<p>This website does not collect nor store any kind of data from the user.</p>
			<div style={{ display: "flex", flexDirection: "row", fontSize: "12px" }}>
				<p>Help me buy a new keyboard~</p>
				<div style={{ alignSelf: "center" }}>
					<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_s-xclick" />
						<input type="hidden" name="hosted_button_id" value="CMJJXYY5793Y4" />
						<input
							type="image"
							src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
							border="0"
							name="submit"
							title="PayPal - The safer, easier way to pay online!"
							alt="Donate with PayPal button"
						/>
						<img
							alt=""
							border="0"
							src="https://www.paypal.com/en_HR/i/scr/pixel.gif"
							width="1"
							height="1"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Contact;
