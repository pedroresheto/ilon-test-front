import logo from './logo.png';
import './App.css';
import Advantages from './Advantages';
import { useState } from 'react'

export default function App() {
  const [ menu, setMenu ] = useState(false)
  return (
  <div className='window'>
    <div className='header container'>
      <div className='container'>
        <div className="header_links">
          <img src={logo} alt="logo"/>
          <div className={menu ? "menu_header active_menu" : "menu_header"}>
            <li>Главная</li>
            <li>Технология</li>
            <li>График полетов</li>
            <li>Гарантии</li>
            <li>О компании</li>
            <li>Контакты</li>
          </div>
          <div className={menu ? "header_burger active_menu" : "header_burger"}
          onClick={()=>setMenu(!menu)}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div className='main'>
      <div className="container">
        <div className="main_container">
          <div className="heading">
            <div className="h1">
              ПУТЕШЕСТВИЕ
              <p>на красную планету</p>
            </div>
            <div className="begin_button">
              <span>начать путешествие</span>
            </div>
          </div>
          <div className="advantages">
            <Advantages />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}