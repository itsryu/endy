import { useEffect, useState } from "react";
import {
	differenceInYears,
	differenceInMonths,
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	differenceInSeconds,
} from "date-fns";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/Card";
import { Lens } from "./animated/Lens";

const dataPedidoNamoro = new Date("2023-09-09T21:11:00");

export default function Timer() {
	const [now, setNow] = useState(new Date());
	const { scrollY } = useScroll();
	const yParallax = useTransform(scrollY, [0, 1000], [0, -10]); // Movimento sutil

	useEffect(() => {
		const interval = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	const years = differenceInYears(now, dataPedidoNamoro);
	const monthsTotal = differenceInMonths(now, dataPedidoNamoro);
	const months = monthsTotal - years * 12;
	const tempDate = new Date(dataPedidoNamoro);
	tempDate.setFullYear(tempDate.getFullYear() + years);
	tempDate.setMonth(tempDate.getMonth() + months);
	const days = differenceInDays(now, tempDate);
	const hours = differenceInHours(now, tempDate) % 24;
	const minutes = differenceInMinutes(now, tempDate) % 60;
	const seconds = differenceInSeconds(now, tempDate) % 60;

	return (
		<motion.div style={{ y: yParallax }}>
			<Card className="relative max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-3xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-xl text-[hsl(var(--foreground))] p-4">
				<CardHeader>
					<Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Blue_rose-artificially_coloured.jpg"
							alt="foto com a muié"
							width={500}
							height={500}
							className="rounded-lg shadow-lg"
						/>
					</Lens>
				</CardHeader>
				<CardContent className="flex flex-col items-center justify-center text-center">
					<CardTitle className="text-2xl">Nosso tempo ❤️</CardTitle>
					<CardDescription>
						Timer de quando a gente começou a conversar pelo Discord e começamos a nos conhecer (No caso, você me conhecer porque eu já estava de olho faz tempo 👀)
					</CardDescription>
				</CardContent>
				<CardFooter className="max-w-full flex flex-col items-center justify-center text-lg p-4 capitalize text-center text-muted-foreground gap-4">
					{/* Primeira linha - Anos, Meses e Dias */}
					<div className="grid grid-cols-3 gap-2 w-full max-w-[240px] mx-auto">
						{years >= 0 && (
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
								<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center rounded-md p-1.5 shadow-md bg-[rgba(255,255,255,0.15)]">
									<span className="font-semibold text-lg">{years}</span>
									<span className="text-sm">{years === 1 ? "ano" : "anos"}</span>
								</Card>
							</motion.div>
						)}
						{months >= 0 && (
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
								<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center rounded-md p-1.5 shadow-md bg-[rgba(255,255,255,0.15)]">
									<span className="font-semibold text-lg">{months}</span>
									<span className="text-sm">{months === 1 ? "mês" : "meses"}</span>
								</Card>
							</motion.div>
						)}
						{days >= 0 && (
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
								<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center rounded-md p-1.5 shadow-md bg-[rgba(255,255,255,0.15)]">
									<span className="font-semibold text-lg">{days}</span>
									<span className="text-sm">{days === 1 ? "dia" : "dias"}</span>
								</Card>
							</motion.div>
						)}
					</div>

					{/* Segunda linha - Horas, Minutos e Segundos */}
					<div className="grid grid-cols-3 gap-2 w-full max-w-[240px] mx-auto">
						{hours >= 0 && (
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
								<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center rounded-md p-1.5 shadow-md bg-[rgba(255,255,255,0.15)]">
									<span className="font-semibold text-lg">{hours}</span>
									<span className="text-sm">{hours === 1 ? "hora" : "horas"}</span>
								</Card>
							</motion.div>
						)}
						{minutes >= 0 && (
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
								<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center rounded-md p-1.5 shadow-md bg-[rgba(255,255,255,0.15)]">
									<span className="font-semibold text-lg">{minutes}</span>
									<span className="text-sm">{minutes === 1 ? "minuto" : "minutos"}</span>
								</Card>
							</motion.div>
						)}
						{seconds >= 0 && (
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
								<Card className="w-16 min-h-16 flex flex-col items-center justify-center text-center rounded-md p-1.5 shadow-md bg-[rgba(255,255,255,0.15)]">
									<span className="font-semibold text-lg">{seconds}</span>
									<span className="text-sm">{seconds === 1 ? "segundo" : "segundos"}</span>
								</Card>
							</motion.div>
						)}
					</div>
				</CardFooter>
			</Card>
		</motion.div>
	);
}
