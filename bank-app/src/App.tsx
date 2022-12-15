import React, {FC, ReactElement, useState} from 'react';
import './App.css';
import {CheckingVersionTwo} from "./Componenets/CheckingVersionTwo";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Title} from "./Componenets/Title";
import {Dashboard} from "./Componenets/Dashboard";
import {CustomTheme} from "./CustomTheme/CustomTheme";
const App:FC = (): ReactElement =>  {

    const [myName, setMyName] = useState("Kenny")

  return (

        // <ThemeProvider theme={CustomTheme}>
        // <CssBaseline/>
        //     <h1>App Head</h1>
        //     <Title/>
        //     <Dashboard myName={myName}/>
        // </ThemeProvider>

      // <>
      // <CheckingApp/>
      // </>

     <>
      <CheckingVersionTwo/>
      </>

  );
}

export default App;
