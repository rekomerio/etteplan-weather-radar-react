import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";

const SmallWeatherView = props => {
    const classes = useStyles();
    const { weather } = props;

    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div className={classes.time}>{weather.dt_txt.slice(11, 16)}</div>
                <img
                    src={
                        "http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"
                    }
                    alt="weather-icon"
                />
                <div className={classes.temperature}>
                    {Math.floor(weather.main.temp - 273.15)} °C
                </div>
            </div>
            <div className={classes.weatherDetails}>
                <div>{weather.wind.speed} m/s</div>
                <div>{weather.main.humidity} %</div>
                <div>{weather.rain ? weather.rain["3h"] : "-"} mm</div>
            </div>
        </div>
    );
};

const darkFont = "#262626";
const lightFont = "#70757A";

const useStyles = makeStyles(theme => ({
    root: {
        border: "1px solid #E6E6E6",
        borderRadius: 4,
        textAlign: "center",
        width: "100%",
        margin: "0px 4px",
        backgroundColor: "#FFFFFF"
    },
    time: {
        fontSize: "13pt",
        color: lightFont
    },
    temperature: {
        fontSize: "15pt",
        color: lightFont
    },
    main: {
        padding: "8px 0px"
    },
    weatherDetails: {
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        fontSize: "10pt",
        color: lightFont,
        backgroundColor: "#E5F6FD",
        padding: 8,
        ["@media (max-width:450px)"]: {
            // eslint-disable-line no-useless-computed-key
            minHeight: 80
        }
    }
}));

export default SmallWeatherView;
