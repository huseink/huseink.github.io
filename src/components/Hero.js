import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import styled from 'styled-components'
import homeVector from '../assets/home_vector.svg'
import background from '../assets/BG.jpg'

const Styles = styled.div`
    display:flex;
    border-bottom:1px solid var(--primary-color);
    background-image: url(${background});
    align-items:center;
    height:100vh;

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
            width:18em;
        }
        .hero-desc{
            color:var(--third-color);
            font-size:1.6rem;
            padding:0 0.5em;
        }
    }
`;

export default function Hero() {
    return (
        <Styles>
            <Container>
                <Row >
                    <Col className="column" sm={12} md={12} lg={6}>
                        <img className="hero-svg" src={homeVector} alt="Developer SVG" />
                    </Col>
                    <Col className="column" sm={12} md={12} lg={6}>
                        <p className="hero-desc">
                            Lorem ipsum dolor sit amet,
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
