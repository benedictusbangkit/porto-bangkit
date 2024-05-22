import Navbar from "./component/navbar";
import Banner from "./routes/home/banner";
import About from "./routes/home/about";
import SkillSection from "./routes/home/skillSection";

function Home(){
    return(
        <>
        <Navbar />
        <Banner />
        <About />
        <SkillSection />
        </>
    )
}

export default Home;