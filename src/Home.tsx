import Navbar from "./component/navbar";
import Banner from "./routes/home/banner";
import About from "./routes/home/about";
import SkillCard from "./component/skillCard";
function Home(){
    return(
        <>
        <Navbar />
        <Banner />
        <About />
        <SkillCard />
        </>
    )
}

export default Home;