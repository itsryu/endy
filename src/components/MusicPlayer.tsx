import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, X, Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "./ui/Button";

const MusicPlayer: React.FC = () => {
    const [playlist] = useState([
        { title: "Apocalypse - Cigarettes After Sex", src: "/sounds/apocalypse.m4a" },
        { title: "You Are The Right One - Sports", src: "/sounds/you_are_the_right_one.m4a" },
        { title: "Farewell, Neverland - TOMORROW X TOGETHER", src: "/sounds/farewell_neverland.m4a" },
        { title: "Knee Socks - Arctic Monkeys", src: "/sounds/knee_socks.m4a" },
        { title: "Follow You - Bring Me The Horizon", src: "/sounds/follow_you.m4a" },
    ]);

    const [currentTrack, setCurrentTrack] = useState(playlist[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
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
            }
        };

        const interval = setInterval(updateProgress, 500);
        return () => clearInterval(interval);
    }, []);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const changeTrack = (track: { title: string; src: string }) => {
        setCurrentTrack(track);
        setIsPlaying(true);
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(event.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <div>
            {/* Botão no Header */}
            <Button
                variant="ghost"
                size="icon"
                className="p-6 rounded-full m-4"
                onClick={() => setIsPopupOpen(true)}
            >
                <Music className="w-6 h-6 text-[hsl(var(--foreground))]" />
            </Button>

            <audio
                ref={audioRef}
                src={currentTrack.src}
                onEnded={() =>
                    changeTrack(playlist[(playlist.indexOf(currentTrack) + 1) % playlist.length])
                }
            />

            {/* Modal do Player */}
            {isPopupOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50"
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative p-6 w-[380px] max-w-full rounded-xl shadow-2xl backdrop-blur-xl bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))]"
                    >
                        {/* Botão de Fechar */}
                        <button
                            className="absolute top-3 right-3 hover:text-[hsl(var(--accent))] text-[hsl(var(--muted))]"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            <X size={24} />
                        </button>

                        {/* Música atual */}
                        <div className="text-center">
                            <h2 className="text-lg font-semibold">Tocando agora</h2>
                            <p className="text-xl mt-1">{currentTrack.title}</p>
                        </div>

                        {/* Barra de progresso */}
                        <div className="relative w-full h-1.5 rounded-full mt-4 bg-[hsla(var(--muted),0.4)]">
                            <div
                                className="absolute top-0 left-0 h-1.5 rounded-full transition-all"
                                style={{ width: `${progress}%`, background: "hsl(var(--primary))" }}
                            ></div>
                        </div>

                        {/* Controles do Player */}
                        <div className="flex items-center justify-center space-x-6 mt-6">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                    changeTrack(
                                        playlist[(playlist.indexOf(currentTrack) - 1 + playlist.length) % playlist.length]
                                    )
                                }
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

                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                    changeTrack(playlist[(playlist.indexOf(currentTrack) + 1) % playlist.length])
                                }
                            >
                                <SkipForward className="w-8 h-8 text-[hsl(var(--foreground))]" />
                            </motion.button>
                        </div>

                        {/* Controle de Volume */}
                        <div className="flex items-center mt-6 space-x-3">
                            <Volume2 className="w-5 h-5 text-[hsl(var(--muted))]" />
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-full cursor-pointer"
                            />
                        </div>

                        {/* Lista de Músicas */}
                        <div className="mt-6">
                            <h3 className="text-center">Selecione uma música:</h3>
                            <div className="flex flex-col items-center mt-2 space-y-2">
                                {playlist.map((track) => (
                                    <button
                                        key={track.src}
                                        onClick={() => changeTrack(track)}
                                        className={`px-4 py-2 w-full rounded-lg transition shadow-sm ${currentTrack.src === track.src
                                            ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                                            : "bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] hover:bg-[hsl(var(--secondary))]"
                                            }`}
                                    >
                                        {track.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default MusicPlayer;