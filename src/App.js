import styled from "styled-components";
import Home from "./pages/Home";


const Container=styled.div`
padding: 0px;
margin: 0px;
min-height: 100vh;
`
const App=()=> {
  return (
    <Container>
      <Home/>
    </Container>
  );
}

export default App;
