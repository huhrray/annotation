import { NextComponentType, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import React, { Component, ReactElement } from 'react'
import Footer from './Footer'
import Meta from './Meta'
import Navbar from './Navbar'
interface layoutProps {
    children: ReactElement
}
const Layout = ({ children }: layoutProps) => {
    const path = useRouter().pathname
    const noneNavLists = ['/signin', '/signup']
    return (
        <>
            <Meta />
            {!noneNavLists.includes(path) && <Navbar path={path} />}
            {children}
            <Footer />
        </>
    )
}

export default Layout