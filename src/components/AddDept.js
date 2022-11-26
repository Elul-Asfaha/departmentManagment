import { useContext,useState } from "react";
import {ProvideData} from '../pages/Home.js'
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
position: relative;
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
margin: 0 auto;
resize: none;
outline: none;
height: 80px;
padding: 5px 0;

`
const Add=styled.button`
margin: 1rem auto 0 auto;
width: 50%;
font-size: 18px;
max-width: 200px;
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

const AddDept=(props)=>{
const provided=useContext(ProvideData)

const CloseIconStyle={
    position: "absolute",
    right: "5",
    top: "5"

}


const [NewDept,setNewDept]=useState({
    id: '',
    department_name: "",
    description: "",
    manages: "n/a",
    managing_department: "n/a"
})

const handleInput=(e)=>{
const {name,value}=e.target;
setNewDept({...NewDept,
        [name]:value
    })
setNewDept(prev=>({
    ...prev,
    id: Math.floor(Math.random() * 100)

}));
(typeof(value)==='number') && setNewDept(
    {   
        managing_department: provided.data[value-1].department_name
    }
)
}

const handleSubmit=(e)=>{
    e.preventDefault();
    provided.setData([...provided.data,
        NewDept
    ])

    setNewDept(
        {
            id: '',
            department_name: "",
            description: "",
            manages: "n/a",
            managing_department: "n/a"
        }
    )
    
   provided.handleAddToggler()
}
    return(

        <Container>
            <Title>
                Add a New Department
            </Title>
                <Form onSubmit={handleSubmit} >
                    <Label htmlFor="department_name">Name of the Department:</Label>
                    <Input type="text" name="department_name" onChange={handleInput} value={NewDept.department_name} required/>
                    
                    <Label htmlFor="managing_department">Reports To:</Label>
                    <Select onChange={handleInput} name="managing_department" required>
                        <option value={NewDept.managing_department} >N/A</option>
                        {provided.data.map(items=><option value={items.id} key={items.id}>{items.managing_department}</option>
                        )}
                    </Select>
                    <Label htmlFor="manages">Manages</Label>
                    <Select onChange={handleInput} name="manages"  required>
                        <option value={NewDept.manages} >N/A</option>
                        {provided.data.map(items=><option value={items.id} key={items.id}>{items.manages}</option>
                        )}
                    </Select>
                    <Label htmlFor="description">Description:</Label>
                    <Desc type="textarea" name="description" onChange={handleInput} value={NewDept.description} required/>
                    <Add>Add</Add>
                </Form>

                    {
                        provided.addToggle && 
                        <MessageContainer>
                            <MessageWrapper>
                                    <CloseIcon onClick={props.addToggleHandler} style={CloseIconStyle} />
                                    <p>Task Successful</p>
                            </MessageWrapper>
                        </MessageContainer>
                    } 

        </Container>
    )
}

export default AddDept