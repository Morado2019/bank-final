import React, {useState} from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import Globalstyle from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BTnTema } from "./Components/UI/Index";
import SwitcherTema from "./Components/SwitcherTema";



function App() {
  const [Tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((Tema) => !Tema)

  }


  
  return (
    <ThemeProvider theme={Tema ? temaClaro : temaOscuro}>
      <Globalstyle />
      <BTnTema onClick={toggleTema}> 
        <SwitcherTema Tema={Tema} />
      </BTnTema>
      <Header />
      <Container />

    </ThemeProvider>
  );
}

export default App;
