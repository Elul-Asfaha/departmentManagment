import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
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
padding: 1rem;
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
const Desc=styled.textarea`
width: 100%;
margin: 0 auto;
resize: none;
outline: none;
height: 80px;
padding: 5px 0;
`
const Update=styled.button`
margin: 1rem auto 0 auto;
width: 50%;
font-size: 18px;
max-width: 200px`

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

const MessageContainer=styled.div`
position: absolute;
right: 50;
background: white;
z-index: 1;
opacity: 0.9;
border: solid teal 1px;
border-radius: 10px;    
width: 40%;
max-width: 400px;
height: 180px;

`
const MessageWrapper=styled.div`
height: 100%;
width: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;

`



const UpdateDepartment=()=>{

    const CloseIconStyle={
        position: "absolute",
        right: "5",
        top: "5"
    
    }
    

const [Dept,setDept]=useState({

    Name: "",
    ReportsTo: "",
    Description: ""
})
const [toggle,setToggle]=useState(false)

const handleInput=(e)=>{
   const {name,value}=e.target;
    setDept({...Dept,
            [name]:value
        })
}

const handleSubmit=(e)=>{
    e.preventDefault()
    handleToggle()
}

const [selectedDepartment,setSelectedDepartment]=useState("")
const handleSelectDeptEdit=(e)=>{
setSelectedDepartment(e.target.value)
console.log(selectedDepartment)
}



const handleToggle=()=>{
    setToggle(!toggle)
}


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
            
            {
                    toggle && 
                    <MessageContainer>
                        <MessageWrapper>
                                <CloseIcon onClick={handleToggle} style={CloseIconStyle} />
                                <p>Text Goes Here</p>
                        </MessageWrapper>
                    </MessageContainer>
                }

        </Container>
    )
}

export default UpdateDepartment