import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
    spacing: 8,
    palette: {
        primary: {
            main: purple[100],
        },
        type: "dark",
    },
});

export default theme;
