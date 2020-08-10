import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .card-img , .card{
        border-radius:10px;
        border:none;

    }

`;
export default function ProjectCard(props) {
    return (
        <Styles>
            <Card className="bg-transparent text-white">
            <Card.Img src={props.image} alt="Card image" />
            {/* <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay> */}
            </Card>
        </Styles>
    )
}
