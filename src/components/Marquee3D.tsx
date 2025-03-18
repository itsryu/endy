import { cn } from "@/lib/utils";
import { Marquee } from "./animated/Marquee";

interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

const reviews: Review[] = [
  { name: "ryu", username: "@ttdoryu", body: "Eu amo seu sorriso", img: "https://github.com/itsryu.png" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo seus olhos", img: "https://github.com/itsryu.png" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo seu cabelo", img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo seu jeito", img: "https://github.com/itsryu.png" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo seu coração", img: "https://github.com/itsryu.png" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo seu toque", img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo sua presença", img: "https://github.com/itsryu.png" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo sua voz", img: "https://github.com/itsryu.png" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo sua lealdade", img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo seu brilho", img: "https://github.com/itsryu.png" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo seu cheiro", img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo seu carinho", img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo sua atenção", img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo sua sinceridade", img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo sua honestidade", img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg" },
  { name: "ryu", username: "@ttdoryu", body: "Eu amo sua companhia", img: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg" },
];

const splitReviews = (reviews: Review[]) => {
  const half = Math.ceil(reviews.length / 2);
  return [reviews.slice(0, half), reviews.slice(half)];
};

const [firstHalf, secondHalf] = splitReviews(reviews);

const ReviewCard: React.FC<Review> = ({ img, name, username, body }) => (
  <figure
    className={cn(
      "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <div className="flex flex-row items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt="" src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
        <p className="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm">{body}</blockquote>
  </figure>
);

const Marquee3D: React.FC = () => (
  <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
    <div
      className="flex flex-row items-center gap-4"
      style={{
        transform:
          "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
      }}
    >
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstHalf.map((review) => (
          <ReviewCard key={review.username + Math.random()} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
        {secondHalf.map((review) => (
          <ReviewCard key={review.username + Math.random()} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
        {firstHalf.map((review) => (
          <ReviewCard key={review.username + Math.random()} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]" vertical>
        {secondHalf.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>

    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-background" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background" />
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background" />
  </div>
);

export { Marquee3D };