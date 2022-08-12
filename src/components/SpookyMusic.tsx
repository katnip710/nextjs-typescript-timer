import { useEffect, useState } from "react";

function SpookyMusic() {

    const [playMusic, setplayMusic] = useState(false)
    const stopMusic = () => setplayMusic(true);
    const triggerMusic = () => {
        setplayMusic(false)

    }

    return (
        <>
            <audio src="/audio/SpookyMusic.mp3"></audio>

            <div>
                <button onClick={stopMusic} style={{
                    display: playMusic ? 'none' : 'block'
                }}>Stop</button>
                <button onClick={triggerMusic} style={{
                    display: playMusic ? 'block' : 'none'
                }}>Play</button>
            </div>

        </>
    );
};

export default SpookyMusic;
