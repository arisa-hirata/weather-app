import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
import { WeatherContext } from './context/WeatherContext';

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
    const { handleSubmit, handleSearchChange, city} = useContext(WeatherContext);

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleSearchChange}
                    placeholder="search"
                />
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchField;
