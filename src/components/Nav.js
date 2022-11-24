import styled from "styled-components"
import {Link} from 'react-router-dom'


const linkStyle={
fontWeight: 550,
}

const Container=styled.div`
min-height: 100%;
width: 100vw;
`
const List=styled.ul`
width: 100vw;
list-style: none;
display: flex;
`
const ListItems=styled.li`
flex: 1;
padding: 0.5rem;
cursor: pointer;
border-bottom: solid teal 1px;
display: flex;
justify-content: center;
align-items: center;
`
const Nav=()=>{
    return(
        <Container>
            <List>
                <ListItems><Link style={linkStyle} to="/addDepartment">Add Department</Link></ListItems>
                <ListItems><Link style={linkStyle} to="/updateDepartment">Update Department</Link></ListItems>
                <ListItems><Link style={linkStyle} to="/displayDepartment">Display Department</Link></ListItems>
                <ListItems><Link style={linkStyle} to="/">Display All</Link></ListItems>
            </List>
        </Container>
    )
}
export default Nav