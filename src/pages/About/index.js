import React from "react";
import {
	Divider,
	LinearProgress,
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	Stack,
	Typography,
} from "@mui/material";

import stacks from "./stacks";

const About = () => {
	return (
		<>
			<ListItemText
				primary={
					<>
						Ibrahim Sadik <span>Tamim</span>
					</>
				}
				secondary={
					<>
						<b>Full-Stack Engineer</b> <br />
						Dhaka, Bangladesh.
					</>
				}
				primaryTypographyProps={{
					sx: {
						fontSize: "1.3em",
						fontWeight: "bold",
						"& span": {
							color: "primary.main",
							// textDecoration: "underline",
						},
					},
				}}
			/>
			<br />
			<br />
			<ListItemText
				primary={
					<Divider
						textAlign="left"
						sx={{
							"&::before, &::after": {
								borderTopColor: "#555",
							},
						}}
					>
						Stacks & Skills
					</Divider>
				}
				secondary={
					"I spend most of the time in design, development, research and working with teams and companies from different regions a day. This made me skilled in various tools, languages, frameworks and stacks. I built softwares to launch in production using these skills. I build plugins, tools and packages for me and my teams. These are some stacks I usually work on,"
				}
				primaryTypographyProps={{
					sx: {
						color: "primary.light",
						fontWeight: "bold",
						fontSize: "1.2em",
						mb: 2,
					},
				}}
			/>
			<List disablePadding>
				{stacks?.map?.((stack) => (
					<React.Fragment key={stack.stack}>
						<ListSubheader
							sx={{ mb: 3, mt: 4, color: "primary.dark", fontWeight: "bold" }}
						>
							{"<"}
							{stack.stack}
							{" />"}
						</ListSubheader>
						{stack.skills?.map?.((skill) => (
							<ListItem
								sx={{
									flexDirection: "column",
									alignItems: "unset",
									p: 0,
								}}
								key={skill.framework}
							>
								<ListItemText
									primary={skill.framework}
									secondary={skill.language}
									primaryTypographyProps={{
										sx: {
											fontWeight: "bold",
											fontSize: "0.9em",
										},
									}}
									secondaryTypographyProps={{
										sx: {
											// fontWeight: "bold",
											fontSize: "0.7em",
											mt: 0.7,
										},
									}}
								/>
								<Stack
									direction={"row"}
									columnGap={2}
								>
									<LinearProgress
										variant="determinate"
										value={skill.progress}
										sx={{
											flex: 1,
											bgcolor: "background.paper",
											height: "6px",
											mt: 1,
											mb: 2,
										}}
									/>
									<Typography variant="caption">{skill.progress}%</Typography>
								</Stack>
							</ListItem>
						))}
					</React.Fragment>
				))}
			</List>
		</>
	);
};

export default About;
