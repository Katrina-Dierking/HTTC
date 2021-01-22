import React from 'react'
import hero from '../../images/hero.png'
import top from '../../images/top.png'
import styled from 'styled-components'
import {useMediaQuery} from 'react-responsive'

export default function Hero () {

    const isPhone = useMediaQuery({query: '(max-width: 500px)'})
    const isTablet = useMediaQuery({query:'(min-width: 501px)'})
    // const isBetween = useMediaQuery({query:'(min-width: 501px)' && '(max-width: 800px)'})
    // const isDesktop = useMediaQuery({query: '(min-width:801px)'})


    return (
        <>

        {isPhone &&
        <HeroWrapper>
            <img src = {hero} className = "hero" alt = "hero section with call to action" />
            <img src = {top} className = "top" alt = "Her Time to Code Title and Subtitle" />
   
        </HeroWrapper>
        }

        {isTablet &&
        <HeroWrapper2>
            <img src = {hero} className = "hero" alt = "hero section with call to action" />
            <img src = {top} className = "top" alt = "Her Time to Code Title and Subtitle" />
        
        </HeroWrapper2>
        }

    
        </>
    )
}

const HeroWrapper = styled.div`
    display:flex; 
    flex-direction: column;
    position:fixed;

    .hero {
        max-width: 100%;
        padding-bottom: 2%;
    }

    .top {
        max-width:50%;
        margin-top:-30%;
        margin-left: 3%;
        // border: 1px solid red;
    }

`

// const HeroText = styled.div `
//     margin:-57% 20% 0% 2%;
//     padding: 0 2%;
//     border-top: 4px solid #0b667b;
//     border-left:4px solid #0b667b;
//     border-right: 2px solid #353535;
//     border-bottom: 2px solid #353535;
//     // padding: 10px;
//     // background: #f0f0f0;

// `


const HeroWrapper2 = styled.div`
display:flex; 
flex-direction: column;
`

// const HeroText2 = styled.div `
// margin:-53% 30% 0% 2%;
// padding: 0 2%;
// border-top: 4px solid #0b667b;
// border-left:4px solid #0b667b;
// border-right: 2px solid #353535;
// border-bottom: 2px solid #353535;
// padding: 10px;
// // background: #f0f0f0;

