import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../Home";
import Dizelnoe from "../Dizelnoe";
import Mini from "../Mini";
import Pechnoe from "../Pechnoe";
import Sudovoe from "../Sudovoe";
import Blog from "../Blog";
import Lichniy from "../Lichniy";
import $ from "jquery/dist/jquery.min"

function SendForm(){
    let name = document.getElementById("name").value
    let company = document.getElementById("company").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let telegram_bot_id = "6899998514:AAH2hCGQFNYqaTAUw8vgu78yaGU0rUviepI";
    let chat_id = 6000934511;
    let message =
        `Ismi: ${name},   Kompaniya:${company},  Email:${email},Telefon:${phone}`



    let settings = {
        async: true,
        crossDomain: true,
        url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        data: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    };
    $.ajax(settings).done(function (response) {
        alert('Спасибо за ваше сообщение')
    })
    document.getElementById("name").value = "";
    document.getElementById("company").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";


    return  (
        <div>
        </div>
    )

}

const Index = ({footer2,logo,logout,yandex,vk,whatsapp,telegram}) => {
    return (
        <div className={"container8"}>
            <div className="head">
                <h1>Контакты ООО <span style={{color: "#DBA833"}}>"НЕФТЕКОР ВВ"</span></h1>
                <p>Поставка нефтепродуктов в Москве и Московской области</p>
            </div>
            <div className="site1">
                <div className="form">
                    <div className="left">
                        <h2><span style={{color: "#DBA833"}}>Свяжитесь</span> с нами</h2>
                        <input id={"name"} style={{width: "49%", marginRight: "2%"}} type="text" placeholder={"Имя"}/>
                        <input id={"company"} style={{width: "49%"}} type="text" placeholder={"Компания"}/>
                        <input id={"email"} type="email" placeholder={"Email"}/>
                        <input id={"phone"} type="phone" placeholder={"Телефон"}/>
                        <input onClick={SendForm} style={{color: "#DBA833", border: "1px solid #DBA833", backgroundColor: "white"}}
                               type="submit" value={"Отправить"}/>
                    </div>
                    <div className="right">
                        <p>141077</p>
                        <p>Московская Обл., г. Королев, ул. 50-летия ВЛКСМ, дом 4г, офис 7</p>
                        <p>ОГРН 1155018004151</p>
                        <p>ИНН 5018181082</p>
                        <p>Тел.: +7 (495) 796 53 83</p>
                        <p>Email: info@neftekor.ru</p>
                    </div>
                </div>

            </div>
            <div className="footer">

                <div className="part3">
                    <img src={footer2} alt=""/>
                </div>
                <div className="part4">
                    <div className="block">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="text">
                            <p>Отсутствие посредников на всех этапах топливного обеспечения. </p>
                            <p>Закупка напрямую с НПЗ, собственное производство емкостей, ТРК и мини АЗС. </p>
                            <p>Поставка топлива своими бензовозами.</p>
                        </div>
                        <div className="routes">
                            <div className="routes1">
                                <NavLink style={{color: "black",}} to={"/главная"}>Главная</NavLink><br/><br/>
                                <NavLink style={{color: "black",}} to={"/дизельноетопливо"}>Дизельное
                                    топливо</NavLink><br/><br/>
                                <NavLink style={{color: "black"}} to={"/миниАЗС"}>Мини-АЗС</NavLink>
                            </div>
                            <div className="routes2">
                                <NavLink style={{color: "black"}} to={"/печноетопливо"}>Печное Топливо</NavLink><br/>
                                <br/>
                                <NavLink style={{color: "black"}} to={"/судовоетопливо"}>Судовое
                                    топливо</NavLink><br/><br/>
                                <NavLink style={{color: "black"}} to={"/блог"}>Блог</NavLink>
                            </div>

                            <NavLink style={{color: "gray"}} className={"btn"} to={"/личныйкабинет"}>
                                <img src={logout} alt=""/> <br/>

                                Личный кабинет</NavLink>
                            <Routes>
                                <Route path={"/главная"} element={<Home/>}/>
                                <Route path={"/дизельноетопливо"} element={<Dizelnoe/>}/>
                                <Route path={"/миниАЗС"} element={<Mini/>}/>
                                <Route path={"/печноетопливо"} element={<Pechnoe/>}/>
                                <Route path={"/судовоетопливо"} element={<Sudovoe/>}/>
                                <Route path={"/блог"} element={<Blog/>}/>
                                <Route path={"/личныйкабинет"} element={<Lichniy/>}/>

                            </Routes>
                        </div>


                    </div>
                    <div className="under">
                        <p>©2022 Все права защищены</p>
                        <p>Политика конфиденциальности</p>
                        <div className="share">
                            <h4>Мы в соцсетях:</h4>
                            <div className="images">
                                <img src={yandex} alt=""/>
                                <img src={vk} alt=""/>
                                <img src={whatsapp} alt=""/>
                                <img src={telegram} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
