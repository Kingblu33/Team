import React from 'react'
import Navbar from '../components/Navbar'
import InfoSection from '../components/infoSection'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Footbar from '../components/Footbar'
import Section3 from '../components/Section3'

const Dash = () => {
return (
    <div>
        <Navbar/>
        <InfoSection/>
        <Section2/>
        <Section1/>
        <Section3/>
        <Footbar/>
    </div>
)
}

export default Dash