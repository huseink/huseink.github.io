import React from 'react'
import RecentProjects from '../components/RecentProjects'
import Hero from '../components/Hero'
import styled from 'styled-components'
import nobak from '../assets/workThumbnails/nobak-web.jpg'
import nola from '../assets/workThumbnails/nola-swifty.jpg'

const Styles = styled.div`
  
`;
export default function Home() {
    const projects = [
        {
            id: 1,
            thumbnail: nobak,
            description: 'Nobak Entertainment Website'
        },
        {
            id: 2,
            thumbnail: nola,
            description: 'Nola Swifty game'
        },
        {
            id: 3,
            thumbnail: nobak,
            description: 'Nobak Site'
        }
        
    ]


    return (
        <Styles>
            <Hero />
            <RecentProjects projects={projects} />
        </Styles>
    )
}
