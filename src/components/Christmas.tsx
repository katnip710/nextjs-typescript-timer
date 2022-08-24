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
        const target = new Date('12/24/2022 23:59:59')
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
            <link rel="icon" href="img/XmasTree.png" />
        </Head>

        <div className="start-timer-button" style={{
            display: start ? 'none' : 'flex'
        }}>
            <h1 onClick={openTimer} style={{
                fontFamily: '\'Mountains of Christmas\', cursive',
                fontSize: '4em',
                fontWeight: '700',
                color: 'red',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: 'red',
            }}>Start Countdown</h1>
        </div>

        {/* Ani Snow Background */}
        <div className="background-container">
            <div className="bgImg" style={{
                backgroundImage: 'url(\'img/SnowandTreesBG.jpg\')',
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}></div>
            <div className="animation" id="snow">
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
                <div className="snowflake">❅</div>
            </div>
        </div>
        {/* Ani Snow Background */}

        <main style={{
            display: start ? 'flex' : 'none',
        }}>
            {time ? (
                <div className="theDate">
                    <iframe width="560" height="349" src="https://www.youtube.com/embed/qdQjE_XEOmo?autoplay=1&mute=1&showinfo=0&controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    <h1 style={{
                        fontFamily: '\'Mountains of Christmas\', cursive',
                        fontSize: '4em',
                        fontWeight: '700',
                        color: 'red',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: 'red',
                    }}>Merry Chirstmas!</h1>
                </div>
                ) : (

                <div className="timer-wrapper">
                    <h2 style={{
                        fontFamily: '\'Mountains of Christmas\', cursive',
                        fontSize: '4em',
                        fontWeight: '700',
                        color: 'green',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: 'green',
                    }}>Countdown to Christmas</h2>

                    <div className="timer-inner">
                        <div className="timer-segment">
                            <span className="time" style={{
                                color: 'red',
                            }}>{days}</span>
                            <span className="label" style={{
                                color: 'red',
                            }}>Days</span>
                        </div>
                        <div className="timer-segment">
                            <span className="time" style={{
                                color: 'red',
                            }}>{hours}</span>
                            <span className="label" style={{
                                color: 'red',
                            }}>Hours</span>
                        </div>
                        <div className="timer-segment">
                            <span className="time" style={{
                                color: 'red',
                            }}>{minutes}</span>
                            <span className="label" style={{
                                color: 'red',
                            }}>Minutes</span>
                        </div>
                        <div className="timer-segment">
                            <span className="time" style={{
                                color: 'red',
                            }}>{seconds}</span>
                            <span className="label" style={{
                                color: 'red',
                            }}>Seconds</span>
                        </div>
                    </div>

                <audio id="a1"><source src="/audio/JingleBells.mp3" type="audio/mp3" /></audio>

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

