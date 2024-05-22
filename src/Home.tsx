import Navbar from "./component/navbar";
import Banner from "./routes/home/banner";
import About from "./routes/home/about";

function Home(){
    return(
        <>
        <Navbar />
        <Banner />
        <About />
        </>
    )
}

export default Home;