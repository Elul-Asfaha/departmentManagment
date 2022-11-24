import { useState } from "react";
import styled from "styled-components";
import Mock_Data from '../data/MOCK_DATA.json'
const Container=styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
const Title=styled.h1`
font-size: 20px;
text-align: center;
margin: 1rem;
`

const Form=styled.form`
width: 85%;
padding: 1rem 1rem;
border: solid black 1px;
display: flex;
flex-direction: column;
`
const Label=styled.label`
margin: 0.5rem 0 0.2rem 0;

`
const Input=styled.input`
outline: none;
padding: 0.5rem;
`
const Desc=styled.textarea`
width: 100%;
resize: none;
outline: none;
height: 80px;

`
const Update=styled.button`
margin: 1rem auto 0 auto;
width: 50%;
font-size: 18px`

const Select=styled.select`
padding: 3px;
font-size: 15px;
font-weight: 600;
outline: none;
`

const SelectorWrapper=styled.div`
margin: 1.5rem;   
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 0.5rem;
`



const UpdateDepartment=()=>{

const [Dept,setDept]=useState({

    Name: "",
    ReportsTo: "",
    Description: ""
})

const handleInput=(e)=>{
   const {name,value}=e.target;
    setDept({...Dept,
            [name]:value
        })
}

const handleSubmit=(e)=>{
    e.preventDefault()
}

const [selectedDepartment,setSelectedDepartment]=useState("")
const handleSelectDeptEdit=(e)=>{
setSelectedDepartment(e.target.value)
console.log(selectedDepartment)
}


console.log(Mock_Data)



    return(
        <Container>
            <Title>
                Update Department
            </Title>

            <SelectorWrapper>
                <label htmlFor="selectEdit">Select the Department you want to Update:</label>
                <Select name="selectEdit" onChange={handleSelectDeptEdit}>
                    <option></option>
                    {Mock_Data.map(items=><option value={items.id} key={items.id}>{items.department_name}</option>)}
                </Select>
            </SelectorWrapper>





            <Form onSubmit={handleSubmit}>
                <Label htmlFor="Name">Name of the Department:</Label>
                <Input type="text" name="Name" onChange={handleInput} required/>
                
                <Label htmlFor="ReportsTo">Reports To:</Label>
                <Select onChange={handleInput} name="ReportsTo" required>
                    <option></option>
                    {Mock_Data.map(items=><option value={items.id} key={items.id}>{items.department_name}</option>
                    )}
                </Select>
                <Label htmlFor="Description">Description: </Label>
                <Desc type="textarea" name="Description" onChange={handleInput} required/>
                <Update>Update</Update>
            </Form>
        </Container>
    )
}

export default UpdateDepartment