import React, { useState, useEffect } from 'react';

import './hero.css'; 
import Navbar from '../Navbar/Navbar';
import map from '../Assets/map.png';
import doctorImage from '../Assets/doctorImage.png';
import { HiOutlineLocationMarker } from "react-icons/hi";

import { IoMdSearch } from "react-icons/io";
import { getNames, getCode } from 'country-list';
import countries from 'i18n-iso-countries';

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Hero = () => {
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        const countriesList = getNames().map(country => {
            const alpha2Code = getCode(country);
            const alpha3Code = countries.alpha2ToAlpha3(alpha2Code);
            return {
                value: alpha3Code,
                label: country,
                fullLabel: country
            };
        });
        setLocations(countriesList);
        setSelectedLocation(countriesList.find(c => c.value === 'ARE'));
    }, []);

    const handleLocationChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = locations.find(location => location.value === selectedValue);
        setSelectedLocation(selectedOption);
    };

    return (
        <>  
           <div className='hero-head'>
                <Navbar/>
                <div className='hero-content'>
                    <div className='hero-item'>
                        <h5>CERTIFIED DOCTORS</h5>
                        <h1 className="hero-title">We Find <span>Best Doctors</span> <br /> Based On Your Condition</h1>
                        <div className='search-box'>
                            <div className="custom-select-wrapper">
                                <HiOutlineLocationMarker className="icon-loc-src"/>
                                <select
                                    onChange={handleLocationChange}
                                    value={selectedLocation ? selectedLocation.value : 'ARE'}
                                >
                                    {locations.map(location => (
                                        <option key={location.value} value={location.value}>
                                            {selectedLocation && selectedLocation.value === location.value ? location.value : location.fullLabel}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='simple-line'></div>
                            <div className="search">
                                <IoMdSearch className="icon-loc-src" />
                                <input type="text" className='search-input' placeholder="Search Doctors" />
                                <div className='simple-line-small'></div>
                                <div className="outer">
                                    <button className="search-button">Find My Doctor</button>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className='text-center'>
                      <img src={map} className='map-image' alt="Map"/> 
                    </div>

                    <div className='image-division'>
                        <img src={doctorImage} alt="Doctors" className="hero-image"/>
                        <div className="layout"></div> 
                    </div>
                </div>
           </div> 
        </>
    );
};

export default Hero;


