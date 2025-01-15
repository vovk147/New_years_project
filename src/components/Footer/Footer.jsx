import "./Footer.scss";
import FeniksLogo from "../ImgPage/Feniks.webp";
import Discord from "../ImgPage/DiscordIcon.webp";
import Telegram from "../ImgPage/TelegramIcon.webp";
import Instagram from "../ImgPage/InstagramIcon.webp";

const Footer = () => {
    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="footer" id="footer">
            <div className="footer-element">
                <div className="footer-container">
                    <div className="footer-logo-section">
                        <img src={FeniksLogo} alt="Feniks Logo" />
                        <p>
                            Веб-сайт про святкування Нового року в різних країнах, що демонструє унікальні традиції та атмосферу свята. Ідеальний для тих, хто прагне відчути святкову магію!
                        </p>
                    </div>

                    <div className="footer-links-section">
                        <h3>Інформація</h3>
                        <ul>
                            <li><a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>Головна</a></li>
                            <li><a href="#countdown" onClick={(e) => handleSmoothScroll(e, "#countdown")}>Відлік</a></li>
                            <li><a href="#countries" onClick={(e) => handleSmoothScroll(e, "#countries")}>Країни</a></li>
                            <li><a href="#developers" onClick={(e) => handleSmoothScroll(e, "#developers")}>Розробники</a></li>
                        </ul>
                    </div>

                    <div className="footer-contacts-section">
                        <h3>Контакти</h3>
                        <div className="contacts">
                            <div className="contact">
                                <p><strong>Yevhen</strong></p>
                                <p><a href="tel:+380993133600">+380 993 133 600</a></p>
                                <p>Email: <a href="mailto:yevhen.vovk@outlook.com">yevhen.vovk@outlook.com</a></p>
                                <div className="social-icons">
                                    <a href="https://www.instagram.com/vovk1471/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                                    <a href="https://t.me/vovk147" target="_blank"><img src={Telegram} alt="Telegram" /></a>
                                    <a href="https://discord.com/users/1060982121092612197/" target="_blank"><img src={Discord} alt="Discord" /></a>
                                </div>
                            </div>
                            <div className="contact">
                                <p><strong>Sonlee</strong></p>
                                <p><a href="tel:+380687734061">+380 687 734 061</a></p>
                                <p>Email: <a href="mailto:sonlee.x69@gmail.com">sonlee.x69@gmail.com</a></p>
                                <div className="social-icons">
                                    <a href="https://www.instagram.com/son.leex/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                                    <a href="https://t.me/sonleex" target="_blank"><img src={Telegram} alt="Telegram" /></a>
                                    <a href="https://discord.com/users/1316482913025523864/" target="_blank"><img src={Discord} alt="Discord" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer-copyright">Feniks © 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
