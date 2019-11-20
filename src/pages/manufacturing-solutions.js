import React from "react"
import Capability from "../components/Capability";
import CapabilityList from "../components/CapabilityList";

import { data } from "../globals/data/capabilities";

import Pageshell from "../components/Pageshell"
import SEO from "../components/seo"

const ManufacturingSolutions = () => (
  <Pageshell>
    <SEO title="Manufacturing Solutions" />
    <Capability data={data.manufacturingSolutions}/>
    <CapabilityList
      title="See more of our capabilities"
      data={data}
      current={'manufacturingSolutions'}
    />
  </Pageshell>
)

export default ManufacturingSolutions
