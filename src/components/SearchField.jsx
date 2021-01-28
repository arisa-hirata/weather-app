import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import { WeatherContext } from './WeatherContext';
import axios from "axios";


const API_KEY = 'e1ec43e71a98cc14a4799aabd7b70c27';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 30px',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 200,
        height: 30,
        backgroundColor: '#3b6384'
  },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: 'white'
    },
    iconButton: {
        padding: 10,
    },
}));

const SearchField = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    // const [city, setCity] = useContext(WeatherContext);
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState([]);


    const getWeather = async () => {
        const arr = [];

        try {
            const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
            const weatherRes = await axios.get(weatherUrl);

            console.log('weatherRes: ', weatherRes);
            console.log(arr.push(weatherRes.data.weather))
            arr.push(weatherRes.data.weather);
            setWeatherData(arr);

        } catch (e) {
            console.log(e);
        }
    }

    const handleSearchChange = e => {
        setCity(e.target.value);
    }

    const handleSearch = e => {
        e.preventDefault();
        getWeather();
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                {/*<Paper
                    elevation={0}
                    component="form"
                    className={classes.root}
                >
                    <InputBase
                        className={classes.input}
                        placeholder="Search Cities..."
                        value={city}
                        onChange={handleSearchChange}
                    />
                    <IconButton
                        type="submit"
                        className={classes.iconButton}
                        aria-label="search"
                        onClick={handleSearch}
                >
                        <SearchIcon style={{ color: 'white' }}/>
                    </IconButton>

                </Paper>*/}
                <input type="text" name="name" value={city} onChange={handleSearchChange}/>
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchField;
