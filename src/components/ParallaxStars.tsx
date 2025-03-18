import { motion, useScroll, useTransform } from "framer-motion";

const generateStars = (count: number) =>
    Array.from({ length: count }).map(() => ({
        x: Math.random() * 100, 
        y: Math.random() * 100, 
        size: Math.random() * 3 + 1, 
        opacity: Math.random() * 0.5 + 0.5, 
    }));

const starsLayer1 = generateStars(50);
const starsLayer2 = generateStars(35);
const starsLayer3 = generateStars(20);

export const ParallaxStars = () => {
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100], { clamp: false });
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200], { clamp: false });
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -400], { clamp: false });

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
            {/* Camada 1 - Estrelas menores */}
            <motion.div className="absolute w-full h-full" style={{ y: y1 }}>
                {starsLayer1.map((star, i) => (
                    <div
                        key={i}
                        className="absolute bg-white dark:bg-gray-300 rounded-full blur-[1px]"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            top: `${(star.y + y1.get() % 100)}%`, 
                            left: `${star.x}%`,
                            opacity: star.opacity,
                        }}
                    />
                ))}
            </motion.div>

            {/* Camada 2 - Estrelas médias */}
            <motion.div className="absolute w-full h-full" style={{ y: y2 }}>
                {starsLayer2.map((star, i) => (
                    <div
                        key={i}
                        className="absolute bg-white dark:bg-gray-400 rounded-full blur-[2px]"
                        style={{
                            width: `${star.size * 1.5}px`,
                            height: `${star.size * 1.5}px`,
                            top: `${(star.y + y2.get() % 100)}%`, 
                            left: `${star.x}%`,
                            opacity: star.opacity,
                        }}
                    />
                ))}
            </motion.div>

            {/* Camada 3 - Estrelas grandes */}
            <motion.div className="absolute w-full h-full" style={{ y: y3 }}>
                {starsLayer3.map((star, i) => (
                    <div
                        key={i}
                        className="absolute bg-white dark:bg-gray-500 rounded-full blur-[3px]"
                        style={{
                            width: `${star.size * 2}px`,
                            height: `${star.size * 2}px`,
                            top: `${(star.y + y3.get() % 100)}%`, 
                            left: `${star.x}%`,
                            opacity: star.opacity,
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};
