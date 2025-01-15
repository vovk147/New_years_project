import React, { useState, useEffect } from "react";
import "./CountPage.scss";

const CountPage = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // This function calculates the time remaining until the New Year
    const calculateTimeLeft = () => {
        const targetDate = new Date("2026-01-01T00:00:00"); // New Year target date
        const currentTime = new Date(); // Current time

        const diff = targetDate - currentTime; // Difference in milliseconds

        // If the target date has passed, return zeros
        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    useEffect(() => {
        // Set an interval to update the countdown every second
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="countdown" id="countdown">
            <div className="Info">
                <div className="LeftText">
                    <p>До Нового року залишилося зовсім трішки! <span>Готуємось до магії свята!</span></p>
                </div>
                <div className="Count">

                    <div className="countdown-container">
                        <div className="countdown-item">
                            <div className="countdown-number">{timeLeft.days}</div>
                            <div className="countdown-label">Дні</div>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-number">{timeLeft.hours}</div>
                            <div className="countdown-label">Години</div>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-number">{timeLeft.minutes}</div>
                            <div className="countdown-label">Хвилини</div>
                        </div>
                        <div className="countdown-item">
                            <div className="countdown-number">{timeLeft.seconds}</div>
                            <div className="countdown-label">Секунди</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountPage;
