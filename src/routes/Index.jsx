import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AppNavbar from '../layout/AppNavbar'
import ViewAllMyBlogs from '../pages/ViewAllMyBlogs'
import SingleBlogView from '../pages/SingleBlogView'

const Index = () => {
  return (
    <BrowserRouter>
    <AppNavbar/>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/singleView' element={<SingleBlogView/>}/>
            <Route path='viewallblogs' element={<ViewAllMyBlogs/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index