// Home page: assemble landing page sections here
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import FacilitySection from '../components/FacilitySection'
import EquipmentSection from '../components/EquipmentSection'
import ProductSection from '../components/ProductSection'
import GallerySection from '../components/GallerySection'
import QualitySection from '../components/QualitySection'
import FooterSection from '../components/FooterSection'

function Home() {
  return (
    <div className="min-h-screen">
      {/*Landing section remains green, rest of page uses neutral surfaces */}
      <Hero />
      <StatsSection />
      <FacilitySection />
      <EquipmentSection />
      <ProductSection />
      <GallerySection />
      <QualitySection />
     

    </div>
  )
}

export default Home
