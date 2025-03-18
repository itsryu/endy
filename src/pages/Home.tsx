import ContainerBox from "@/components/ContainerBox";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { motion } from "framer-motion";
import { Marquee3D } from "@/components/Marquee3D";
import { TextAnimate } from "@/components/animated/TextAnimate";
import CarouselComponent from "@/components/Carosel";
import Timer from "@/components/TimerDate";
import { SparklesText } from "@/components/animated/SparklesText";
import MusicPopup from "@/components/MusicPopup";
import { ParallaxStars } from "@/components/ParallaxStars";

export const Home = () => {
	return (
		<motion.div className="relative flex flex-col justify-center gap-6 mt-10">
			{/* Fundo Parallax */}
			<ParallaxStars />

			{/* Popup de Música */}
			<MusicPopup />

			{/* Seção de Abertura */}
			<ContainerBox>
				<div className="flex flex-col gap-6 h-auto p-6 w-full">
					<BoxReveal duration={0.8}>
						<h1 className="text-4xl font-medium capitalize">
							Oi, {" "}
							<strong className="bg-gradient-to-l from-red-500 to-pink-500 bg-clip-text text-transparent">
								Brenda
							</strong>
						</h1>
					</BoxReveal>

					<BoxReveal duration={0.7}>
						<p className="text-muted-foreground leading-relaxed">
							Eu pensei muito antes de fazer isso, e talvez você nem quisesse
							ver, mas eu precisava me expressar de alguma forma. <br /> Eu não
							quero incomodar, muito menos esperar algo de você. Só quero que,
							por um momento, você veja isso como uma lembrança... e um pedido
							de desculpas sincero. <br /> Sei que palavras não apagam o
							passado, mas queria ao menos deixar claro que nunca foi minha
							intenção te magoar.
						</p>
					</BoxReveal>

					<BoxReveal duration={1}>
						<div className="flex justify-center">
							<img
								src="https://media.discordapp.net/attachments/1150221977164988508/1306794155254612018/IMG_20241114_221032_772.webp"
								alt="Lembrança nossa"
								className="rounded-lg w-64 h-64 object-cover shadow-lg"
								loading="lazy"
							/>
						</div>
					</BoxReveal>
				</div>
			</ContainerBox>

			{/* Seção de Recordação */}
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
						Jamais imaginei que um evento de anime (que eu nem queria ir) faria
						meu caminho cruzar com o seu. Eu lembro da ansiedade antes de te
						ver e de como tudo pareceu tão natural depois. <br />
						Independentemente do que aconteceu depois, essa lembrança ainda é
						algo especial para mim.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.4 }}
						className="flex justify-center"
					>
						<img
							src="https://source.unsplash.com/random/300x300?love"
							alt="Memória do primeiro encontro"
							className="rounded-lg w-64 h-64 object-cover shadow-lg"
							loading="lazy"
						/>
					</motion.div>
				</motion.div>
			</ContainerBox>

			{/* Seção Marquee 3D */}
			<div className="w-full flex flex-col items-center justify-center py-6">
				<TextAnimate className="text-xl font-semibold capitalize mb-5">
					Coisas que me fizeram te amar
				</TextAnimate>
				<Marquee3D />
			</div>

			{/* Seção de Fotos */}
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.5 }}
				className="w-full flex flex-col items-center justify-center my-8"
			>
				<motion.p className="text-2xl font-semibold capitalize">
					Memórias que guardo com carinho
				</motion.p>
				<CarouselComponent />
			</motion.div>

			{/* Timer de Contagem */}
			<div className="flex flex-col items-center justify-center mx-1.5">
				<Timer />
			</div>

			{/* Mensagem Final */}
			<div className="text-center my-8">
				<SparklesText text="Me desculpa" />
				<p className="text-lg pb-3 text-muted-foreground mt-4">
					Se eu pudesse voltar no tempo, eu faria diferente. <br />
					Não porque quero que algo mude agora, mas porque eu sei que você
					merecia melhor. <br />
					Espero que esteja bem, de verdade.
				</p>
			</div>
		</motion.div>
	);
};
