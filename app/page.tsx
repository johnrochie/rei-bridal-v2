import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Designers from "@/components/Designers";
import RealBrides from "@/components/RealBrides";
import Appointments from "@/components/Appointments";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Collections />
        <Designers />
        <RealBrides />
        <Appointments />
      </main>
      <Footer />
    </>
  );
}
