import "./App.css";
import Header from "./components/Header.tsx";
import Intro from "./components/Intro.tsx";
import Exercise from "./components/Exercise.tsx";
import Project from "./components/Project.tsx";
import Quote from "./components/Quote.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <>
      <div className=" flex flex-col items-center">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 mt-5">
          <div className="h-full bg-gray-100">
            <Exercise />
          </div>
          <div className="h-full bg-gray-100 flex flex-col">
            <Project />
          </div>
          <div className="h-full">
            <Intro />
          </div>
          <div className="h-full">
            <Contact />
          </div>
        </div>

        <Quote />
      </div>
    </>
  );
}

export default App;
