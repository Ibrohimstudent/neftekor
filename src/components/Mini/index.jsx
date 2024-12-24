import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../Home";
import Dizelnoe from "../Dizelnoe";
import Pechnoe from "../Pechnoe";
import Sudovoe from "../Sudovoe";
import Blog from "../Blog";
import Lichniy from "../Lichniy";
import Mini from "./index";
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
                   user1,user2,user3,footer2,logo,logout,
                   yandex,vk,whatsapp,telegram
               }) {
    return (
        <div className={"container4"}>
            <div className="head1">
                <h1><span style={{color: "#DBA833"}}>Мини-АЗС</span> НЕФТЕКОР</h1>
                <p>Получите собственную АЗС на вашем предприятии</p>
                <div className="btn">Заказать звонок</div>
            </div>
            <div className="pages2">
                <div className="head">
                    <h1>У нас <span style={{color: "#DBA833"}}>есть решение для <br/> любого
                        объема </span>потребления</h1>


                </div>
                <div className="card">
                    <img style={{width: "100%"}} src={mini1} alt=""/>
                    <h3>Мини АЗС на <span style={{color: "#DBA833"}}>4500 литров</span></h3>
                    <p>
                        Оптимально для потребления от <br/> 10 до 15 тысяч литров в месяц
                    </p>
                    <p>Цена от 888 888 тысяч рублей</p>
                    <p>Производство за 20 дней</p>
                    <p>Бесплатная доставка</p>
                    <p>Монтаж за 1 день</p>
                    <button className={"btn"}>Заказать звонок</button>

                </div>
                <div className="card">
                    <img style={{width: "100%"}} src={mini2} alt=""/>
                    <h3>Мини АЗС на <span style={{color: "#DBA833"}}> 10 000 литров</span></h3>
                    <p>Оптимально для потребления от <br/> 15 до 35 тысяч литров в месяц</p>
                    <p>Цена от 888 888 тысяч рублей</p>
                    <p>Производство за 25 дней</p>
                    <p> Бесплатная доставка</p>
                    <p>Монтаж за 1 день</p>
                    <button className={"btn"}>Заказать звонок</button>

                </div>
                <div className="card">
                    <img style={{width: "100%"}} src={mini3} alt=""/>
                    <h3>Мини АЗС на <span style={{color: "#DBA833"}}>20 000 литров</span></h3>
                    <p>
                        Оптимально для потребления от <br/> 35 тысяч литров в месяц
                    </p>
                    <p>Цена от 888 888 тысяч рублей</p>
                    <p>Производство за 30 дней</p>
                    <p>Бесплатная доставка</p>
                    <p>Монтаж за 1 день</p>
                    <button className={"btn"}>Заказать звонок</button>

                </div>
            </div>
            <div className="pages3">
                <div className="head">
                    <h1><span style={{color: "#DBA833"}}>Почему выгодно</span> заказывать мини-АЗС у нас?</h1>
                    <p>Доставим, подключим и проведем обучение персонала</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={vector} alt=""/>
                        <p>Мы производим
                            Мини АЗС более
                            8 лет и наработали
                            большой опыт</p>

                    </div>
                    <div className="card">
                        <img src={gas} alt=""/>
                        <p>За это время мы
                            ввели в
                            эксплуатацию
                            более 100 Мини-АЗС</p>

                    </div>
                    <div className="card">
                        <img src={syn} alt=""/>
                        <p>У нас возможно приобретение Мини
                            АЗС Б/У</p>

                    </div>
                </div>
            </div>
            <div className="pages4">
                <h1>Примеры наших <span style={{color: "#DBA833"}}>АЗС на предприятиях</span></h1>
                <div className="images">
                    <img className={"neft1"} src={neftekor1} alt=""/>
                    <img  className={"neft2"} src={neftekor2} alt=""/>
                    <img className={"neft3"} src={neftekor3} alt=""/>
                    <img className={"neft4"} src={neftekor4} alt=""/>
                    <img className={"neft5"} src={neftekor5} alt=""/>
                    <img className={"neft6"} src={neftekor6} alt=""/>
                </div>
            </div>
            <div className="pages5">
                <div className="head">
                    <h1>Мини-АЗС Нефтекор <br/>
                        <span style={{color: "#DBA833"}}>сертефицированы</span>
                    </h1>
                    <p>Мы поставляем продукцию с полным комплектом разрешительной документации</p>
                </div>
                <div className="box-block">
                    <img src={diplom1} alt=""/>
                    <img src={diplom2} alt=""/>
                    <img src={diplom3} alt=""/>
                    <img src={diplom4} alt=""/>
                    <img src={diplom5} alt=""/>

                </div>
            </div>
            <div className="pages6">
                <h1><span style={{color: "#DBA833"}}>География </span>поставок Мини-АЗС</h1>
                <img
                    src="https://neftekor.com/wp-content/uploads/2022/07/geography.png"
                    className={"iframe"} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></img>
            </div>
            <div className="pages7">
                <h1><span style={{color: "black"}}>Наши</span> клиенты</h1>
                <div className="images2">
                    <img src={lom} alt=""/>
                    <img src={atlant} alt=""/>
                    <img src={uvarovskaya} alt=""/>
                    <img src={deka} alt=""/>
                    <img src={jitnitsa} alt=""/>
                    <img src={atp} alt=""/>
                </div>
            </div>
            <div className="pages8">
                <h1><span style={{color:"#DBA833"}}>Отзывы</span> о нашей работе</h1>
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
            <div className="pages9">
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
                        <button onClick={sendTelegram} type="submit" className={"input2"}>Отправить</button>
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

        </div>
    );
}

export default Index;