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

        <div className=" flex flex-col px-10 sm:flex-row sm:px-30">
          <div className="flex-1 ">
            <Intro />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <Contact />
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row sm:px-30">
          <div className="flex flex-col flex-1  md:flex-row">
            <Project />
            <div className="flex-1 ">
              <Exercise />
            </div>
          </div>
        </div>

        <Quote />
      </div>
    </>
  );
}

export default App;
