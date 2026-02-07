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
    <div id="carousel" className="mt-2 w-full flex flex-col items-center">
      <h2 className="p-5 ">Exercises @ A.T.School</h2>
      <Carousel opts={{ loop: true }} className="">
        <CarouselContent className="w-sm md:w-md lg:w-md">
          {exercises.map((exercise, index) => (
            <CarouselItem key={index}>
              <h2 className="py-1 underline mb-5">{exercise.title}</h2>
              <a
                href={exercise.link}
                target="_blank"
                className="group relative block"
              >
                <Card>
                  <CardContent className="relative flex flex-col items-center w-full">
                    {exercise.image && (
                      <img
                        src={exercise.image}
                        alt={`${exercise.title} screenshot`}
                        className="rounded w-full h-auto md:transition-opacity md:duration-300 md:group-hover:opacity-30"
                      />
                    )}

                    <div
                      className="
                            absolute inset-0 flex flex-col items-center justify-around text-center
                            bg-black/40 text-white
                            opacity-100 md:opacity-0
                            md:group-hover:opacity-100
                            transition-opacity duration-300
                          "
                    >
                      <h2 className="bg-amber-50 border-2 rounded-md">
                        Click to Visit !!!
                      </h2>
                      {exercise.goal && <h4>{exercise.goal}</h4>}
                      {exercise.stack?.length > 0 && (
                        <h4 className="p-2">
                          Stack: {exercise.stack.join(", ")}
                        </h4>
                      )}
                      {exercise.date && (
                        <h3 className="p-1 bg-amber-50 border-2 rounded-md">
                          {exercise.date}
                        </h3>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
