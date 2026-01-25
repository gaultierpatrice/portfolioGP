import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { exercises } from "@/components/data/exercises.ts";

export default function Exercise() {
  return (
    <div id="carousel" className="mt-2w-full flex flex-col items-center">
      <h2>Exercises @ A.T.School</h2>
      <Carousel opts={{ loop: true }} className="">
        <CarouselContent className="w-md">
          {exercises.map((exercise, index) => (
            <CarouselItem key={index}>
              <a
                href={exercise.link}
                target="_blank"
                className="group relative block bg-sky-500/75"
              >
                <Card>
                  <CardContent className="relative flex flex-col items-center w-full max-w-sm md:max-w-md">
                    {exercise.image && (
                      <img
                        src={exercise.image}
                        alt={`${exercise.title} screenshot`}
                        className=" rounded  w-full h-auto transition-opacity duration-300 group-hover:opacity-30"
                      />
                    )}

                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white"
                    >
                      <div>Click to Visit !!!</div>
                      <h4>{exercise.title}</h4>

                      {exercise.date && (
                        <p className="text-sm ">{exercise.date}</p>
                      )}

                      {exercise.goal && <p>{exercise.goal}</p>}
                    </div>
                  </CardContent>
                </Card>
              </a>
              {exercise.stack?.length > 0 && (
                <p>Techno: {exercise.stack.join(", ")}</p>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
