import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`

    padding:6em 10em;

    h2{
        color:var(--third-color);
        font-size: 3rem;
        font-weight:700;
        text-align:center;
    }
    p{
        color:var(--third-color);
        font-size: 2rem;
        text-align:center;
        margin-bottom:4em;
    }
    span{
        border-bottom:1px solid var(--secondary-color);
        border-radius:10px;
        padding:0 0.2em;
    }
    .col{
        color:var(--third-color);
    }

`;


export default function RecentWork() {
    return (
        <Styles>
            <Container>
                <h2>My Recent Work</h2>
                <p>Want to see <span >more?</span></p>
                <Row>
                    <Col>TEST</Col>
                    <Col>Test </Col>
                    <Col>Test</Col>
                </Row>
            </Container>
        </Styles>

    )
}
