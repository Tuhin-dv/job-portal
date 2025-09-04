import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import WorksProcess from "@/components/WorksProcess";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <WorksProcess></WorksProcess>
      <OurServices></OurServices>
      <Jobs></Jobs>
      <Footer/>
    </>
  );
}
