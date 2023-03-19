import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			light: "#a7d6fc",
			main: "#8fcdff",
			dark: "#78a7cc",
			contrastText: "#1c2330",
		},
		secondary: {
			light: "#a7d6fc",
			main: "#8fcdff",
			dark: "#78a7cc",
			contrastText: "#fff",
		},
		background: {
			default: "#1c2330",
			paper: "#202736",
		},
	},

	typography: {
		// fontFamily: "Alegreya Sans SC, sans-serif",
		fontFamily: "Monaco, Inconsolata, monospace",
	},

	components: {
		MuiToggleButtonGroup: {
			styleOverrides: {
				root: {
					// fontFamily: "Monaco, Inconsolata, monospace",
					border: 0,
				},
			},
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					textTransform: "unset",
					border: 0,
					color: "#fff",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "2px",
					textTransform: "unset",
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				secondary: {
					color: "#aaa",
				},
			},
		},
	},
});

export default theme;
