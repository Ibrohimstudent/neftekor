import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../Home";
import Dizelnoe from "../Dizelnoe";
import Mini from "../Mini";
import Pechnoe from "../Pechnoe";
import Sudovoe from "../Sudovoe";
import Lichniy from "../Lichniy";
import Blog from "./index";
import sendTelegram from "../Bot/bot";

const Index = ({

                   lom,atlant,uvarovskaya,deka,jitnitsa,atp,
                   user1,user2,user3,footer2,logo,logout,
                   yandex,vk,whatsapp,telegram

               }) => {
    return (
        <div className={"container7"}>
            <div className="head">
                <h1>Блог</h1>
                <p>Новости топливного рынка</p>
            </div>
            <div className="blogs">
                <div className="blog">
                    <img src="https://neftekor.com/wp-content/uploads/2023/12/f_840650445743ab90-768x768.png" alt=""/>
                    <div className="text">
                        <h2>Купить мини АЗС</h2>
                        <p>Мини АЗС или совокупность высокотехнологичных компонентов для
                            заправки топливом – это важнейшая составляющая инфраструктуры.
                            Это компактные комплексы, основное назначение которых – это обеспечение топливом автомобилей.</p>
                        <button className="btn">Читать далее</button>
                    </div>
                </div>
                <div className="blog">
                    <img src="https://neftekor.com/wp-content/uploads/2023/12/f_132650445743fe74-1-768x768.png" alt=""/>
                    <div className="text">
                        <h2>Мини-заправочная станция</h2>
                        <p>Если вам требуется мини заправочная станция, тогда
                            обращайтесь в компанию НЕФТЕКОР, которая предлагает самые привлекательные
                            и выгодные условия для клиентов. Автозаправка модульного типа представляет
                            собой наземную структуру, включающую в себя резервуар для хранения
                            топлива и оборудование для его распределения, предназначенную для автономного использования. </p>
                        <button className="btn">Читать далее</button>
                    </div>
                </div>
                <div className="blog">
                    <img src="https://neftekor.com/wp-content/uploads/2023/12/f_666651152fa934a3-768x768.png" alt=""/>
                    <div className="text">
                        <h2>Сколько стоит АЗС</h2>
                        <p>Московский регион славится своим
                            развитым предпринимательским духом, и для
                            многих предприятий
                            вопрос об автозаправочных станциях (АЗС) для
                            внутреннего использования становится ключевым. </p>
                        <button className="btn">Читать далее</button>
                    </div>
                </div>
                <div className="blog">
                    <img src="https://neftekor.com/wp-content/uploads/2023/12/f_8826506a7af446a1-1-768x768.png" alt=""/>
                    <div className="text">
                        <h2>ЗКупить АЗС</h2>
                        <p>В компании «НЕФТЕКОР» вы можете купить малую
                            автозаправочную станцию на 4,5–20 тысяч литров для внутреннего использования на предприятии в Москве
                            и Московской области. Самостоятельно реализуем
                            процессы производства, гарантируем бесплатную доставку.</p>
                        <button className="btn">Читать далее</button>
                    </div>
                </div>
                <div className="blog">
                    <img src="https://neftekor.com/wp-content/uploads/2023/12/f_7226506a60f76317-1-768x768.png" alt=""/>
                    <div className="text">
                        <h2>Автозаправочные станции для внутреннего использования на предприятиях</h2>
                        <p>Заправочные станции, которые монтируются на территории
                            компании используются для заправки машин бензином или дизельным топливом.
                            Заправке подлежат только автомобили предприятия, на котором устанавливается АЗС</p>
                        <button className="btn">Читать далее</button>
                    </div>
                </div>
                <div className="blog">
                    <img src="https://neftekor.com/wp-content/uploads/2023/12/f_0206505f9b756e77-1-768x768.png" alt=""/>
                    <div className="text">
                        <h2>Бензозаправка купить</h2>
                        <p>Качественная и эффективная работа многих компаний,
                            предприятий и организаций, во многом зависит от уровня эксплуатируемого
                            оборудования. В числе такого оборудования, особым спросом среди заказчиков пользуются бензозаправки,
                            предлагаемые сегодня нашей компанией в широким разнообразии типов и моделей.</p>
                        <button className="btn">Читать далее</button>
                    </div>
                </div>
            </div>
            <div className="pages7">
                <h1><span style={{color: "black"}}>Наши</span> клиенты</h1>
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
            <div className="footer">
                <div className="part1">
                    <form action="" method={"get"}>
                        <input id={"name"} type="text" className={"input"} placeholder={"Имя"} />
                        <input id={"phone"} type="phone" className={"input"} placeholder={"Телефон"} />
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
