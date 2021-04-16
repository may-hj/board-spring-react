import React from 'react'
import 'common/style/Home.css'
import 'common/style/Common.css'

import { Navbar, WhoWhatAmI, BirdPicture, Footer } from 'common/index'

const Home = () => {
    return(<>
        <Navbar/>
        <WhoWhatAmI/>
        <BirdPicture/>
        <Footer/>
    </>)
} 

export default Home;
