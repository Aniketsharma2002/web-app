import Navbar from "./components/navbar"
import Footer from "./Components/footer"
import Cards from "./Components/Cards"

function App() {


  return (
    <>
    <Navbar/> 
    <div className="card">
    <Cards title="card1" description="desc1"/>
    <Cards title="card2" description="desc2"/>
    <Cards title="card3" description="desc3"/>
    <Cards title="card4" description="desc4"/>
    <Cards title="card5" description="desc5"/>

    </div>
    <Footer/>
    </>
  )
}

export default App
