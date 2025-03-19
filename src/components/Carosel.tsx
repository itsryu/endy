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

interface CarouselDataItem {
    id: number;
    img?: string;
    video?: string;
}

const data: CarouselDataItem[] = [
    {
        id: 1,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1306794155254612018/IMG_20241114_221032_772.webp?ex=67d97625&is=67d824a5&hm=de15c7a101daa911f6032098d525ce788afc7aa2954fd30d2ed8f595d9259bbf&=&format=webp&width=481&height=856",
    },
    {
        id: 2,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1306794154906619985/IMG_20241114_221011_797.webp?ex=67d97625&is=67d824a5&hm=32f77ee16b5880fe7b9ba48fce79810686ea7aa00728a1891a3cc3b8bc983a2f&=&format=webp&width=481&height=856",
    },
    {
        id: 3,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1281811754057469974/1725678123924.jpg?ex=67d98af9&is=67d83979&hm=9fe6ee12af3a3520c0c556e3962979d29b56b5de9aa954de189e67983b245120&=&format=webp&width=856&height=856",
    },
    {
        id: 4,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1281811754602725457/1725678123949.jpg?ex=67d98af9&is=67d83979&hm=1f480540033d64232144c674ca282115ff1fa4a9a39b11aa36a3c8e18dfa326c&=&format=webp&width=643&height=856",
    },
    {
        id: 5,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1281811753671327804/1725678123899.jpg?ex=67d98af8&is=67d83978&hm=6bec7e90b3ff4a626a29d8494286f08fa2b7cc3ea1540c55e0f58184a3177c9a&=&format=webp&width=643&height=856",
    },
    {
        id: 6,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1242679123667718204/2368387_A8YtG2pG.png?ex=67d98fde&is=67d83e5e&hm=4d00f31a79f552bdb14f75cfebf05edd0cc55811ac30abe296ebc25c044cfdeb&=&format=webp&quality=lossless",
    },
    {
        id: 7,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1242678303903584316/2178667_h5pTLOZT.png?ex=67d98f1b&is=67d83d9b&hm=047022d597681ee04d581417e593c3b54090929cf4ae46cd51289e0eeb262995&=&format=webp&quality=lossless",
    },
    {
        id: 8,
        video: 'https://cdn.discordapp.com/attachments/1351781812862717962/1351784372055048212/SPOILER_VID_20241007_220230.mp4?ex=67dba2cd&is=67da514d&hm=8c2bcf533cbe6c6c27fa585afb53f8053d2e0ef8aaa68f28c7e3173fd687f4f5&',
    },
    {
        id: 9,
        img: "https://cdn.discordapp.com/attachments/1150221977164988508/1293015443778568262/1728349260139.jpg?ex=67dac038&is=67d96eb8&hm=08931fbab95af2a9cbf865bdce63a3a1889c082342389fbeb4644f81a649a8aa&=&format=webp&width=643&height=856",
    },
    {
        id: 10,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1292838081681952839/IMG_20241007_023708.jpg?ex=67dac3ca&is=67d9724a&hm=b181b845d7956e1accfc01b2dbb5c2e388771e47b6411b564c0e6dd4179230ba&=&format=webp&width=721&height=960",
    },
    {
        id: 11,
        img: "https://cdn.discordapp.com/attachments/1150221977164988508/1290679128558796882/Screenshot_2024-10-01-11-17-49-704_com.discord.png?ex=67dad21b&is=67d9809b&hm=48b60468dd7cb69c7cfab721651e580d2cd171cb08d9f25704b3100ccb642c01&format=webp&quality=lossless",
    },
    {
        id: 12,
        img: "https://cdn.discordapp.com/attachments/1150221977164988508/1285445436634824704/IMG_20240917_003942.jpg?ex=67dae59a&is=67d9941a&hm=d0329fc0e149693efe2dd40fbac4367fd20120be3b7cf065b71784a52c411fd8&format=webp&width=721&height=960",
    },
    {
        id: 13,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1278955963063341096/IMG_20240830_025318.jpg?ex=67db04cf&is=67d9b34f&hm=34cf20a6cbc15ec027ed6088c8330d6dcd7c6dd24ddbb3d15513918c0ed42718&=&format=webp&width=721&height=960",
    },
    {
        id: 14,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1248712864047562805/image.png?ex=67db13fa&is=67d9c27a&hm=4bfa2c9e0acdc3b7b21df13a383466cf58f6c622e41ff1106d9ac60e58e8dd02&=&format=webp&quality=lossless",
    },
    {
        id: 15,
        img: "https://media.discordapp.net/attachments/1150221977164988508/1229285955836444722/image.png?ex=67daef82&is=67d99e02&hm=4ce3aa8ec68718f187cf2fb845cee074b4c58f8d56e51a574597c744ba4a5fef&=&format=webp&quality=lossless",
    },
    {
        id: 16,
        img: "https://cdn.discordapp.com/attachments/1150221977164988508/1229273839637364746/image.png?ex=67dae43a&is=67d992ba&hm=89b88bbe795c50722e4fd456de7db4cea06441037ded92f48eb520dae6c35e69&format=webp&quality=lossless",
    },
	{
		id: 17,
		img: "https://media.discordapp.net/attachments/1150221977164988508/1229274823251984537/image.png?ex=67dae524&is=67d993a4&hm=827c05318c451862580476cc013c3ee0e56a5877ba41e171ade26100a2c57a18&=&format=webp&quality=lossless"
	},
	{
		id: 18,
		img: "https://cdn.discordapp.com/attachments/1150221977164988508/1220024393942437888/IMG_20240319_195244754.jpg?ex=67dadc42&is=67d98ac2&hm=751c0aea15f6070adc4937e026d90c06ea1d68f6ed7f9abe71967d523f1a16f3&format=webp&width=720&height=960"
	},
	{
		id: 19,
		img: "https://media.discordapp.net/attachments/1150221977164988508/1219132841401782353/Screenshot_2024-03-18-00-58-23-770_com.life360.android.safetymapd.png?ex=67dae9af&is=67d9982f&hm=5558b68d9061401d2a06e92091fe8815c4cc01fdf63c36dd2b6e97bc62708830&=&format=webp&quality=lossless&width=879&height=960"
	},
	{
		id: 20,
		img: "https://cdn.discordapp.com/attachments/1150221977164988508/1216175325051097138/0IBHU6Z3NMFQFQ.png?ex=67dab348&is=67d961c8&hm=2c95996cdf557d93be7ac057cc3310dfb0b156c6c07a24593e8ebd6f7ed6ab9e&format=webp&quality=lossless"
	}
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
						<Card className="w-auto">
							<CardContent className="flex items-center justify-center w-full h-[500px] p-3">
								{loading ? (
									<div className="w-full h-full">
										<Skeleton className="w-full h-full p-2 rounded-lg" />
									</div>
								) : (
									<>
										{item.video ? (
											<video
												autoPlay
												muted
												loop
												playsInline
												className="h-full w-auto object-contain rounded-md mx-auto"
											>
												<source src={item.video} type="video/mp4" />
												Your browser does not support the video tag.
											</video>
										) : (
											<img
												src={item.img}
												alt={`Item ${item.id}`}
												className="h-full w-auto object-contain rounded-md mx-auto"
												loading="lazy"
											/>
										)}
									</>
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
};

export { CarouselComponent as default };