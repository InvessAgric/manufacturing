// Central asset registry for the marketing site.
// Editors can update image locations here without changing each component import.

// Brand and identity assets
import brandLogo from './images/brand/logo.webp'
import brandLogoAlt from './images/brand/logo_1.webp'

// Hero and landing visuals
import heroBackground from './images/hero/bg.webp'
import heroPattern from './images/hero/hero-bg.svg'

// Facility and equipment visuals
import facilityMainImage from './images/facility/Facility.webp'
import facilityHopperImage from './images/facility/StorageHopper.webp'
import facilityConveyorImage from './images/facility/ConveyorSystem.webp'
import facilityFeedersImage from './images/facility/Feeders.webp'

// Product and catalog visuals
import productHeaderImage from './images/products/productheader.webp'
import productBannerImage from './images/products/productbanner.webp'
import productNpkBagImage from './images/products/Invess-Chaleee-NPK-nobg.webp'
import productNpkBagNoBg from './images/products/Invess-Chaleee-NPK-nobg.webp'
import productUreaBagImage from './images/products/Invess-Chaleee-Urea-nobg.webp'
import productUreaBagNoBg from './images/products/Invess-Chaleee-Urea-nobg.webp'
import productAmmoniaBagImage from './images/products/Invess-SOA-Sulphate-of-Ammonia-nobg.webp'
import productAmmoniaBagNoBg from './images/products/Invess-SOA-Sulphate-of-Ammonia-nobg.webp'
import productActivateBagImage from './images/products/ACTIVATE.webp'
import productPotassiumBagImage from './images/products/Potassium_Nitrate.webp'
import productBlessCocoaBagImage from './images/products/BLESS_COCOA.webp'
// Gallery and story visuals
import galleryImageOne from './images/gallery/aboutimage1.webp'
import galleryImageTwo from './images/gallery/aboutimage2.webp'
import galleryImageThree from './images/gallery/aboutimage3.webp'
import founderImage from './images/gallery/founder.webp'

// Social and UI icons
import socialEmailIcon from './Icons/social/email.webp'
import socialInstagramIcon from './Icons/social/instagram.webp'
import socialLinkedInIcon from './Icons/social/linkedin.webp'
import socialPlaceholderIcon from './Icons/social/placeholder.webp'
import socialWhatsappIcon from './Icons/social/whatsapp.webp'
import socialWhatsappPng from './Icons/social/whatsapp.png'

export {
  brandLogo,
  brandLogoAlt,
  heroBackground,
  heroPattern,
  facilityMainImage,
  facilityHopperImage,
  facilityConveyorImage,
  facilityFeedersImage,
  productHeaderImage,
  productBannerImage,
  productNpkBagNoBg,
  productNpkBagImage,
  productActivateBagImage,
  productBlessCocoaBagImage,
  productPotassiumBagImage,
  productUreaBagImage,
  productUreaBagNoBg,
  productAmmoniaBagImage,
  productAmmoniaBagNoBg,
  founderImage,
  galleryImageOne,
  galleryImageTwo,
  galleryImageThree,
  socialEmailIcon,
  socialInstagramIcon,
  socialLinkedInIcon,
  socialPlaceholderIcon,
  socialWhatsappIcon,
  socialWhatsappPng,
}

export const assetCategories = {
  brand: ['brandLogo', 'brandLogoAlt'],
  hero: ['heroBackground', 'heroPattern'],
  facility: ['facilityMainImage', 'facilityHopperImage', 'facilityConveyorImage', 'facilityFeedersImage'],
  products: ['productHeaderImage', 'productBannerImage', 'productNpkBagImage', 'productUreaBagImage', 'productAmmoniaBagImage','productActivateBagImage','productPotassiumBagImage','productBlessCocoaBagImage'],
  gallery: ['galleryImageOne', 'galleryImageTwo', 'galleryImageThree'],
  icons: ['socialEmailIcon', 'socialInstagramIcon', 'socialLinkedInIcon', 'socialPlaceholderIcon', 'socialWhatsappIcon'],
}
