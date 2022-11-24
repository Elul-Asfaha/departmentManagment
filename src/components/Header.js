import styled from "styled-components"
const Container=styled.div`
text-align: center;
margin: 0;
`
const Name=styled.h1`
padding: 1rem;
font-size: 24px;
border-bottom: solid teal 1px;
    
`
const Header=()=>{
    return(
        <Container>
            <Name>
                abc department managment
            </Name>
        </Container>
    )
}
export default Header