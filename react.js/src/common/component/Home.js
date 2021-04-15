import React from 'react'
import '../style/Home.css'
import '../style/Common.css'

import Navbar from './Navbar'
import Footer from './Footer'
import BirdPicture from './BirdPicture'
import WhoWhatAmI from './WhoWhatAmI'

const Home = () => {
    return(<>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <Navbar/>
        <WhoWhatAmI/>
        <BirdPicture/>
        <Footer/>
    </>)
} 

export default Home;
