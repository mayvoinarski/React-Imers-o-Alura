import React from "react";
import './sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar_navigation">
            <div className="logo">
                <a href="">
                    <img src={logoSpotify} alt="Logo com nome do Spotify"/>
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faHome} className="fa fa-home"/>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="">
                    <FontAwesomeIcon icon={faSearch} className="fa fa-search" />
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="biblioteca">
            <div className="content-bibl">
                <button className="button-bibl">
                    <FontAwesomeIcon icon={faBook} className="fa-solid fa-book" />
                    <span> Sua biblioteca</span>
                </button>
                <FontAwesomeIcon icon={faPlus} className="fa fa-plus"/>
            </div>
            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
            <div className="cookies">
                <a href="">Cookies</a>
            </div>
            <div className="languages">
                <button className="languages__button">
                <FontAwesomeIcon icon={faGlobe} className="fa fa-globe"/>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
};

export default Sidebar;