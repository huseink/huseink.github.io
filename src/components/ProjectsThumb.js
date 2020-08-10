import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Card from './ProjectCard'

const Styles = styled.div`
    background-color:#10131A;
    padding:6em 6em;

    h2{
        color:var(--third-color);
        font-size: 2.5rem;
        font-weight:700;
        text-align:center;
    }
    p{
        color:var(--third-color);
        font-size: 1.8rem;
        text-align:center;
        margin-bottom:2em;
    }
    span{
        border-bottom:1px solid var(--secondary-color);
        border-radius:10px;
        padding:0 0.2em;
    }
    .card-img{
        border:1px solid #3d3d3d;
    }
   
    @media (max-width: 991px) {
        padding:5em 2em;
        
        .card-img{
            margin-bottom:2em;
        }
        p{
            margin-bottom:3em;
        }
    }
`;

export default function ProjectsThumb({projects}) {
    const projectThumbnail = projects.map((project)=>{
        return <Col key={project.id} sm={12} md={6} lg={4}>
                    <Card image={project.thumbnail} />
                </Col>
    })

    return (
        <Styles>
                <h2>My Recent Work</h2>
                <p>Want to see <span >more?</span></p>
                <Row>
                    {projectThumbnail}
                </Row>
        </Styles>

    )
}
