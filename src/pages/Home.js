import React from 'react'
import RecentWork from '../components/RecentWork'
import Hero from '../components/Hero'
import styled from 'styled-components'

const Styles = styled.div`
  
`;
export default function Home() {
    return (
        <Styles>
            <Hero />
            <RecentWork />
        </Styles>
    )
}
