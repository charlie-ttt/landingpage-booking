import AppAppBar from "../modules/views/AppAppBar"
import AppFooter from "../modules/views/AppFooter"
import ProductHero from "../modules/views/ProductHero"
import ProductSmokingHero from "../modules/views/ProductSmokingHero"
import ProductValues from "../modules/views/ProductValues"
// --- Post bootstrap -----
import React from "react"
import Seo from "../components/seo"
import withRoot from "../modules/withRoot"

function Index() {
  return (
    <React.Fragment>
      <Seo title="Main Page" />
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Index)
