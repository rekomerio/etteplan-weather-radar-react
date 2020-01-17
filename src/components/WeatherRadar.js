import React, { useState } from "react";
import CityWeatherView from "./CityWeatherView";
import makeStyles from "@material-ui/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const WeatherRadar = () => {
    const classes = useStyles();
    const [filter, setFilter] = useState(0);

    const cities = [
        { name: "Tampere", id: 634964 },
        { name: "Jyväskylä", id: 655195 },
        { name: "Kuopio", id: 650225 },
        { name: "Helsinki", id: 658225 }
    ];

    const handleFilterChange = event => {
        setFilter(parseInt(event.target.value));
    };

    return (
        <div className={classes.root}>
            <header className={classes.header}>
                <h2>Säätutka</h2>
            </header>
            <div className={classes.content}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        classes={{ root: classes.select }}
                        value={filter}
                        onChange={handleFilterChange}
                        native
                    >
                        <option value={0}>Kaikki kaupungit</option>
                        {cities.map(city => (
                            <option key={city.id} value={city.id}>
                                {city.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                {cities
                    .filter(city => filter === 0 || city.id === filter)
                    .map(city => (
                        <CityWeatherView key={city.id} city={city} />
                    ))}
            </div>
        </div>
    );
};

const darkFont = "#262626";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#F8F9FA",
        minWidth: 340
    },
    header: {
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #E6E6E6",
        paddingTop: 1,
        textAlign: "center",
        "& > *": {
            fontSize: "23pt",
            color: "#262626",
            fontWeight: 500
        }
    },
    content: {
        maxWidth: 800,
        padding: 20,
        margin: "auto"
    },
    formControl: {
        width: "100%"
    },
    select: {
        backgroundColor: "#ffffff",
        color: darkFont
    }
}));

export default WeatherRadar;
