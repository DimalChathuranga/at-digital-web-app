
import './Content.css'

import React from 'react'

import web_mobile_section_image from '../../assets/web-mobile-section-img.png'
import digital_section_image from '../../assets/digital-section-img.png'
import Button from '../learn-more-button/Button'
import Question from '../Question-palete/Question'
import main_banner from '../../assets/main-banner.jpg'

const Content = () => {

    return (
        <>

            <section className='main-banner-section'>
                <img src={main_banner}></img>
                <div className='main-banner-over-div'>
                    <p>We crush your <br />competitors, goals, and <br />sales records - without<br />the B.S.</p>
                    <Button label="get free consultation" />
                </div>
            </section>

            <section className='web-mobile-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12 web-mobile-col-12 justify-content-between'>
                            <div className='col-xl-6'>
                                <img src={web_mobile_section_image} className='image' />
                            </div>
                            <div className='col-xl-6 web-mobile-section-right'>
                                <h3 className='accent-header'>Web & Mobile App Development</h3>
                                <p className='description'>Your web and mobile Apps are pieces of the puzzle to grow your
                                    business. We use frameworks which tailor content and engagement
                                    methods to respond to different intents shown by your potential
                                    customers who interact with your business online.</p>
                                <Button label="Learn More" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='digital-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12 digital-col-12'>
                            <div className='col-xl-6 mobile-img-div'>
                                <img src={digital_section_image} />
                            </div>
                            <div className='col-xl-6 web-mobile-section-right'>
                                <h3 className='accent-header'>Digital Strategy Consulting</h3>
                                <p className='description'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                                <Button label="Learn More" />
                            </div>
                            <div className='col-xl-6 d-flex justify-content-end web-img-div'>
                                <img src={digital_section_image} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='question-section'>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        <div className='questions'>
                            <h3 className='accent-header'>Frequently asked questions</h3>
                            <Question question='Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?' answer='Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.' />
                            <Question question='Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?' />
                            <Question question='Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?' />
                            {/* <div className='question-div first-question-div'>
                                <div className='d-flex justify-content-between'>
                                    <h6>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h6>
                                    <svg width="15" height="15" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1H15" stroke="#6B3CC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                            </div>
                            
                            <div className='d-flex question-div justify-content-between'>
                                <h6>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</h6>
                                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 8H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                           
                            <div className='d-flex question-div justify-content-between'>
                                <h6>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</h6>
                                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 1V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 8H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Content;