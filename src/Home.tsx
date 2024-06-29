import Navbar from "./component/navbar";
import Banner from "./routes/home/banner";
import About from "./routes/home/about";
import SkillSection from "./routes/home/skillSection";
import SkillsAPI from "./service/skillsAPI";
import ProjectSection from "./routes/home/projectSection";
function Home(){
    return(
        <>
        <Navbar />
        <Banner />
        <About />
        <SkillSection />
        <ProjectSection />
        </>
    )
}

export default Home;