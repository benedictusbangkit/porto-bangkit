import Navbar from "./component/navbar";
import PhotoAPI from "./service/photoAPI";
import SkillSection from "./routes/home/skillSection";
import Contact from "./routes/home/contact";
import ProjectSection from "./routes/home/projectSection";
function Home(){
    return(
        <>
        <Navbar />
        <PhotoAPI />
        <SkillSection />
        <ProjectSection />
        <Contact />
        </>
    )
}

export default Home;