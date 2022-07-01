import React, { useEffect, useRef, useState } from 'react'
let colormap = require('colormap')
const wave = () => {
    const wavesurfer = useRef<any>(null);
    const [load, setLoad] = useState(false)
    const [playing, setPlaying] = useState(false);
    const url =
        "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";
    const colors = colormap({
        colormap: 'hot',
        nshades: 256,
        format: 'float'
    });
    useEffect(() => {
        setLoad(true)

        return () => {
            if (wavesurfer.current) {
                wavesurfer.current.destroy();
                setLoad(false)
            }
        };
    }, []);

    useEffect(() => {
        load && create()
    }, [load])

    const create = async () => {
        const WaveSurfer = (await import("wavesurfer.js")).default;
        const CursorPlugin = (await import('wavesurfer.js/src/plugin/cursor')).default
        const SpectrogramPlugin = (await import('wavesurfer.js/src/plugin/spectrogram')).default

        wavesurfer.current = WaveSurfer.create({
            container: '#waveform',
            waveColor: "#eee",
            progressColor: "#0178FF",
            cursorColor: "blue",
            barWidth: 3,
            barRadius: 3,
            responsive: true,
            height: 150,
            normalize: true,
            partialRender: true,
            plugins: [
                CursorPlugin.create({
                    showTime: true,
                    customShowTimeStyle: {
                        'background-color': '#000',
                        color: '#fff',
                        padding: '2px',
                        'font-size': '10px'
                    }
                }),
                SpectrogramPlugin.create({
                    container: '#spectrogram',
                    wavesurfer: wavesurfer.current,
                    labels: true,
                    colorMap: colors,
                })
            ]

        });

        wavesurfer.current.load(url);
    };
    const handlePlayPause = () => {
        setPlaying(!playing);
        wavesurfer.current.playPause();
    };
    return (
        <>
            <div id="waveform" />
            <div id="spectrogram" />
            <div className="controls">
                <div onClick={handlePlayPause}>{!playing ? "play" : "stop"}</div>
            </div>
        </>

    )
}

export default wave