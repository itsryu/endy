import { Card, CardContent } from "./ui/Card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/Carousel";
import { useState } from "react";
import { Skeleton } from "./ui/Skeleton";

const data = [
	{
		id: 1,
		img: 'https://media.discordapp.net/attachments/1150221977164988508/1306794155254612018/IMG_20241114_221032_772.webp?ex=67d97625&is=67d824a5&hm=de15c7a101daa911f6032098d525ce788afc7aa2954fd30d2ed8f595d9259bbf&=&format=webp&width=481&height=856',
	},
	{
		id: 2,
		img: 'https://media.discordapp.net/attachments/1150221977164988508/1306794154906619985/IMG_20241114_221011_797.webp?ex=67d97625&is=67d824a5&hm=32f77ee16b5880fe7b9ba48fce79810686ea7aa00728a1891a3cc3b8bc983a2f&=&format=webp&width=481&height=856',
	},
	{
		id: 3,
		img: 'https://media.discordapp.net/attachments/1150221977164988508/1281811754057469974/1725678123924.jpg?ex=67d98af9&is=67d83979&hm=9fe6ee12af3a3520c0c556e3962979d29b56b5de9aa954de189e67983b245120&=&format=webp&width=856&height=856',
	},
	{
		id: 4,
		img: 'https://media.discordapp.net/attachments/1150221977164988508/1281811754602725457/1725678123949.jpg?ex=67d98af9&is=67d83979&hm=1f480540033d64232144c674ca282115ff1fa4a9a39b11aa36a3c8e18dfa326c&=&format=webp&width=643&height=856',
	},
	{
		id: 5,
		img: 'https://media.discordapp.net/attachments/1150221977164988508/1281811753671327804/1725678123899.jpg?ex=67d98af8&is=67d83978&hm=6bec7e90b3ff4a626a29d8494286f08fa2b7cc3ea1540c55e0f58184a3177c9a&=&format=webp&width=643&height=856',
	},
	{
		id: 6,
		img: 'https://media.discordapp.net/attachments/1150221977164988508/1242679123667718204/2368387_A8YtG2pG.png?ex=67d98fde&is=67d83e5e&hm=4d00f31a79f552bdb14f75cfebf05edd0cc55811ac30abe296ebc25c044cfdeb&=&format=webp&quality=lossless',
	},
	{
		id: 7,
		img: 'https://media.discordapp.net/attachments/1150221977164988508/1242678303903584316/2178667_h5pTLOZT.png?ex=67d98f1b&is=67d83d9b&hm=047022d597681ee04d581417e593c3b54090929cf4ae46cd51289e0eeb262995&=&format=webp&quality=lossless',
	},
	{
		id: 8,
		img: '',
	},
];

const CarouselComponent = () => {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 3000);

	return (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{data.map((item) => (
					<CarouselItem key={item.id}>
						<Card className="w-full max-w-full">
							<CardContent className="w-full h-[300px] p-2">
								{loading ? (
									<div className="w-full h-full">
										<Skeleton className="w-full h-full p-2 rounded-lg" />
									</div>
								) : (
									<img
										src={item.img}
										alt={`Foto ${item.id}`}
										className="w-full h-full object-cover rounded-md"
										loading="lazy"
									/>
								)}
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="hidden sm:flex">
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</Carousel>
	);
}

export { CarouselComponent as default };