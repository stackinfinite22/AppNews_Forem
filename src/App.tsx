import React  from "react";
import { Center, ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupModel from "./components/SignupModal";
import  Navbar from "./pages/Navbar";
import Post from "./components/Post";


const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
       <Center >
        <BrowserRouter>
        <Routes>   
          <Route path="/" element={<Post/>}/>
          <Route path="/signupmodel" element={<SignupModel/>}/> 
      </Routes>
      </BrowserRouter>
      </Center>

    </ChakraProvider>
  );
};

export default React.memo(App);
