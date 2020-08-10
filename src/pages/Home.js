import React, {useState} from 'react'
import ProjectsThumb from '../components/ProjectsThumb'
import Hero from '../components/Hero'
import styled from 'styled-components'
import nobak from '../assets/workThumbnails/nobak-web.jpg'
import nola from '../assets/workThumbnails/nola-swifty.jpg'

const Styles = styled.div`
  
`;
export default function Home() {
    const [projects,setProjects] = useState(
        [
            {
                id:1,
                thumbnail: nobak,
                description: 'Nobak Entertainment Website'
            },
            {
                id:2,
                thumbnail:nola,
                description:'Nola Swifty game'
            },
            {
                id:3,
                thumbnail:nobak,
                description:'Nobak Site'
            }
        ]
    );
    
    
    return (
        <Styles>
            <Hero />
            <ProjectsThumb projects={projects}/>
        </Styles>
    )
}
