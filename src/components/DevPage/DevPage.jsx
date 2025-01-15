import "./DevPage.scss";
import Striwolf1 from "../ImgPage/Striwolf1.png";
import Striwolf2 from "../ImgPage/Striwolf2.png";
import Striwolf3 from "../ImgPage/Striwolf3.png";
import Striwolf4 from "../ImgPage/Striwolf4.png";

import Sonlee1 from "../ImgPage/Sonlee1.png";
import Sonlee2 from "../ImgPage/Sonlee2.png";
import Sonlee3 from "../ImgPage/Sonlee3.png";
import Sonlee4 from "../ImgPage/Sonlee4.png";

const Dev = () => {
    return (
        <section className="Developers" id="developers">

            <h1>Developers</h1>

            <div className="Cards">

                {/* Карточка програміста */}
                <div className="Card">
                    <div className="Top_card">
                        <p className="Role">Програміст</p>
                    </div>
                    <div className="MiddleInCard">
                        <h2 className="Pseudonym">Sriwolf</h2>
                        <h3>Нещодавні роботи</h3>
                        <div className="ImageProject">
                            <img src={Striwolf1} alt="Project 1" />
                            <img src={Striwolf2} alt="Project 2" />
                            <img src={Striwolf3} alt="Project 3" />
                            <img src={Striwolf4} alt="Project 4" />
                        </div>
                        <button className="Portfolio"><a href="https://portfolio-one-jade-41.vercel.app/" target="_blank">Переглянути портфоліо</a></button>
                    </div>

                </div>

                {/* Карточка дизайнера */}
                <div className="Card">
                    <div className="Top_card">
                        <p className="Role">Дизайнер</p>
                    </div>
                    <div className="MiddleInCard">
                        <h2 className="Pseudonym">Сонлі</h2>
                        <h3>Нещодавні роботи</h3>
                        <div className="ImageProject">
                            <img src={Sonlee1} alt="Project 1" />
                            <img src={Sonlee2} alt="Project 2" />
                            <img src={Sonlee3} alt="Project 3" />
                            <img src={Sonlee4} alt="Project 4" />
                        </div> 
                        <button className="Portfolio">Переглянути портфоліо</button>
                    </div>
                   
                </div>

            </div>

        </section>
    );
};

export default Dev;
//https://ir.ozone.ru/s3/multimedia-1-w/c1000/7169067500.jpg