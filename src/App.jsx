import Navbar from "./component/layout/navbar"
import Menu from "./component/section/menu/menu"
import Carousel from "./component/carousel"
import Testimonials from "./component/section/testimonials/testimonials"
import Soda from "./component/section/soda/soda"
import Hotdeals from "./component/section/hotdeals/hotdeals"
import Footer from "./component/layout/footer"

function App() {
  return (
    <div>
     <Navbar />
     <Carousel />
     <Hotdeals />
     <Menu />
     <Soda />
     <Testimonials />
     <Footer />
    </div>
  )
}

export default App
