import React, { useState, useEffect } from "react";
import axios from "axios";
import NormalWeatherView from "./NormalWeatherView";
import SmallWeatherView from "./SmallWeatherView";
import makeStyles from "@material-ui/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { apiKey } from "../weather-api-key";

const CityWeatherView = props => {
    const classes = useStyles();
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecasts, setForecasts] = useState([]);
    const { city } = props;

    useEffect(() => {
        axios
            .get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    id: city.id,
                    appid: apiKey
                }
            })
            .then(res => {
                setCurrentWeather(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get("https://api.openweathermap.org/data/2.5/forecast", {
                params: {
                    id: city.id,
                    appid: apiKey
                }
            })
            .then(res => {
                const arr = res.data.list.filter((forecast, i) => i <= 5 && i > 0);
                setForecasts(arr);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    if (!currentWeather || forecasts.length === 0) {
        return (
            <div className={classes.loading}>
                <CircularProgress className={classes.loading} />
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <NormalWeatherView weather={currentWeather} city={city} />
            <div className={classes.forecasts}>
                {forecasts.map(forecast => (
                    <SmallWeatherView key={forecast.dt} weather={forecast} />
                ))}
            </div>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            marginTop: 12
        },
        marginBottom: 36
    },
    loading: {
        width: "100%",
        minHeight: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    forecasts: {
        display: "flex",
        justifyContent: "space-between",
        margin: "12px -4px"
    }
}));

export default CityWeatherView;
