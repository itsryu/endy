import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useEffect, useState } from "react";

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
}

const generateStars = (count: number): Star[] =>
    Array.from({ length: count }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5,
    }));

export const ParallaxStars = () => {
    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -100 : -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -200 : -400]);

    const starsLayer1 = useMemo(() => generateStars(50), []);
    const starsLayer2 = useMemo(() => generateStars(35), []);
    const starsLayer3 = useMemo(() => generateStars(20), []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
            <motion.div className="absolute w-full h-full will-change-transform" style={{ y: y1 }}>
                {starsLayer1.map((star, i) => (
                    <div
                        key={i}
                        className="absolute bg-white dark:bg-gray-300 rounded-full"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            top: `${star.y}%`,
                            left: `${star.x}%`,
                            opacity: star.opacity,
                            filter: isMobile ? "none" : "blur(1px)",
                        }}
                    />
                ))}
            </motion.div>

            <motion.div className="absolute w-full h-full will-change-transform" style={{ y: y2 }}>
                {starsLayer2.map((star, i) => (
                    <div
                        key={i}
                        className="absolute bg-white dark:bg-gray-400 rounded-full"
                        style={{
                            width: `${star.size * 1.5}px`,
                            height: `${star.size * 1.5}px`,
                            top: `${star.y}%`,
                            left: `${star.x}%`,
                            opacity: star.opacity,
                            filter: isMobile ? "none" : "blur(2px)",
                        }}
                    />
                ))}
            </motion.div>

            <motion.div className="absolute w-full h-full will-change-transform" style={{ y: y3 }}>
                {starsLayer3.map((star, i) => (
                    <div
                        key={i}
                        className="absolute bg-white dark:bg-gray-500 rounded-full"
                        style={{
                            width: `${star.size * 2}px`,
                            height: `${star.size * 2}px`,
                            top: `${star.y}%`,
                            left: `${star.x}%`,
                            opacity: star.opacity,
                            filter: isMobile ? "none" : "blur(3px)",
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};
