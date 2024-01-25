import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import "./App.css";
import { Footer } from "./components";
import { About, Appointment, FeedBack, Header, Services } from "./containers";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Services />
      <Appointment />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;
