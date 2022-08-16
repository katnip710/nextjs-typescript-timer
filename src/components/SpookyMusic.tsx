import { useEffect, useState } from "react";


function SpookyMusic() {

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

    return (
        <>
            <audio id="a1" autoPlay><source src="/audio/SpookyMusic.mp3" type="audio/mp3" /></audio>

            <div className="audioBtns">
                <button className="stopBtn" onClick={stopMusic} style={{
                    display: playMusic ? 'none' : 'block'
                }}>

                </button>
                <button className="playBtn" onClick={triggerMusic} style={{
                    display: playMusic ? 'block' : 'none'
                }}>

                </button>
            </div>
        </>
    );
};

export default SpookyMusic;
