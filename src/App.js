import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      {/* Smooth visual transition between sections */}
      <div
        aria-hidden="true"
        className="h-10 sm:h-12 md:h-14 w-full bg-gradient-to-b from-gray-800 to-black"
      />
      <Experience></Experience>
      <div
        aria-hidden="true"
        className="h-10 sm:h-12 md:h-14 w-full bg-gradient-to-b from-gray-900 to-black"
      />
      <Portfolio></Portfolio>
      <div
        aria-hidden="true"
        className="h-10 sm:h-12 md:h-14 w-full bg-gradient-to-b from-gray-900 to-gray-800"
      />
      <Tools></Tools>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
