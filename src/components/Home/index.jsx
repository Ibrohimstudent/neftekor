import React, {useEffect} from 'react';
import {NavLink ,Routes,Route} from "react-router-dom";
import Home from "./index";
import Dizelnoe from "../Dizelnoe";
import Mini from "../Mini";
import Pechnoe from "../Pechnoe";
import Sudovoe from "../Sudovoe";
import Blog from "../Blog";
import Lichniy from "../Lichniy";
import sendTelegram from "../Bot/bot";



function Index({mini1,mini2,mini3,vector,gas,syn,lom,atlant,uvarovskaya,deka,jitnitsa,atp,otziv,
                   neftekor1,
                   neftekor2,
                   neftekor3,
                   neftekor4,
                   neftekor5,
                   neftekor6,
                   diplom1,
                   diplom2,
                   diplom3,
                   diplom4,
                   diplom5,
    logo1,logo2,logo3,logo4,logo5,
                   user1,user2,user3,footer2,logo,logout,
                   yandex,vk,whatsapp,telegram}) {
    return (
        <div className={"container2"}>
            <div className="box">
                <h1><span style={{color: "#DBA833"}}>Поставка нефтепродуктов </span>
                    в <br/> Москве и Московской области</h1>
                <p>От 1000 литров и от 46 рублей за литр</p>
                <button className={"btn"}>Заказать звонок</button>
            </div>
            <h2 className={"h2"}>Нефтепродукты</h2>
            <div className="page1">
                <div className="half">
                    <div className="card1">
                        <h3>Судовое топливо</h3>
                        <p>Мы предоставляем судовое дизельное топливо как для физических лиц, так и компаниям</p>
                        <button className={"btn"}>Подробнее</button>

                    </div>

                </div>
                <div className="card2">
                    <h3>Дизельное топливо</h3>
                    <p>Мы являемся надежным поставщиком дизельного топлива в Москве и Московской области.</p>
                    <button className={"btn"}>Подробнее</button>

                </div>

            </div>
            <div className="full">
                <div className="card3">
                    <h3>Печное топливо</h3>
                    <p>Печное топливо может служить для отопления коммерческой
                        недвижимости и частных домов,
                        строительных площадок, в качестве топлива для небольших котельных
                        и сельхоз организаций.</p>
                    <button className={"btn"}>Подробнее</button>
                </div>
            </div>
            <div className="page2">
                <div className="head">
                    <h1>Умная <span style={{color: "#DBA833"}}>АЗС НЕФТЕКОР</span></h1>
                    <p>Мы предоставляем АЗС с комплектом разрешительной документации. <br/>
                        У нас есть решение для любого объема потребления
                    </p>

                </div>
                <div className="card">
                    <img style={{width: "100%"}} src={mini1} alt=""/>
                    <h3>Мини АЗС на <span style={{color: "#DBA833"}}>4500 литров</span></h3>
                    Оптимально для потребления от <br/> 10 до 15 тысяч литров в месяц
                </div>
                <div className="card">
                    <img style={{width: "100%"}} src={mini2} alt=""/>
                    <h3>Мини АЗС на <span style={{color: "#DBA833"}}> 10 000 литров</span></h3>
                    Оптимально для потребления от <br/> 15 до 35 тысяч литров в месяц
                </div>
                <div className="card">
                    <img style={{width: "100%"}} src={mini3} alt=""/>
                    <h3>Мини АЗС на <span style={{color: "#DBA833"}}>20 000 литров</span></h3>
                    Оптимально для потребления от <br/> 35 тысяч литров в месяц
                </div>
                <button className={"btn"}>Заказать Мини АЗС</button>
            </div>
            <div className="page3">
                <h1><span style={{color: "#DBA833"}}>Производители</span> качественного топлива</h1>
                <p>С которыми у нас прямые договора. Вы получите топливо без посредников</p>
                <div className="images">
                    <img src={logo1} alt=""/>
                    <img src={logo2} alt=""/>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                    <img src={logo5} alt=""/>
                </div>
            </div>
            <div className="page4">
                <h1>География <span style={{color: "#DBA833"}}>поставок</span></h1>
                <img
                    src="https://neftekor.com/wp-content/uploads/2022/07/geography.png"
                    className={"iframe"} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></img>
            </div>
            <div className="page5">
                <h1>Клиенты</h1>
                <p>Мы поставляем дизельное топливо более 15 лет</p>
                <div className="images2">
                    <img src={lom} alt=""/>
                    <img src={atlant} alt=""/>
                    <img src={uvarovskaya} alt=""/>
                    <img src={deka} alt=""/>
                    <img src={jitnitsa} alt=""/>
                    <img src={atp} alt=""/>
                </div>
            </div>
            <div className="page6">
                <h1>Отзывы</h1>
                <div className="card">
                    <img src={otziv} alt=""/>
                    <div className="text">
                        <h1>ООО "ДЭКА"</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>
                <div className="card">
                    <img src={otziv} alt=""/>
                    <div className="text">
                        <h1>ООО "Уваровская ПМК 22"</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>
                <div className="card">
                    <img src={otziv} alt=""/>
                    <div className="text">
                        <h1>ООО "ВТОРМЕТАЛЛ"</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>
            </div>
            <div className="page7">
                <h1><span style={{color: "#DBA833"}}>Новости</span> топливного рынка</h1>
                <div className="card">
                    <img src={mini1} alt=""/>
                    <div className="text">
                        <h3>Заголовок новости </h3>
                        <p>Текст новости новости Текст новости новости Текст новости
                            Текст новости Текст новости новости Текст
                            новости новости Текст новости Текст новости </p>
                        <button className={"btn"}>Подробнее</button>
                    </div>


                </div>
                <div className="card">
                    <img src={mini2} alt=""/>
                    <div className="text">
                        <h3>Заголовок новости </h3>
                        <p>Текст новости новости Текст новости новости Текст новости
                            Текст новости Текст новости новости Текст
                            новости новости Текст новости Текст новости </p>
                        <button className={"btn"}>Подробнее</button>
                    </div>


                </div>
                <div className="card">
                    <img src={mini3} alt=""/>
                    <div className="text">
                        <h3>Заголовок новости </h3>
                        <p>Текст новости новости Текст новости новости Текст новости
                            Текст новости Текст новости новости Текст
                            новости новости Текст новости Текст новости </p>
                        <button className={"btn"}>Подробнее</button>
                    </div>


                </div>
                <button className="btn1">Смотреть все новости</button>

            </div>
            <div className="footer">
                <div className="part1">
                    <h1>Свяжитесь <span style={{color: "#DBA833"}}>с нами!</span></h1>
                    <form action="" method={"get"}>
                        <input id={"name"} type="text" className={"input"} placeholder={"Имя"}/>
                        <input id={"phone"} type="phone" className={"input"} placeholder={"Телефон"}/>
                        <button onClick={sendTelegram} type="button" className={"input2"}>Отправить</button>
                    </form>

                </div>
                <div className="part2">
                    <h1>Наша <span style={{color: "#DBA833"}}>команда</span></h1>
                    <div className="cards">
                        <div className="card">
                            <img src={user1} alt=""/>
                            <div className="text">
                                <h2>Олег Костенко</h2>
                                <h4>Менеджер по работе с клиентами</h4>
                                <p>+ 7 999 999 99 99</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={user2} alt=""/>
                            <div className="text">
                                <h2>Олег Костенко</h2>
                                <h4>Менеджер по работе с клиентами</h4>
                                <p>+ 7 999 999 99 99</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={user3} alt=""/>
                            <div className="text">
                                <h2>Олег Костенко</h2>
                                <h4>Менеджер по работе с клиентами</h4>
                                <p>+ 7 999 999 99 99</p>
                            </div>
                        </div>
                    </div>
                </div>
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
            <script rel="javascript" type="text/javascript"
                    src={"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"}></script>


        </div>

    );
}

export default Index;