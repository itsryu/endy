import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/Button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className="p-6 rounded-full m-4"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}