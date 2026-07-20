// Home page: composes the landing experience from the main marketing sections.
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import FacilitySection from '../components/FacilitySection'
import EquipmentSection from '../components/EquipmentSection'
import FleetSection from '../components/FleetSection'
import ProductSection from '../components/ProductSection'
import GallerySection from '../components/GallerySection'
import QualitySection from '../components/QualitySection'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Landing hero remains visually prominent, while the rest of the page uses neutral surfaces. */}
      <Hero />
      <StatsSection />
      <FacilitySection />
      <EquipmentSection />
      <FleetSection />
      <ProductSection />
      <GallerySection />
      <QualitySection />
    </div>
  )
}

export default Home
