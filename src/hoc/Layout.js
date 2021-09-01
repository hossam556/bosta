import React from 'react'
import './Layout.scss'
import Nav from '../components/Layout/Nav/Nav'
import Footer from '../components/Layout/Footer/Footer'

const Layout = (props) => {
    return (
        <div className='layout'>
            <nav><Nav/></nav>
            <main>{props.children}</main>
            <footer><Footer/></footer>
        </div>
    )
}

export default Layout
