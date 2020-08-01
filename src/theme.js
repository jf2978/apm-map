import { createMuiTheme } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
    },
    secondary: {
      main: "#03bb85 ",
      contrastText: "#ffff",
    },
  },
  typography: {
    fontFamily: '"Montserrat", serif',
    subtitle1: {
      fontFamily: "'Hind', sans-serif",
    },
    h5: {
      fontSize: 26,
      fontWeight: 600,
    },
    h6: {
      fontSize: 24,
      fontWeight: 400,
      fontStyle: "italic",
    },
    h2: {
      fontSize: 72,
      fontWeight: 800,
    },
    h1: {
      fontSize: 108,
      fontWeight: 1000,
    },
  },
  shape: {
    borderRadius: 8,
  },
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#ffff",
      },
      position: "relative",
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.black,
      },
    },
    MuiTab: {
      root: {
        margin: "0 8px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(2),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#404854",
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

export default theme;
