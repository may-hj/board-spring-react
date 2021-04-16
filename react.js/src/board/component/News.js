import React from 'react'
import Navbar from 'common/component/Navbar'
import ArticleList from 'article/component/ArticleList'
import Footer from 'common/component/Footer'

const News = () => {
    return(<>
        <Navbar/>
        <ArticleList/>
        <Footer/>
    </>)
}

export default News