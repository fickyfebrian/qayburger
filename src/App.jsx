import Navbar from "./component/navbar"
import Menu from "./component/section/menu"
import Carousel from "./component/carousel"
import Testimonials from "./component/section/testimonials/testimonials"
import Soda from "./component/section/soda/soda"

function App() {
  return (
    <div>
     <Navbar />
     <Carousel />
     <Menu />
     <Soda />
     <Testimonials />
    </div>
  )
}

export default App
