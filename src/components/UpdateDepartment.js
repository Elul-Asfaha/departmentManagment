import { useContext,useState } from "react";
import {ProvideData} from '../pages/Home.js'
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
const Container=styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
const Title=styled.h1`
font-size: 20px;
text-align: center;
margin: 1.5rem;
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
margin: 0 0 1.5rem 0;   
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
width: 60%;
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

const CloseIconStyle={
    position: "absolute",
    right: "5",
    top: "5"

}



const UpdateDepartment=(props)=>{

    const provided=useContext(ProvideData)
    const [UpdatedDept,setUpdatedDept]=useState({
  
        id: '',
        department_name: "",
        description: "",
        manages: "n/a",
        managing_department: "n/a"

})
const [selectedDepartment,setSelectedDepartment]=useState("")


const handleInput=(e)=>{
    const {name,value,type}=e.target;
    (type!=="select") && setUpdatedDept({...UpdatedDept,
        [name]:value
    })
    setUpdatedDept(prev=>({
    ...prev,
    id: Math.floor(Math.random() * 100)

}));
(typeof(value)==='number') && setUpdatedDept(
    {   
        [name]: value
    }
)
}


const handleSubmit=(e)=>{
    e.preventDefault();
    provided.setData(provided.data.filter(items=>items.id!==selectedDepartment))
    
    provided.handleUpdateToggler();

    provided.setData(prev=>[...prev,
        UpdatedDept
    ])
    setUpdatedDept(
        {
            id: '',
            department_name: "",
            description: "",
            manages: "n/a",
            managing_department: "n/a"
        }
    )
    
}


const handleSelectDeptEdit=(e)=>{
setSelectedDepartment(parseInt(e.target.value))
}


    return(
        <Container>
            <Title>
                Update Department
            </Title>

            <SelectorWrapper>
                <label htmlFor="selectEdit">Select the Department you want to Update:</label>
                <Select name="selectEdit" onChange={handleSelectDeptEdit} required>
                    <option></option>
                    {provided.data.map(items=><option value={items.id} key={items.id}>{items.department_name}</option>)}
                </Select>
            </SelectorWrapper>





            <Form onSubmit={handleSubmit}>
                 <Label htmlFor="department_name">Name of the Department:</Label>
                    <Input type="text" name="department_name" onChange={handleInput} value={UpdatedDept.department_name} required/>
                    
                    <Label htmlFor="managing_department">Reports To:</Label>
                    <Select onChange={handleInput} name="managing_department" required>
                        <option value={UpdatedDept.managing_department} >N/A</option>
                        {provided.data.map(items=><option value={items.managing_department} key={items.id}>{items.department_name}</option>
                        )}
                    </Select>
                    <Label htmlFor="manages">Manages</Label>
                    <Select onChange={handleInput} name="manages"  required>
                        <option value={UpdatedDept.manages} >N/A</option>
                        {provided.data.map(items=><option value={items.manages} key={items.id}>{items.manages}</option>
                        )}
                    </Select>
                    <Label htmlFor="description">Description:</Label>
                    <Desc type="textarea" name="description" onChange={handleInput} value={UpdatedDept.description} required/>
                <Update>Update</Update>
            </Form>
            
            {
                    provided.updateToggle && 
                    <MessageContainer>
                        <MessageWrapper>
                                <CloseIcon onClick={props.updateToggleHandler} style={CloseIconStyle} />
                                <p>Department Sucessfully Updated</p>
                        </MessageWrapper>
                    </MessageContainer>
                }

        </Container>
    )
}

export default UpdateDepartment