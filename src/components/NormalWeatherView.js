import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { format } from "date-fns";

const NormalWeatherView = props => {
    const classes = useStyles();
    const { weather, city } = props;
    const date = new Date();

    if (!weather) return <CircularProgress />;

    return (
        <div className={classes.root}>
            <div className={classes.flex}>
                <div>
                    <div className={classes.city}>{city.name}</div>
                    <div className={classes.weatherDescription}>{weather.weather[0].main}</div>
                </div>
                <div className={classes.iconTemperatureContainer}>
                    <img
                        className={classes.icon}
                        src={
                            "http://openweathermap.org/img/wn/" +
                            weather.weather[0].icon +
                            ".png"
                        }
                        alt="weather-icon"
                    />
                    <div className={classes.temperature}>
                        {Math.floor(weather.main.temp - 273.15)} °C
                    </div>
                </div>
            </div>
            <div className={`${classes.flex} ${classes.bottom}`}>
                <div>
                    <div className={classes.date}>
                        {format(date, "MMMM") + " " + format(date, "do")}
                    </div>
                    <div className={classes.time}>
                        {format(date, "kk") + ":" + format(date, "mm")}
                    </div>
                </div>
                <div className={classes.weatherDetails}>
                    <div>Wind: {weather.wind.speed} m/s</div>
                    <div>Humidity: {weather.main.humidity} %</div>
                    <div>Precipitation (3h): {weather.rain ? weather.rain["3h"] : "-"} mm</div>
                </div>
            </div>
        </div>
    );
};

const darkFont = "#262626";
const lightFont = "#70757A";

const useStyles = makeStyles(theme => ({
    root: {
        padding: "16px 22px",
        border: "1px solid #E6E6E6",
        borderRadius: 4,
        backgroundColor: "#FFFFFF"
    },
    flex: {
        display: "flex",
        justifyContent: "space-between"
    },
    bottom: {
        marginTop: 32,
        alignItems: "end"
    },
    city: {
        fontSize: "19pt",
        color: darkFont
    },
    weatherDescription: {
        fontSize: "13pt",
        color: lightFont
    },
    iconTemperatureContainer: {
        display: "flex",
        alignItems: "center"
    },
    icon: {
        width: 80
    },
    temperature: {
        fontSize: "26pt",
        color: darkFont,
        display: "inline-block"
    },
    date: {
        fontSize: "15pt",
        color: darkFont
    },
    time: {
        fontSize: "13pt",
        color: lightFont
    },
    weatherDetails: {
        fontSize: "13pt",
        color: lightFont,
        textAlign: "right"
    }
}));

export default NormalWeatherView;
