import { useState, useRef  } from "react";
import ResultModal from "./ResultModal";
export default function TimerChalenge({title, targetTime}) {
    const timer = useRef(); 
    const dialog = useRef();

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
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