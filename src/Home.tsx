import Navbar from "./component/navbar";
import Banner from "./routes/home/banner";
import About from "./routes/home/about";
import SkillSection from "./routes/home/skillSection";
import Contact from "./routes/home/contact";
import ProjectSection from "./routes/home/projectSection";
function Home(){
    return(
        <>
        <Navbar />
        <Banner />
        <About />
        <SkillSection />
        <ProjectSection />
        <Contact />
        </>
    )
}

export default Home;