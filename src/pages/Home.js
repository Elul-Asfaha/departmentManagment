import styled from "styled-components";
import Nav from "../components/Nav";
import Header from '../components/Header'
import AddDept from "../components/AddDept";
import UpdateDepartment from "../components/UpdateDepartment";
import DisplayDepartment from "../components/DisplayDepartment";
import DisplayAll from "../components/DisplayAll";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {desktop} from '../Responsive.js'
import { useState,createContext } from 'react'
import Mock_Data from '../data/MOCK_DATA.json'
export const ProvideData=createContext()





const Container=styled.div`
width: 100%;
height: 100vh;
`
const ContentWrapper=styled.div`
display: flex;
flex-direction: column;
min-height: calc(100vh - 63px);

${desktop({
    flexDirection: "row",

})}

`

const Home=()=>{


    
    const [data,setData]=useState(Mock_Data)
    const [addToggle,setAddToggle]=useState(false)
    const [updateToggle,setUpdateToggle]=useState(false)

    console.log(data)


const handleAddToggler=()=>{
    setAddToggle(!addToggle)
}

const handleUpdateToggler=(e)=>{
    setUpdateToggle(!updateToggle)
}

    return(
        <ProvideData.Provider value={{data,addToggle,setData,updateToggle,handleAddToggler,handleUpdateToggler}}>
            <Container> 
                <Header/>   
                <ContentWrapper> 
                    <BrowserRouter>
                        <Nav/>
                        <Routes>
                            <Route path="/addDepartment" element={<AddDept addToggleHandler={()=>handleAddToggler()}  />} />
                            <Route path="/updateDepartment" element={<UpdateDepartment updateToggleHandler={()=>handleUpdateToggler()}/> }/>
                            <Route path="/displayDepartment" element={<DisplayDepartment/>} />
                            <Route path="/" element={<DisplayAll/>} />
                        </Routes>
                    </BrowserRouter>      
                </ContentWrapper>
            </Container>
        </ProvideData.Provider>
    )
}
export default Home