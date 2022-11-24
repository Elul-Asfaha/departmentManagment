import styled from "styled-components";
import Nav from "../components/Nav";
import Header from '../components/Header'
import AddDept from "../components/AddDept";
import UpdateDepartment from "../components/UpdateDepartment";
import DisplayDepartment from "../components/DisplayDepartment";
import DisplayAll from "../components/DisplayAll";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const Container=styled.div`
width: 100vw;
height: 100%;
`
const ContentWrapper=styled.div`
display: flex;
flex-direction: column;
min-height: calc(100vh - 63px)

`

const Home=()=>{
    return(
        <Container>
            <Header/>   
            <ContentWrapper> 
                <BrowserRouter>
                    <Nav/>
                    <Routes>
                        <Route path="/addDepartment" element={<AddDept/>} />
                        <Route path="/updateDepartment" element={<UpdateDepartment/>} />
                        <Route path="/displayDepartment" element={<DisplayDepartment/>} />
                        <Route path="/" element={<DisplayAll/>} />
                    </Routes>
                </BrowserRouter>      
            </ContentWrapper>
        </Container>
    )
}
export default Home