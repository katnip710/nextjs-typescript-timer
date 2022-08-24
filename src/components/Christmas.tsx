import Head from "next/head";
import { useEffect, useState } from "react";

function Christmas() {

    const [playMusic, setplayMusic] = useState(false)

    const stopMusic = () => {
        setplayMusic(true)
        const audio = document.getElementById('a1') as HTMLAudioElement | null;
        audio?.pause();
    }
    const triggerMusic = () => {
        setplayMusic(false)
        const audio = document.getElementById('a1') as HTMLAudioElement | null;
        audio?.play();
    }

    const [start, setStart] = useState(false)
    const openTimer = () => {
        setStart(true)
        const audio = document.getElementById('a1') as HTMLAudioElement | null;
        audio?.play();
    }

    const [time, setTime] = useState(false)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() =>{
        const target = new Date('10/30/2022 23:59:59')
        //const target = new Date ('08/12/2022 1:51:00')

        const interval = setInterval(() => {
        const now = new Date()
        const difference = target.getTime() - now.getTime()

        const d = Math.floor(difference / (1000 * 60 * 60 * 24))
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
            setTime(true)
            const audio = document.getElementById('a1') as HTMLAudioElement | null;
            audio?.pause();
        }

        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
        <Head>
            <link rel="icon" href="img/FullMoon.png" />
        </Head>

        <div className="start-timer-button" style={{
            display: start ? 'none' : 'flex'
        }}>
            <h1 onClick={openTimer} style={{
                fontFamily: '\'Mouse Memoirs\', sans-serif',
                fontSize: '4em',
                fontWeight: '400',
                color: 'rgb(255, 68, 0)',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: 'rgb(153, 41, 0)',
            }}>Start Countdown</h1>
        </div>

        {/* Ani Moon Background */}
        <div className="background-container">
            <img src="img/FullMoon.png" alt="moon" className="moon" style={{
                height: '70vh',
                width: '70vh',
                position: 'absolute',
                zIndex: '3',
                right: '20px',
                cursor: 'pointer',
                transition: 'transform 1.5s ease-in',
            }} />
            <div className="bgImg" style={{
                background: 'black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat',
            }}></div>
            <div className="animation" id="clouds"></div>
        </div>
        {/* Ani Moon Background */}

        <main style={{
            display: start ? 'flex' : 'none',
        }}>
            {time ? (
                <div className="theDate">
                    <iframe width="560" height="349" src="https://www.youtube.com/embed/v4IC7qaNr7I?autoplay=1&mute=1&showinfo=0&controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    <h1 style={{
                        fontFamily: '\'Mouse Memoirs\', sans-serif',
                        fontSize: '4em',
                        fontWeight: '400',
                        color: 'rgb(255, 68, 0)',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: 'rgb(153, 41, 0)',
                    }}>Happy Halloween!</h1>
                </div>
                ) : (

                <div className="timer-wrapper">
                    <h2 style={{
                        fontFamily: '\'Mouse Memoirs\', sans-serif',
                        fontSize: '4em',
                        fontWeight: '400',
                        color: 'rgb(255, 68, 0)',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: 'rgb(153, 41, 0)'
                    }}>Countdown to Halloween</h2>

                    <div className="timer-inner">
                        <div className="timer-segment">
                            <span className="time" style={{
                                color: 'rgb(255, 68, 0)'
                            }}>{days}</span>
                            <span className="label" style={{
                                color: 'rgb(255, 68, 0)'
                            }}>Days</span>
                        </div>
                        <div className="timer-segment">
                            <span className="time" style={{
                                color: 'rgb(255, 68, 0)'
                            }}>{hours}</span>
                            <span className="label" style={{
                                color: 'rgb(255, 68, 0)'
                            }}>Hours</span>
                        </div>
                        <div className="timer-segment">
                            <span className="time" style={{
                                color: 'rgb(255, 68, 0)'
                            }}>{minutes}</span>
                            <span className="label" style={{
                                color: 'rgb(255, 68, 0)'
                            }}>Minutes</span>
                        </div>
                        <div className="timer-segment">
                            <span className="time" style={{
                                color: 'rgb(255, 68, 0)'
                            }}>{seconds}</span>
                            <span className="label" style={{
                                color: 'rgb(255, 68, 0)'
                            }}>Seconds</span>
                        </div>
                    </div>

                <audio id="a1"><source src="/audio/SpookyMusic.mp3" type="audio/mp3" /></audio>

                <div className="audioBtns">
                    <button className="stopBtn" onClick={stopMusic} style={{
                        display: playMusic ? 'none' : 'block'
                    }}></button>
                    <button className="playBtn" onClick={triggerMusic} style={{
                        display: playMusic ? 'block' : 'none'
                    }}></button>
                </div>
                </div>
            )}
            </main>
        </>
    );
};

export default Christmas;

