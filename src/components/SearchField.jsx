import React, { useContext } from 'react';
import { WeatherContext } from './context/WeatherContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../styles/SearchField.css';

const SearchField = () => {
    const { handleSubmit, handleSearchChange, city} = useContext(WeatherContext);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleSearchChange}
                    placeholder="Search City..."
                    className="search-input"
                />
                <button className="search-btn">
                    <FontAwesomeIcon style={{ color: 'white' }} icon={faSearch} />
                </button>
            </form>
        </div>
    );
}

export default SearchField;
