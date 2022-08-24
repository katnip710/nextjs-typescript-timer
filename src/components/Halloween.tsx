import Head from "next/head";
import { useEffect, useState } from "react";

function Halloween() {

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

  const [spookyTime, setSpookyTime] = useState(false)
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
        setSpookyTime(true)
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
        display: start ? 'none' : 'flex',
      }}>
        <h1 onClick={openTimer}>Start Countdown</h1>
      </div>

      {/* Ani Moon Background */}
      <div className="background-container">
          <img src="img/FullMoon.png" alt="moon" className="moon" />
          <div className="stars"></div>
          {/*<div className="twinkling"></div>*/}
          <div className="clouds"></div>
      </div>
      {/* Ani Moon Background */}

      <main style={{
        display: start ? 'flex' : 'none',
      }}>
        {spookyTime ? (
            <div className="halloweenTime">
                <iframe id="spookyTime" width="560" height="349" src="https://www.youtube.com/embed/v4IC7qaNr7I?autoplay=1&mute=1&showinfo=0&controls=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

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

              <audio id="a1" autoPlay><source src="/audio/SpookyMusic.mp3" type="audio/mp3" /></audio>

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

export default Halloween;
