import React from 'react'
import HeroSm from '../../components/HeroSm/herosm'
import Watermark from '../../components/Watermark/watermark'
import './contact.css'

export default function Contact() {
    return (
        <>
            <HeroSm header="Contact" />

            <section className="row justify-content-center">
                <section className="col-9 thankyou">
                    <h2>Thank You</h2>
                    <p>Thank you for visiting my portfolio!<br />Please feel free to send me an email and get in touch. <br /> You can also find links to my social media. I'd love to connect. <br /> Stay safe and let's create something together!</p>
                    <a className="email-link" href="mailto:Mike.L.Shenk@gmail.com"><strong>Mike.L.Shenk@gmail.com</strong></a>
                    <br />
                    <br />
                    <a href="https://www.linkedin.com/in/michaelshenk415/">
                        <img className="sm-logos" src="./images/linkedinlogo.png" alt="linkedinlogo" target="_blank" />
                    </a>
                    <a href="https://github.com/mlshenk">
                        <img className="sm-logos" src="./images/github.png" alt="githublogo" target="_blank" />
                    </a>
                </section>
            </section>
            <Watermark/>
        </>
    )
}
