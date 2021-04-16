import React from 'react'
import { Navbar,Footer } from 'common/index'
import { ArticleList }from 'article/index'

const News = () => {
    return(<>
        <Navbar/>
        <ArticleList/>
        <Footer/>
    </>)
}

export default News