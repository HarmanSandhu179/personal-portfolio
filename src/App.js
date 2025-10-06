import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Tools></Tools>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
