import React from 'react'
import styled from 'styled-components'
import { Container, Col, Row } from 'react-bootstrap'
import { faGithub, faLinkedin, faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterStyles = styled.footer`
    padding:2em;
    border-top:1px solid var(--primary-color);
    background-color: #171B24;
    .social-link{
        color:var(--third-color);
        font-size:2.7em;
        border-radius:20px;
        padding:0.2em;
        margin-right:0.5em;
    }
    .social-link:hover{
        color: var(--primary-color);
    }
    .col{
        text-align:center;
    }
    p{
        margin:0;
    }

    .created-by{
        color:var(--third-color);
        margin-top:1.5em;
        font-size:1.1em;
        font-weight:500;
    }
    .year{
        color:var(--third-color);
        font-size:1.1em;
    }

    a{
        text-decoration:none;
        color:#ffffff;
    }

    .code,  .name{
        color:var(--primary-color);
    }
`;

export default function Footer() {
    return (
        <FooterStyles>
            <Container>
                <Row>
                    <Col>
                        <div className="social-icons">
                            <a href="https://github.com/huseink" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="social-link" /></a>
                            <a href="https://www.linkedin.com/in/h%C3%BCsein-kantarci-44861b1a2" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="social-link" /></a>
                            <a href="https://twitter.com/huseinkntrc" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="social-link" /></a>
                            <a href="https://www.instagram.com/huseinkntrc/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="social-link" /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="created-by"><span className="code">&lt; &#47; &gt;</span> with <span className="heart">&#10084;</span> By <a className="husein-k" href="https://www.huseink.tech" target="_blank" rel="noopener noreferrer"> <span className="name">Husein Kantarci</span></a></p>
                        <p className="year">&copy; {new Date().getFullYear()}</p>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </FooterStyles>
    )
}
