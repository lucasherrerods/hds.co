import Header from "../../components/Header"
import HeroSection from "../../components/HeroSection"
import CategoryCards from "../../components/CategoryCards"
import NewArrivals from "../../components/NewArrivals"
import Newsletter from "../../components/Newsletter"
import Footer from "../../components/Footer"

export default function Home() {

  return (
    <div>
      <Header />
      <HeroSection />
      <CategoryCards />
      <NewArrivals />
      <Newsletter />
      <Footer />
    </div>
  )
}