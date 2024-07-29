import React from 'react'
import Navbar from '../components/Navbar'
import InfoSection from '../components/infoSection'
import Section1 from '../components/Section1'

const Dash = () => {
return (
    <div>
        <Navbar/>
        <div className="w-full overflow-hidden bg-white flex justify-center min-h-max pt-10">
        <InfoSection/>
        
        </div>
        <div className='w-full overflow-hidden bg-white flex justify-center min-h-max pt-10'>
        <Section1/>
        </div>
       

    </div>
)
}

export default Dash