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
max-width: 600px;
padding: 1rem 1rem;
border: solid teal 2px;
display: flex;
flex-direction: column;
border-radius: 5px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const Label=styled.label`
margin: 0.5rem 0 0.2rem 0;
font-weight: bold;

`
const Input=styled.input`
outline: none;
padding: 0.5rem;
`
const Select=styled.select`
padding: 3px;
font-size: 15px;
font-weight: 600;
outline: none;
`
const Desc=styled.textarea`
width: 100%;
resize: none;
outline: none;
height: 80px;
padding: 5px;

`
const Add=styled.button`
margin: 1rem auto 0 auto;
width: 50%;
font-size: 18px;
max-width: 200px;`
const AddDept=()=>{

const [NewDept,setNewDept]=useState({

    Name: "",
    ReportsTo: "",
    Description: ""
})

const handleInput=(e)=>{
   const {name,value}=e.target;
    setNewDept({...NewDept,
            [name]:value
        })
}

const handleSubmit=(e)=>{
    e.preventDefault()
}


    return(


        <Container>
            <Title>
                Add a New Department
            </Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="Name">Name of the Department:</Label>
                <Input type="text" name="Name" onChange={handleInput} required/>
                
                <Label htmlFor="ReportsTo">Reports To:</Label>
                <Select onChange={handleInput} name="ReportsTo" required>
                    <option></option>
                    {Mock_Data.map(items=><option value={items.id} key={items.id}>{items.department_name}</option>
                    )}
                </Select>
                <Label htmlFor="Description">Description:</Label>
                <Desc type="textarea" name="Description" onChange={handleInput} required/>
                <Add>Add</Add>
            </Form>
        </Container>
    )
}

export default AddDept