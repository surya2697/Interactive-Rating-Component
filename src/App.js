
import './App.css';
import { Box,Text,Link } from '@chakra-ui/react';
import AllRoutes from './Allroutes/AllRoutes';


function App() {

  return (
    
    <Box margin='auto' textAlign='center' marginTop='10px'>
      <Box>
     <Text fontSize='large' color='white' fontFamily='inherit'> Challenge by
      <Link color='grey' href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        > Frontend Mentor</Link>. Coded by <Link color='grey' href="#">Surya Ahire</Link>.</Text> 
    </Box>
   
    <AllRoutes/>
    
          
    </Box>
  
  );
}

export default App;
