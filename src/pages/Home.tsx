import ContainerBox from "@/components/ContainerBox";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { motion } from "framer-motion";
import { Marquee3D } from "@/components/Marquee3D";
import { TextAnimate } from "@/components/animated/TextAnimate";
import CarouselComponent from "@/components/Carosel";
import Timer from "@/components/TimerDate";
import { SparklesText } from "@/components/animated/SparklesText";
import MusicPopup from "@/components/MusicPopup";

export const Home = () => {
	return (
		<motion.div className="relative flex flex-col justify-center gap-6 mt-10">
			{/* Popup de Música */}
			<MusicPopup />

			{/* Seção Principal */}
			<ContainerBox>
				<div className="flex flex-col gap-6 h-auto p-6 w-full">
					<BoxReveal duration={0.8}>
						<h1 className="text-4xl font-medium capitalize">
							Olá, minha {" "}
							<strong className="bg-gradient-to-l from-pink-600 to-violet-500 bg-clip-text text-transparent">
								garota
							</strong>
						</h1>
					</BoxReveal>

					<BoxReveal duration={0.7}>
						<p className="text-muted-foreground leading-relaxed">
							Antes de você ver tudo que planejei para você...
							<br /> Saiba que tudo foi feito com muito carinho e amor (apesar
							de eu ter passado raiva no front-end). A ideia é demonstrar o quanto
							você é e foi especial pra mim e te parabenizar nesse dia tão especial...
							<br />
							Aperte o botão de música na lateral e escolha uma
							música. Todas têm um significado especial para mim pois me fazem lembrar de você.
						</p>
					</BoxReveal>

					<BoxReveal duration={1}>
						<div className="flex justify-center">
							<img
								src="https://media.discordapp.net/attachments/1150221977164988508/1306794155254612018/IMG_20241114_221032_772.webp?ex=67d97625&is=67d824a5&hm=de15c7a101daa911f6032098d525ce788afc7aa2954fd30d2ed8f595d9259bbf&=&format=webp&width=481&height=856"
								alt="foto com a muié"
								className="rounded-lg w-64 h-64 object-cover"
								loading="lazy"
							/>
						</div>
					</BoxReveal>
				</div>
			</ContainerBox>

			{/* Seção Nosso Primeiro Encontro */}
			<ContainerBox>
				<motion.div className="flex flex-col gap-6">
					<motion.h2
						className="text-2xl font-semibold capitalize"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
					>
						Nosso primeiro encontro
					</motion.h2>

					<motion.p
						className="text-muted-foreground leading-relaxed"
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
					>
						Jamais iria imaginar que um simples evento de anime (que eu nem
						queria ir...) mudaria tanto o meu destino (e que mudança boa!).
						<br />
						Sou extremamente grato por você e o bruno ter insistido para eu ir,
						porque eu realmente não queria...
						<br />
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.4 }}
						className="flex justify-center"
					>
						<img
							src=""
							alt="foto com a muié"
							className="rounded-lg w-64 h-64 object-cover"
							loading="lazy"
						/>
					</motion.div>
				</motion.div>
			</ContainerBox>

			{/* Seção Marquee 3D */}
			<div className="w-full flex flex-col items-center justify-center py-6">
				<TextAnimate className="text-xl font-semibold capitalize mb-5">
					Motivos para eu te amar
				</TextAnimate>
				<Marquee3D />
			</div>

			{/* Seção de Fotos (Carrossel) */}
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.5 }}
				className="w-full flex flex-col items-center justify-center my-8"
			>
				<motion.p className="text-2xl font-semibold capitalize">
					Algumas fotos que eu amo
				</motion.p>
				<CarouselComponent />
			</motion.div>

			{/* Timer de Contagem */}
			<div className="flex flex-col items-center justify-center mx-1.5">
				<Timer />
			</div>

			{/* Mensagem Final */}
			<div className="text-center my-8">
				<SparklesText text="Te amo" />
				<p className="text-lg pb-3 text-muted-foreground mt-4">
					Obrigado por toda a experiência que você me proporcionou... <br /> Sou grato por tudo!
				</p>
			</div>
		</motion.div>
	);
};
