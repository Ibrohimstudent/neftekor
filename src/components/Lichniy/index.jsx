import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify";

function Login({enter}) {
    const [login,setLogin] = useState("");
    const [password,setPassword] =useState("");

    const navigate = useNavigate();

    const checkLogin =(e)=>{
        e.preventDefault()
        if (login === "ibrohim" && password === "2006"){
            navigate("/главная")

        }else {
            toast("Login yoki parol xato ", {
                position:"top-right",
                autoClose: 3000,
                theme:"light"
            })

        }

    }
    return (
        <div className={"container9"}>
            <div className="header">
                <h1>Гарвекс <br/> АЗС-ОНЛАЙН</h1>

            </div>
            <div className="site">
            <div className="site-header">
                        <p>АВТОРИЗАЦИЯ</p>

                    </div>
                    <div className="site-body">
                            <input value={login}
                                   onChange={(e) => setLogin(e.target.value)}
                                    type="text" placeholder={"Логин"}/>
                            <input value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                    type="password" placeholder={"Пароль"}/>
                        <button  onClick={checkLogin} >
                            <img src={enter} alt=""/><h3>Войти</h3></button>

                    </div>
                </div>

        </div>
    );
}

export default Login;