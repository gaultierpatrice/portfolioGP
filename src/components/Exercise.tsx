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
    <div id="carousel" className="mt-1 w-full flex flex-col items-center">
      <h2 className="p-5">Exercises @ A.T.School</h2>

      <Carousel opts={{ loop: true }}>
        <CarouselContent className="w-2xs sm:w-lg lg:w-lg xl:w-2xl ">
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
                    {/* Image */}
                    {exercise.image && (
                      <img
                        src={exercise.image}
                        alt={`${exercise.title} screenshot`}
                        className="w-full rounded md:transition-opacity md:duration-300 md:group-hover:opacity-30"
                      />
                    )}

                    {/* DESKTOP hover overlay */}
                    <div
                      className="
                        hidden md:flex
                        absolute inset-0 flex-col items-center justify-around text-center
                        bg-black/60 text-white
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                      "
                    >
                      <h2 className="bg-amber-50 border-2 rounded-md text-black px-2">
                        Click to Visit !!!
                      </h2>

                      {exercise.goal && <h4>{exercise.goal}</h4>}

                      {exercise.stack?.length > 0 && (
                        <h4 className="p-2">
                          Stack: {exercise.stack.join(", ")}
                        </h4>
                      )}

                      {exercise.date && (
                        <h3 className="p-1 bg-amber-50 border-2 rounded-md text-black">
                          {exercise.date}
                        </h3>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* MOBILE content */}
              <div className="md:hidden p-3 text-center">
                {exercise.goal && <p className="text-sm">{exercise.goal}</p>}

                {exercise.stack?.length > 0 && (
                  <p className="text-xs opacity-70 mt-1">
                    Stack: {exercise.stack.join(" • ")}
                  </p>
                )}

                {exercise.date && (
                  <p className="text-xs opacity-60 mt-1">{exercise.date}</p>
                )}

                <p className="mt-2 underline font-medium">
                  Tap image to open project →
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
