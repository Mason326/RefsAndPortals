import { useState, useRef } from "react";
export default function TimerChalenge({title, targetTime}) {
    const timer = useRef(); 

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            {timerExpired && <p>You lost!</p>}
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{ targetTime > 1 ? 's' : "" }
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "Stop" : "Start" } Challenge
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined }>
                { timerStarted ? "Timer is active" : "Timer is inactive"}
            </p>
        </section>
    );
}