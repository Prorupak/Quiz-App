import React from 'react';
import styled from 'styled-components';
// import Header from '../components/shared/Header';

const Grid = styled.div`
    display: grid;
    grid-template:
    [row-1-start] min-content 
    [row-1-end row-2-start] 1fr
    [row-end] / max-content 1fr;
   `;

const Navbar = styled.div.attrs({
    className: 'h-60px px-20% bg-gray-400 text-white text-center'
})`
  grid-area: 1 / 2 / span 1 / 2;
`

const Sidebar = styled.div.attrs({
    className: ' bg-gray-300'
})`
 grid-area: row-1-start / 1 / row-end / 2;
  height: 100vh;
  width: 200px;
`

const Content = styled.div.attrs({
    className: ' bg-gray-100'
})`
  grid-area: row-2-start / 2 / row-end / 3;
  color: #000;
`

interface Props {
    children: React.ReactNode;
}



const Layout: React.FC<Props> = ({ children, ...rest }) => {
    return (
        <>
            <Grid {...rest} >
                <Navbar> Header </Navbar>
                <Sidebar>sidebar</Sidebar>
                <Content>main</Content>
            </Grid>
        </>
    )
};

export default Layout;
