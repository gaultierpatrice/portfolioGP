export default function Project() {
  return (
    <div className="">
      <h2 className="p-5">Collaborative Project</h2>
      <h3 className="p-5">
        In collaboration with Valentin Orrit, close friend also in retraining
      </h3>
      <div className="flex flex-col items-center justify-center">
        <a
          target="_blank"
          href="https://eataround.co/"
          className="group relative block max-w-4/5"
        >
          <div className="">
            {/* Image dims only on desktop hover */}
            <img
              id="imgEA"
              src="../image/screenshots/projets/eataround.png"
              alt="eat-around site screenshot"
              className="w-full md:transition-opacity md:duration-300 md:group-hover:opacity-30"
            />

            {/* Overlay always visible on mobile, hover effect on desktop */}
            <div
              className="
                absolute inset-0 flex flex-col items-center justify-center text-center px-4
                bg-black/40 text-white
                opacity-100 md:opacity-0
                md:group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              <h2 className="p-1 bg-amber-50 border-2 rounded-md">
                Click to Visit EatAround !!!
              </h2>
              <h4 className="pt-2 text-2xl">
                Eat Around is a web application designed to help users discover
                and track dining establishments that cater to vegetarian, vegan,
                gluten-free, lactose-free, halal, and kosher cuisines, including
                restaurants, bakeries, and cafes nearby. The application
                leverages the Google Maps API and Places services to provide
                accurate location-based recommendations.
              </h4>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
