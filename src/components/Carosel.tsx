import { Card, CardContent } from "./ui/Card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/Carousel";
import { useState, useEffect } from "react";
import { Skeleton } from "./ui/Skeleton";

interface CarouselDataItem {
	id: number;
	img?: string;
	video?: string;
}

const imagesContext = import.meta.glob("../assets/photos/*.{png,jpg,jpeg,gif,webp}", { eager: true });
const videosContext = import.meta.glob("../assets/videos/*.mp4", { eager: true });

const photosData: CarouselDataItem[] = Object.keys(imagesContext).map((key, index) => ({
	id: index + 1,
	img: (imagesContext[key] as { default: string }).default || (imagesContext[key] as string),
}));

const videosData: CarouselDataItem[] = Object.keys(videosContext).map((key, index) => ({
	id: photosData.length + index + 1,
	video: (videosContext[key] as { default: string }).default || (videosContext[key] as string),
}));

const data: CarouselDataItem[] = [...photosData, ...videosData];

const CarouselComponent = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

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