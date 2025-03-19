import ThemeToggle from "@/components/ThemeToggle";
import MusicPlayer from "@/components/MusicPlayer";
import { Outlet } from "react-router-dom";
import { ParallaxStars } from "@/components/ParallaxStars";

const Layout = () => {
    return (
        <div className="w-full min-h-screen relative">
            {/* Header com ThemeToggle e Player */}
            <header className="flex justify-between items-center p-4">
                <ParallaxStars />
                <ThemeToggle />
                <MusicPlayer />
            </header>

            {/* Conteúdo principal */}
            <main className="pb-10">
                <Outlet />
            </main>
        </div>
    );
}

export { Layout };
