import React from "react";

import { IconButton, Stack, Typography } from "@mui/material";

import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
// import moment from "moment";
import TerminalContext from "../../context/Terminal";

const Splash = () => {
	const termit = React.useContext(TerminalContext);
	return (
		<Stack
			direction={"column"}
			sx={{
				minHeight: "80vh",
				alignItems: "center",
				justifyContent: "center",
				rowGap: 3,
			}}
			data-aos={"fade-up"}
		>
			<Typography
				sx={{
					fontSize: "1.8rem",
					"& span": {
						fontWeight: "bold",
						color: "primary.main",
					},
				}}
			>
				Hi! I'm <span>Tam</span>.
			</Typography>
			<Typography
				variant={"subtitle2"}
				sx={{
					textAlign: "center",
					color: "#aaa",
					"& span": {
						color: "primary.main",
						fontWeight: "bold",
					},
				}}
			>
				I'm a <span>Full-Stack Engineer</span>. I'm a dedicated, hard-working
				team player with experience and excellent knowledge of cutting-edge
				up-to-date web engineering technologies like <span>JavaScript</span>,{" "}
				<span>TypeScript</span>, <span>Python</span>, <span>C#</span>,{" "}
				<span>SQL</span>, and <span>NoSQL</span>.
				{/* I am seeking a software
				engineer role for web applications or websites. I will utilize my{" "}
				<span>
					{moment().diff(moment("21/03/2020", "DD/MM/YYYY"), "years")} years{" "}
					{moment().diff(moment("21/03/2020", "DD/MM/YYYY"), "months") % 12 ? (
						<>
							and{" "}
							{moment().diff(moment("21/03/2020", "DD/MM/YYYY"), "months") % 12}{" "}
							months{" "}
						</>
					) : (
						<></>
					)}
				</span>{" "}
				of experience as <span>Full-Stack Engineer</span> and{" "}
				<span>Excellent Creative</span> skills to achieve its goals. */}
			</Typography>
			<Stack direction={"row"}>
				<IconButton
					color={"primary"}
					onClick={() => termit.execute("github.lnk")}
				>
					<VscGithubAlt />
				</IconButton>
				<IconButton
					color={"primary"}
					onClick={() => termit.execute("whatsapp.lnk")}
				>
					<FaWhatsapp />
				</IconButton>
				<IconButton
					color={"primary"}
					onClick={() => termit.execute("linked-in.lnk")}
				>
					<SlSocialLinkedin />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default Splash;
