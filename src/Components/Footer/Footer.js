import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12 footer-col-12'>
                            <div className='col-xl-7'>
                                <img src={logo} className='logo'></img>
                                <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                            </div>
                            <div className='col-xl-5 service-technology-div'>
                                <div className='col-xl-6 d-flex flex-column technology-div justify-content-end'>
                                    <h6>Our Technologies</h6>
                                    <a href=''>ReactJS</a>
                                    <a href=''>Gatsby</a>
                                    <a href=''>NextJS</a>
                                    <a href=''>NodeJS</a>
                                </div>
                                <div className='col-xl-6 d-flex  justify-content-end flex-column services-div'>
                                    <h6>Our Services</h6>
                                    <a href=''>Social media Marketing</a>
                                    <a href=''>Web & Mobile App <br/>Development</a>
                                    <a href=''>Data & Analytics</a>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='line'></div>
                        </div>
                        <div className='d-flex justify-content-center footer-bottom'>
                            <a href=''>Privacy Policy</a>
                            <a href=''>Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;