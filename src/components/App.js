import "aos/dist/aos.css";

import Hero from "./Hero";
import Services from "./Services";
import Testimenials from "./Testimenials";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Scroll from "./constant/Scroll";

export default function App() {
  return (
    <div className="App">
      <Scroll showBelow={250} />
      <Hero />
      <Services />
      <Testimenials />
      <Gallery />
      <Footer />
    </div>
  );
}
