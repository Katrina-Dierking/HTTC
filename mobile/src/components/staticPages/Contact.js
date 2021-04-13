import React from 'react'
import Top from '../main/Top'
import FooterNav from '../main/FooterNav'
import styled from 'styled-components'

export default function Contact () {
    return (
        <>
        <Top />
        <BodyWrap>
        <ContactWrap>
            <h3 className = "contactH3">CONTACT</h3>
            <p> I'd love to hear from you.</p>
        </ContactWrap>

        <IconWrap>
        <br></br>
    
            <div data-aos="flip-right" data-aos-delay= "1000">
                <a href = "https://github.com/Katrina-Dierking">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/github-space1.png" 
                        alt="github icon" 
                        className = "icon"
                    />
                </a>
                <a href = "https://www.linkedin.com/in/kalynn-dier/">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/linkedin-space2.png" 
                        alt="linkedIn icon"
                        className = "icon"
                        />
                </a>
                <a href = "mailto:katrina@hertimetocode.com">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/email-space3.png" 
                        alt="email icon"
                        className = "icon"
                        />
                </a>
                <a href = "https://katrina-dierking.netlify.app/">
                    <img src="https://hertimetocode.com/wp-content/uploads/2021/04/wordpress-space4.png" 
                        alt="wordpress icon" 
                        className = "icon"
                        />
                </a>
            </div>
        </IconWrap>
        </BodyWrap>
        <FooterNav />

        </>
    )
}

const BodyWrap = styled.section`
    max-width: 100vw;
`

const ContactWrap = styled.div`
    border: 1px solid black;
    padding: 3%;
    max-width: 30vw;
    margin: 2vh 0 2vh 30vw;
`

const IconWrap = styled.div`
    max-width: 50vw;
    margin: 2vh 0 2vh 30vw;

    .icon {
        max-width: 10vw;
    }
`