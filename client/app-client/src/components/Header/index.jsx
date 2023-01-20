import "./index.scss";
import {useState} from "react";
import { Dropdown } from "../Dropdown";
import { Searchbar } from "../SearchBar";
import { BasicMinMaxSelector } from "../BasicMinMaxSelector";

export const Header = ({configureAPIEndpoint}) => {
    

    return (<><header>
        <div className="header-container">
            <h1 className="header-title">Alex Streaming Service</h1>

            <Dropdown configureAPIEndpoint={(endpoint) => {
                    configureAPIEndpoint(endpoint);
            }}></Dropdown>
            
            <Searchbar configureAPIEndpoint={(endpoint) => {
                configureAPIEndpoint(endpoint);
            }}></Searchbar>

        
        </div>
    </header>
    <div className="slider-container">
        <BasicMinMaxSelector 
            configureAPIEndpoint={(endpoint) => {
                configureAPIEndpoint(endpoint);
                }}></BasicMinMaxSelector>
    </div>
    </>);
}