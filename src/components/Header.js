import styled from "styled-components"
const Container=styled.div`
text-align: center;
border-bottom: solid teal 1px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
background: teal;
`
const Name=styled.h1`
padding: 1rem;
font-size: 24px;
color: white;    
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