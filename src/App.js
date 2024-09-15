
import Navbar from "./components/navbar"
import Categories from "./components/Categories"
import Sale from "./components/Sale"
import Recommended from "./components/Recommended"
import Topics from "./components/Topices"
import Footer from "./components/footer"

function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <Sale></Sale>
            <Recommended></Recommended>
            <Topics></Topics>
            <Footer></Footer>
        </div>
    )
}

export default App
