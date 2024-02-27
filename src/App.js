import React  from 'react';
import {Route,Routes,NavLink} from "react-router-dom";
import logo from "./assets/logo.png"
import "./main.scss"
import Dizelnoe from "./components/Dizelnoe"
import Mini from "./components/Mini"
import Pechnoe from "./components/Pechnoe"
import Sudovoe from "./components/Sudovoe"
import Blog from "./components/Blog"
import Kontakti from "./components/Kontakti"
import Lichniy from "./components/Lichniy"
import Home from "./components/Home";
import mini1 from "./assets/mini1.png"
import mini2 from "./assets/mini2.png"
import mini3 from "./assets/mini3.png"
import logo1 from "./assets/logo1.svg"
import logo2 from "./assets/logo2.svg"
import logo3 from "./assets/logo3.svg"
import logo4 from "./assets/logo4.svg"
import logo5 from "./assets/logo5.svg"
import log1 from "./assets/lom.svg"
import log2 from "./assets/atlant.svg"
import log3 from "./assets/uvarovskiy.svg"
import log4 from "./assets/deka.svg"
import log5 from "./assets/jitnitsa.svg"
import log6 from "./assets/atp.svg"
import otziv from "./assets/otziv.png"
import user1 from "./assets/user1.png"
import user2 from "./assets/user2.png"
import user3 from "./assets/user3.png"
import footer2 from "./assets/footer2.png"
import logout from "./assets/Logout 2.svg"
import yandex from "./assets/Yandex_Zen_logo_icon 1.svg"
import vk from "./assets/VK com 1.svg"
import whatsapp from "./assets/whatsapp 1.svg"
import telegram from "./assets/telegram_app 1.svg"
import sort1 from "./assets/sort1.png"
import sort2 from "./assets/sort2.png"
import sort3 from "./assets/sort3.png"
import vector from "./assets/Vector.png"
import gas from "./assets/gas_station 1.png"
import syn from "./assets/synchronize 1.png"
import neftekor1 from "./assets/neftekor1.png"
import neftekor2 from "./assets/neftekor2.png"
import neftekor3 from "./assets/neftekor3.png"
import neftekor4 from "./assets/neftekor4.png"
import neftekor5 from "./assets/neftekor5.png"
import neftekor6 from "./assets/neftekor6.png"
import diplom1 from "./assets/diplom1.png"
import diplom2 from "./assets/diplom2.png"
import diplom3 from "./assets/diplom3.png"
import diplom4 from "./assets/diplom4.png"
import diplom5 from "./assets/diplom5.png"
import pechnoe from "./assets/pechnoe.png"
import rise from "./assets/rise.png"
import nose from "./assets/nose.png"
import snow from "./assets/snow.png"
import top from "./assets/top.png"
import news from "./assets/new.png"
import sale from "./assets/sale.png"
import enter from "./assets/box-arrow-in-right.svg"




function App(props) {

    return (
        <div className={"container"}>
            <div className="nav">
                <div className='left-nav'>
                    <NavLink to={"/"}><img src={logo} alt=""/></NavLink>

                </div>

                <div className='right-nav'>
                    <div className='top-nav'>
                        <NavLink style={{color: "white"}} to={"/главная"}>Главная</NavLink>
                        <NavLink style={{color: "white"}} to={"/дизельноетопливо"}>Дизельное топливо</NavLink>
                        <NavLink style={{color: "white"}} to={"/миниАЗС"}>Мини-АЗС</NavLink>
                        <NavLink style={{color: "white"}} to={"/печноетопливо"}>Печное топливо</NavLink>
                        <NavLink style={{color: "white"}} to={"/судовоетопливо"}>Судовое топливо</NavLink>
                        <NavLink style={{color: "white"}} to={"/блог"}>Блог</NavLink>
                        <NavLink style={{color: "white"}} to={"/контакты"}>Контакты</NavLink>
                        <NavLink style={{color: "white"}} to={"/личныйкабинет"}>Личный кабинет</NavLink>

                    </div>


                    <div className='under-nav'>
                        <p>Пн-Пт: 9:00 – 19:00</p>
                        <p>info@neftekor.ru</p>
                        <p>+7(495)7965383</p>
                    </div>


                </div>




            </div>


            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path='/главная' element={<Home mini1={mini1}
                                                      mini2={mini2}
                                                      lom={log1}
                                                      atlant={log2}
                                                      uvarovskaya={log3}
                                                      deka={log4}
                                                      jitnitsa={log5}
                                                      atp={log6}
                                                      mini3={mini3}
                                                      logo1={logo1}
                                                      logo2={logo2}
                                                      logo3={logo3}
                                                      logo4={logo4}
                                                      logo5={logo5}
                                                      otziv={otziv}
                                                      user1={user1}
                                                      user2={user2}
                                                      user3={user3}
                                                      footer2={footer2}
                                                      logo={logo}
                                                      logout={logout}
                                                      yandex={yandex}
                                                      vk={vk}
                                                      whatsapp={whatsapp}
                                                      telegram={telegram}
                />}/>
                <Route path='/дизельноетопливо' element={<Dizelnoe
                    sort1={sort1}
                    sort2={sort2}
                    sort3={sort3}
                    mini1={mini1}
                    mini2={mini2}
                    mini3={mini3}
                    lom={log1}
                    atlant={log2}
                    uvarovskaya={log3}
                    deka={log4}
                    jitnitsa={log5}
                    atp={log6}
                    logo1={logo1}
                    logo2={logo2}
                    logo3={logo3}
                    logo4={logo4}
                    logo5={logo5}
                    otziv={otziv}
                    user1={user1}
                    user2={user2}
                    user3={user3}
                    footer2={footer2}
                    logo={logo}
                    logout={logout}
                    yandex={yandex}
                    vk={vk}
                    whatsapp={whatsapp}
                    telegram={telegram}

                />}/>
                <Route path='/миниАЗС' element={<Mini
                    vector={vector}
                    gas={gas}
                    syn={syn}
                    neftekor1={neftekor1}
                    neftekor2={neftekor2}
                    neftekor3={neftekor3}
                    neftekor4={neftekor4}
                    neftekor5={neftekor5}
                    neftekor6={neftekor6}
                    diplom1={diplom1}
                    diplom2={diplom2}
                    diplom3={diplom3}
                    diplom4={diplom4}
                    diplom5={diplom5}
                    mini1={mini1}
                    mini2={mini2}
                    lom={log1}
                    atlant={log2}
                    uvarovskaya={log3}
                    deka={log4}
                    jitnitsa={log5}
                    atp={log6}
                    mini3={mini3}
                    otziv={otziv}
                    user1={user1}
                    user2={user2}
                    user3={user3}
                    footer2={footer2}
                    logo={logo}
                    logout={logout}
                    yandex={yandex}
                    vk={vk}
                    whatsapp={whatsapp}
                    telegram={telegram}
                />}/>
                <Route path='/печноетопливо' element={<Pechnoe
                    pechnoe={pechnoe}
                    rise={rise}
                    nose={nose}
                    snow={snow}


                    mini1={mini1}
                    mini2={mini2}
                    mini3={mini3}
                    lom={log1}
                    atlant={log2}
                    uvarovskaya={log3}
                    deka={log4}
                    jitnitsa={log5}
                    atp={log6}
                    logo1={logo1}
                    logo2={logo2}
                    logo3={logo3}
                    logo4={logo4}
                    logo5={logo5}
                    otziv={otziv}
                    user1={user1}
                    user2={user2}
                    user3={user3}
                    footer2={footer2}
                    logo={logo}
                    logout={logout}
                    yandex={yandex}
                    vk={vk}
                    whatsapp={whatsapp}
                    telegram={telegram}
                />}/>
                <Route path='/судовоетопливо' element={<Sudovoe
                    mini1={mini1}
                    mini2={mini2}
                    mini3={mini3}
                    top={top}
                    news={news}
                    sale={sale}

                    lom={log1}
                    atlant={log2}
                    uvarovskaya={log3}
                    deka={log4}
                    jitnitsa={log5}
                    atp={log6}
                    logo1={logo1}
                    logo2={logo2}
                    logo3={logo3}
                    logo4={logo4}
                    logo5={logo5}
                    otziv={otziv}
                    user1={user1}
                    user2={user2}
                    user3={user3}
                    footer2={footer2}
                    logo={logo}
                    logout={logout}
                    yandex={yandex}
                    vk={vk}
                    whatsapp={whatsapp}
                    telegram={telegram}
                />}/>
                <Route path='/блог' element={<Blog


                    lom={log1}
                    atlant={log2}
                    uvarovskaya={log3}
                    deka={log4}
                    jitnitsa={log5}
                    atp={log6}
                    user1={user1}
                    user2={user2}
                    user3={user3}
                    footer2={footer2}
                    logo={logo}
                    logout={logout}
                    yandex={yandex}
                    vk={vk}
                    whatsapp={whatsapp}
                    telegram={telegram}
                />}/>
                <Route path='/контакты' element={<Kontakti

                    footer2={footer2}
                    logo={logo}
                    logout={logout}
                    yandex={yandex}
                    vk={vk}
                    whatsapp={whatsapp}
                    telegram={telegram}
                />}/>
                <Route path='/личныйкабинет' element={<Lichniy
                    enter={enter}
                    logo={logo}/>}/>
            </Routes>


        </div>


    )
        ;
}

export default App;