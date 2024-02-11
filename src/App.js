import React from 'react';
import {Route,Routes,NavLink} from "react-router-dom";
import logo from "./assets/logo.png"
import "main.scss"

function App(props) {
    return (
        
        <div className={"container"}>
            <h1>My</h1>
            <div className="nav">
                <div className='left-nav'>
                <NavLink to={"/"}><img src={logo} alt=""/></NavLink>

                </div>

                <div className='right-nav'>
                <NavLink to={"/главная"}>Главная</NavLink>
                <NavLink to={"/дизельное топливо"}>Дизельное топливо</NavLink>
                <NavLink to={"/мини-АЗС"}>Мини-АЗС</NavLink>
                <NavLink to={"/печное топливо"}>Печное топливо</NavLink>
                <NavLink to={"/судовое топливо"}>Судовое топливо</NavLink>
                <NavLink to={"/блог"}>Блог</NavLink>
                <NavLink to={"/контакты"}>Контакты</NavLink>
                <NavLink to={"/личный кабинет"}>Личный кабинет</NavLink>

                </div>
                

            </div>
            


            

        </div>
    );
}

export default App;