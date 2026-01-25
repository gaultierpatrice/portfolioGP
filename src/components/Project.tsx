export default function Project() {
  return (
    <div>
      <h2 className="p-5">Collaborative Project</h2>
      <div className=" flex flex-col items-center justify-center">
        <a
          target="_blank"
          href="https://eataround.co/"
          className="group relative block max-w-9/12"
        >
          <div className="">
            <img
              id="imgEA"
              src="../image/screenshots/projets/eataround.png"
              alt="eat-around site screenshot"
              className="w-full transition-opacity duration-300 group-hover:opacity-30"
            />

            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-black/60 text-white"
            >
              <div>Click to Visit EatAround !!!</div>
              <p className="pt-2">
                Eat Around is a web application designed to help users discover
                and track dining establishments that cater to vegetarian, vegan,
                gluten-free, lactose-free, halal, and kosher cuisines, including
                restaurants, bakeries, and cafes nearby. The application
                leverages the Google Maps API and Places services to provide
                accurate location-based recommendations.
              </p>
            </div>
          </div>
        </a>

        <h3 className="p-5">
          In collaboration with Valentin Orrit, close friend also in retraining
        </h3>
      </div>
    </div>
  );
}
