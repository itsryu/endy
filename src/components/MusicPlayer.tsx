import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Music, X, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ListMusic } from "lucide-react";
import { Button } from "./ui/Button";

const MusicPlayer: React.FC = () => {
    const [playlist] = useState([
        { title: "Apocalypse - Cigarettes After Sex", src: "/sounds/apocalypse.m4a" },
        { title: "You Are The Right One - Sports", src: "/sounds/you_are_the_right_one.m4a" },
        { title: "Farewell, Neverland - TXT", src: "/sounds/farewell_neverland.m4a" },
        { title: "Knee Socks - Arctic Monkeys", src: "/sounds/knee_socks.m4a" },
        { title: "Follow You - BMTH", src: "/sounds/follow_you.m4a" }
    ]);

    const [currentTrack, setCurrentTrack] = useState(playlist[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 1000], [0, -20]);

    useEffect(() => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.play() : audioRef.current.pause();
        }
    }, [currentTrack, isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        const updateProgress = () => {
            if (audioRef.current) {
                const { currentTime, duration } = audioRef.current;
                setProgress((currentTime / duration) * 100 || 0);
                setDuration(duration || 0);
            }
        };
        const interval = setInterval(updateProgress, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsPopupOpen(false);
            }
        };
        if (isPopupOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isPopupOpen]);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const changeTrack = (track: { title: string; src: string }) => {
        setCurrentTrack(track);
        setIsPlaying(true);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime = (parseFloat(e.target.value) / 100) * duration;
            audioRef.current.currentTime = newTime;
            setProgress(parseFloat(e.target.value));
        }
    };

    return (
        <div>
            <Button variant="ghost" size="icon" className="p-6 rounded-full m-4" onClick={() => setIsPopupOpen(true)}>
                <Music className="w-6 h-6 text-[hsl(var(--foreground))]" />
            </Button>

            <audio ref={audioRef} src={currentTrack.src} onEnded={() =>
                changeTrack(playlist[(playlist.indexOf(currentTrack) + 1) % playlist.length])}
            />

            {isPopupOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50 px-4"
                >
                    <motion.div
                        ref={modalRef}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ y: yParallax }}
                        className="relative p-6 w-full max-w-[400px] rounded-xl shadow-lg backdrop-blur-lg bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]"
                    >
                        <button className="absolute top-3 right-3 hover:text-[hsl(var(--accent))] text-[hsl(var(--muted))]" onClick={() => setIsPopupOpen(false)}>
                            <X size={24} />
                        </button>

                        <div className="text-center">
                            <h2 className="text-lg font-semibold">Tocando agora</h2>
                            <p className="text-xl mt-1">{currentTrack.title}</p>
                        </div>

                        {/* Barra de Progresso Manual */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleSeek}
                            className="w-full mt-4 cursor-pointer"
                        />

                        {/* Controles */}
                        <div className="flex items-center justify-center space-x-6 mt-6">
                            <motion.button whileTap={{ scale: 0.9 }} onClick={() =>
                                changeTrack(playlist[(playlist.indexOf(currentTrack) - 1 + playlist.length) % playlist.length])}
                            >
                                <SkipBack className="w-8 h-8 text-[hsl(var(--foreground))]" />
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className="p-4 rounded-full shadow-lg transition bg-[hsl(var(--primary))] hover:bg-[hsla(var(--primary),0.9)] text-[hsl(var(--primary-foreground))]"
                                onClick={togglePlayPause}
                            >
                                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                            </motion.button>

                            <motion.button whileTap={{ scale: 0.9 }} onClick={() =>
                                changeTrack(playlist[(playlist.indexOf(currentTrack) + 1) % playlist.length])}
                            >
                                <SkipForward className="w-8 h-8 text-[hsl(var(--foreground))]" />
                            </motion.button>
                        </div>

                        {/* Volume */}
                        <div className="flex items-center mt-6 space-x-3">
                            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setVolume(volume > 0 ? 0 : 0.8)}>
                                {volume > 0 ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
                            </motion.button>
                            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-full" />
                        </div>

                        {/* Playlist (Scroll) */}
                        <div className="mt-6 max-h-40 overflow-y-auto scrollbar-thin-white rounded-lg">
                            {playlist.map((track, index) => (
                                <motion.div
                                    key={index}
                                    onClick={() => changeTrack(track)}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-2 rounded-md cursor-pointer flex items-center justify-between transition ${track.title === currentTrack.title ? "bg-[hsl(var(--primary))] text-white" : "hover:bg-[rgba(255,255,255,0.2)]"
                                        }`}
                                >
                                    <span className="truncate">{track.title}</span>
                                    {track.title === currentTrack.title && <ListMusic className="w-5 h-5" />}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default MusicPlayer;
