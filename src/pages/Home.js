import React from 'react'
import homeVector from '../assets/home_vector.svg'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Styles = styled.div`
    display:flex;
    height:100vh;
   
    align-items:center;
    
    .column{
        align-self:center;
    }
    
    .hero-svg{
        margin:0 auto;
        width:25em;
    }
    .hero-desc{
        color:var(--third-color);
        font-size:1.8rem;
        padding:0 2em;
    }

    @media (max-width: 991px) {
        .column{
            text-align:center;
        }
        .hero-svg{
            margin:2em auto;
            width:23em;
        }
        
    }

`;

export default function Home() {
    return (
        <Styles>
                <Container>
                    <Row >
                        <Col className="column" sm={12} md={12} lg={6}>
                            <img className="hero-svg" src={homeVector} alt="Developer SVG" />
                        </Col>
                        <Col className="column" sm={12} md={12} lg={6}>
                            <p className="hero-desc">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Class aptent taciti sociosqu
                            ad litora torquent per.
                            </p> 
                        </Col>
                    </Row>
                </Container>
        </Styles>
    )
}
