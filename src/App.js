import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./theme";
import WeatherRadar from "./components/WeatherRadar";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <WeatherRadar />
        </ThemeProvider>
    );
};

export default App;
