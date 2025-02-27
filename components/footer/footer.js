import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-spotify">
            <div className="footer-text">
                <p className="footer-text_title">TESTAR O PREMIUM DE GRAÇA</p>
                <p className="footer-text_subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios.
                    Não precisa de cartão de crédito.</p>
            </div>
            <div className="button">
                <button type="button">
                    Inscreva-se grátis
                </button>
            </div>
        </footer>
    )
};

export default Footer;