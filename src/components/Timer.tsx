import { useEffect, useState } from "react";

function Timer() {

    const [spookyTime, setSpookyTime] = useState(false)

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() =>{
        const target = new Date('10/30/2022 23:59:59')
        //const target = new Date ('08/03/2022 4:53:00')

        const interval = setInterval(() => {
        const now = new Date()
        const difference = target.getTime() - now.getTime()

        const d = Math.floor(difference / (1000 * 60 * 60 *24))
        setDays(d)

        const h = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        setHours(h)

        const m = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        )
        setMinutes(m)

        const s = Math.floor(
            (difference % (1000 * 60)) / 1000
        )
        setSeconds(s)

        if(d <= 0 && h <= 0 && m <= 0 && s <= m){
            setSpookyTime(true)
        }

        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <main>
        {spookyTime ? (
            <div className="halloweenTime">
                <iframe width="560" height="349" src="https://www.youtube.com/embed/8wUixhV13gI?autoplay=1&mute=1&showinfo=0&controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <h1>Happy Halloween!</h1>
            </div>
            ) : (

            <div className="timer-wrapper">
                <h2>Countdown to Halloween</h2>

                <div className="timer-inner">
                    <div className="timer-segment">
                        <span className="time">{days}</span>
                        <span className="label">Days</span>
                    </div>
                    <div className="timer-segment">
                        <span className="time">{hours}</span>
                        <span className="label">Hours</span>
                    </div>
                    <div className="timer-segment">
                        <span className="time">{minutes}</span>
                        <span className="label">Minutes</span>
                    </div>
                    <div className="timer-segment">
                        <span className="time">{seconds}</span>
                        <span className="label">Seconds</span>
                    </div>
                </div>
            </div>
        )}
        </main>
    );
};

export default Timer;

