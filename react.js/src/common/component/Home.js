import React from 'react'
import '../style/Home.css'
import '../style/Common.css'

import Navbar from './Navbar'
import WhoWhatAmI from './WhoWhatAmI'
import BirdPicture from './BirdPicture'
import Footer from './Footer'

const Home = () => {
    return(<>
        <Navbar/>
        <WhoWhatAmI/>
        <BirdPicture/>
        <Footer/>
    </>)
} 

export default Home;
