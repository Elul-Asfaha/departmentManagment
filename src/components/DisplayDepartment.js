import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Mock_Data from '../data/MOCK_DATA.json'
import { useState } from "react";
import { Divider, List, ListItem, ListItemText } from "@mui/material";



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
margin-top: 3rem;
border: solid teal 2px;
width: 60%;
max-width: 400px;
padding: 0;
align-items: center;
border-radius: 10px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`
const ShowButton=styled.button`
flex: 2;
padding: 3px 0;
`
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
const style1={
    flex: '2',
}
const style2={
    flex: '2',
    textAlign: 'center'
}

const DisplayDepartment=()=>{

const [searchQuery,setSearchQuery]=useState()
const [result,setResult]=useState([])
const [managingDepartmentToggle,SetManagingDepartmentToggle]=useState(false)
const [managesToggle,setManagesToggle]=useState(false)

const handleChange=(e)=>{
    e.preventDefault();
    setSearchQuery((prev)=>prev=e.target.value);
}

const handleSearch=(e)=>{
    e.preventDefault()
    setResult((prev)=>prev=Mock_Data.filter(items=>items.department_name.toLowerCase()===searchQuery));
    console.log(result)
}


const handleManagingToggle=(num)=>{
    (num===1)?setManagesToggle(!managesToggle):SetManagingDepartmentToggle(!managingDepartmentToggle);
}

const displayResult=result.map(items=>
    <DepartmentDetails key={items.id}>
        <List sx={style} component="nav" aria-label="mailbox folders" >
            <ListItem >
                <ListItemText style={style1} primary="Department Name:" />
                <ListItemText style={style2} primary={items.department_name} />
            </ListItem>
            <Divider />
            <ListItem divider>
                <ListItemText style={style1} primary="Description:" />
                <ListItemText style={style2} primary={items.description} />
            </ListItem>
            <ListItem >
                <ListItemText style={style1} primary="Manages:" />
                {(managesToggle)?<ListItemText onClick={()=>handleManagingToggle(1)} style={style2} primary={items.manages} />:<ShowButton onClick={()=>handleManagingToggle(1)}>Show</ShowButton>}
            </ListItem>
            <Divider light />
            <ListItem>
                <ListItemText style={style1} primary="Managing Department:" />
                {(managingDepartmentToggle)?<ListItemText onClick={()=>handleManagingToggle(2)} style={style2} primary={items.managing_department} />:<ShowButton onClick={()=>handleManagingToggle(2)}>Show</ShowButton>}
            </ListItem>
        </List>
    </DepartmentDetails>
    )


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

                    {result && displayResult}

        </Container>
    )
}
export default DisplayDepartment