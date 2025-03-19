import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, X } from "lucide-react";

const MusicPopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 1000 * 20);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-popover backdrop-blur-lg
                       shadow-lg px-6 py-4 rounded-lg flex items-center gap-3 z-50"
        >
            <Music className="text-primary w-6 h-6" />
            <p className="text-popover-foreground text-sm font-medium">
                Escolha uma música!
            </p>
            <button
                onClick={() => setIsVisible(false)}
                className="text-popover-foreground hover:text-muted-foreground"
            >
                <X size={18} />
            </button>
        </motion.div>
    );
};

export default MusicPopup;