import React, { useState } from 'react';
import './Header.scss';
import Feniks from "../ImgPage/Feniks.webp";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Закриваємо меню після переходу до секції
        }
    };

    return (
        <header className="header">
            <div className="container">
                {/* Логотип */}
                <div className="logo">
                    <img src={Feniks} alt="logo" />
                    {/* Іконка меню */}
                    <div
                        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Навігація */}
                <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                    <div className="links">
                        <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>Головна</a>
                        <a href="#countdown" onClick={(e) => handleSmoothScroll(e, "#countdown")}>Відлік</a>
                        <a href="#countries" onClick={(e) => handleSmoothScroll(e, "#countries")}>Країни</a>
                        <a href="#developers" onClick={(e) => handleSmoothScroll(e, "#developers")}>Розробники</a>
                    </div>
                    <div className="socials">
                        <a href="#footer" onClick={(e) => handleSmoothScroll(e, "#footer")}>Наші Соцмережі</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
