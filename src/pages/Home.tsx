import ContainerBox from "@/components/ContainerBox";
import { BoxReveal } from "@/components/animated/BoxReveal";
import { motion } from "framer-motion";
import { Marquee3D } from "@/components/Marquee3D";
import { TextAnimate } from "@/components/animated/TextAnimate";
import CarouselComponent from "@/components/Carosel";
import Timer from "@/components/TimerDate";
import { SparklesText } from "@/components/animated/SparklesText";
import MusicPopup from "@/components/MusicPopup";
import img_001 from "@/assets/photos/001.png";

export const Home = () => {
	return (
		<motion.div className="relative flex flex-col justify-center gap-6 mt-10">
			<MusicPopup />

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
							ver, mas eu precisava me expressar de alguma forma. Gostaria de ter feito muito mais coisas, 
							porém meu tempo tava bem limitado, então fiz o que pude (apesar de ter sofrido nesse front-end). <br />
							No cartãozinho que te entreguei, na parte de trás tem um enigma pra você resolver, você é uma garota inteligente,
							e sei que ama enigmas então achei que seria uma boa ideia. <br />
							Espero que goste, e que consiga resolver. <br />
							Eu não quero incomodar, muito menos esperar algo de você. Só quero que,
							por um momento, você veja isso como uma lembrança... e um pedido
							de desculpas sincero. <br /> 
							Sei que palavras não apagam o passado, mas queria ao menos deixar claro que nunca foi minha
							intenção te magoar.
						</p>
					</BoxReveal>

					<BoxReveal duration={1}>
						<div className="flex justify-center items-center w-full">
							<img
								src={img_001}
								alt="Lembrança nossa"
								className="rounded-lg w-64 h-64 object-cover shadow-lg"
								loading="lazy"
							/>
						</div>
					</BoxReveal>
				</div>
			</ContainerBox>

			<div className="w-full flex flex-col items-center justify-center py-6">
				<TextAnimate className="text-xl font-semibold capitalize mb-5">
					Coisas que amo em você
				</TextAnimate>
				<Marquee3D />
			</div>

			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.5 }}
				className="w-full flex flex-col items-center justify-center my-8"
			>
				<motion.p className="text-2xl font-semibold capitalize">
					Memórias que guardo
				</motion.p>
				
				<CarouselComponent />

				<BoxReveal duration={0.7}>
						<p className="text-muted-foreground leading-relaxed">
							Esses acontecimentos nunca irão se apagar da minha memória,
							este é um pequeno pedaço de tudo que vivemos juntos. <br /><br />
							"Que não seja imortal, posto que é chama, mas que seja infinito
							enquanto dure." 
							<p className="text-muted-foreground text-sm">
								- Vinícius de Moraes
							</p>	
						</p>
					</BoxReveal>
			</motion.div>

			<div className="flex flex-col items-center justify-center mx-1.5">
				<Timer />
			</div>

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
