import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Mock_Data from '../data/MOCK_DATA.json'
import { useState } from "react";
const Container=styled.div`
width: 100%;
padding: 0.5rem;
display: flex;
align-items: center;
flex-direction: column;
`

const Title=styled.h1`
font-size: 20px;
text-align: center;
margin: 1rem;
`
const Form=styled.form``

const SearchWrapper=styled.div`
display: flex;
border: solid 1px teal;
`

const Search=styled.input`
outline: none;
padding: 3px;
font-size: 18px;
border: none;
padding: 5px;

`

const SearchBtn=styled.button`
background-color: white;
border: none;
display: flex;
align-items: center;
justify-content: center;
padding: 0 3px 0 3px;
padding: 5px;
cursor: pointer;
`


const DepartmentDetails=styled.div`
display: flex;
flex-direction: column;
`
const DisplayDepartment=()=>{





const [searchQuery,setSearchQuery]=useState()
const [result,setResult]=useState([])


const handleChange=(e)=>{
setSearchQuery((prev)=>prev=e.target.value)
}

const handleSearch=(e)=>{
    setResult((prev)=>prev=Mock_Data.filter(items=>items.department_name===searchQuery));
    alert(result)
    e.preventDefault()
}


    return(
        <Container>
                <Title>
                   Display Departments
                </Title>
                <Form onSubmit={handleSearch}>
                    <SearchWrapper>
                        <Search type="text" placeholder="Search For department" onChange={handleChange}></Search>
                        <SearchBtn><SearchIcon/></SearchBtn>
                    </SearchWrapper>
                </Form>

                <DepartmentDetails>
                    <p>Department Name: CEO</p>
                    <p>Description: Chief Executive Officer</p>
                </DepartmentDetails>

        </Container>
    )
}
export default DisplayDepartment