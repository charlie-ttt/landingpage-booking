import AppAppBar from "../modules/views/AppAppBar"
import AppFooter from "../modules/views/AppFooter"
import ProductHero from "../modules/views/ProductHero"
import ProductPricing from "../modules/views/ProductPricing"
import ProductSmokingHero from "../modules/views/ProductSmokingHero"
import ProductValues from "../modules/views/ProductValues"
// --- Post bootstrap -----
import React from "react"
import Seo from "../modules/components/Seo"
import withRoot from "../modules/withRoot"

function Index() {
  return (
    <React.Fragment>
      <Seo title="Main Page" />
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductPricing />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Index)
