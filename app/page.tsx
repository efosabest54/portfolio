import Landing from "@/Components/Landing";
import Image from "next/image";
import AboutPage from "./About/page";
import SkillsPage from "./Skills/page";
import Projectpage from "./Projects/page";
import ContactPage from "./Contact/page";

export default function Home() {
  return (
    <div>
      <Landing/>
    <AboutPage/>
    <SkillsPage/>
    <Projectpage/>
    <ContactPage/>
    </div>
    
  );
}
