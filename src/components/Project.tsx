export default function Project() {
  return (
    <div>
      <h2 className="p-2 mt-5">Collaborative Project</h2>
      <h3 className="p-2">
        In collaboration with Valentin Orrit, close friend also in retraining
      </h3>

      <div className="flex flex-col items-center justify-center mt-8">
        <a
          target="_blank"
          href="https://eataround.co/"
          className="group relative block max-w-4/5"
        >
          <img
            id="imgEA"
            src="../image/screenshots/projets/eataround.png"
            alt="eat-around site screenshot"
            className="w-full md:transition-opacity md:duration-300 md:group-hover:opacity-30"
          />

          {/* DESKTOP hover overlay */}
          <div
            className="
              hidden md:flex
              absolute inset-0 flex-col items-center justify-center gap-10 text-center px-4
              bg-black/40 text-white
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          >
            <h2 className="p-1 bg-amber-50 border-2 rounded-md text-black">
              Click to Visit EatAround !!!
            </h2>
            <h4 className="pt-2 text-2xl text-left">
              Eat Around is a web application designed to help users discover
              and track dining establishments that cater to vegetarian, vegan,
              gluten-free, lactose-free, halal, and kosher cuisines.
            </h4>
          </div>
        </a>

        {/* MOBILE content */}
        <div className="md:hidden p-4 text-center max-w-4/5">
          <h3 className="font-semibold text-lg">Eat Around</h3>
          <p className="mt-2 text-sm opacity-80">
            Discover and track restaurants, bakeries, and cafés offering
            vegetarian, vegan, gluten-free, halal, kosher, and more.
          </p>
          <p className="mt-3 underline font-medium">
            Tap image to visit EatAround →
          </p>
        </div>
      </div>
    </div>
  );
}
