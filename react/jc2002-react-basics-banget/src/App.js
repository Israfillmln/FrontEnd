import "./assets/asset.css";
import "bootstrap/dist/css/bootstrap.min.css"
import TourCard from "./components/TourSection/TourSection";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Member from "./components/Member/Member";

function App() {
  return (
    // react fragment
    <>
     <Navbar />
     <Home />
     <Member />
     <br />
     <br />
   {/* <div>
     <center>
     <h1>Welcome to apil corporate</h1>
     <h2>halo</h2>
     </center>
   </div> */}
     <br />
     <br />
     <TourCard />
    </>
  );
}

export default App;
