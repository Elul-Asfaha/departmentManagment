import styled from "styled-components"
import {Link} from 'react-router-dom'
import {desktop} from '../Responsive'

const Container=styled.div`
min-height: 100%;
width: 100vw;
${desktop({
    minHeight: '100vh',
    borderRight: 'solid teal 3px',
    width: 'auto',
    textAlign: 'center'
})}
`

const linkStyle={
    fontWeight: 550,
    }
    
const List=styled.ul`
width: 100vw;
list-style: none;
display: flex;

${desktop({
    width: 'fit-content',
    flexDirection: 'column',
    height: '100vh',
})}
`
const ListItems=styled.li`
flex: 1;
padding: 0.5rem;
cursor: pointer;
border-bottom: solid teal 2px;
display: flex;
justify-content: center;
align-items: center;

${desktop({
    padding: '0.5rem 0',
    height: 'fit-content',
    flex: '0',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:"center",

})}
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