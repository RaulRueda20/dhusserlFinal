//React
import React from 'react';

//Elements
import {Switch, Route, Redirect} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

//Components
import LoginA from './Login/LoginA'
import Subvistas from './AdminHusserl/Subvistas'

const theme = createMuiTheme({
    palette: {
        primary: { main: "#38673d"},
        secondary: { main:"#2e7d32"},
    }
});
  
theme.typography.h1={
    fontSize : "3rem",
    fontFamily: "DHTitle",
    color: "rgba(0,0,0,.9)"
}
  
theme.typography.h2={
    fontSize : "2rem",
    fontFamily: "ROBOTO",
    color: "rgba(0,0,0,.8)",
    fontWeight: "400"
}
  
theme.typography.h3={
    fontSize : "1.5rem",
    fontFamily: "ROBOTO",
    color: "rgba(0,0,0,.8)",
    fontWeight: "300"
}
  
theme.typography.h4={
    fontSize : "1.2rem",
    fontFamily: "ROBOTO",
    color: "rgba(0,0,0,.7)",
    fontWeight: "300"
}
  
theme.typography.h5={
    fontSize : "1rem",
    fontFamily: "ROBOTO",
    fontWeight: "300",
    color: "rgba(0,0,0,.7)"
}
  
theme.typography.h6={
    fontSize : "0.90rem",
    fontFamily: "ROBOTO",
    color: "rgba(0,0,0,.7)",
    fontWeight: "300"
}

function RutaAdministrador(props){

    // React.useEffect(()=>{
    //     console.log(props.match)
    // })

    return(
        <MuiThemeProvider theme={theme}>
            <Switch>
                <Route path={`${props.match.url}/husserl`} render={() => <Subvistas {...props}/>}/>
                <Route path={`${props.match.url}/login`} render={() => <LoginA {...props}/>}/>
                <Route exact path={`${props.match.url}/`}>
                    <Redirect to={`${props.match.url}/login`} render={() => <LoginA {...props}/>}/>
                </Route>
            </Switch>
        </MuiThemeProvider>
    )
}

export default RutaAdministrador;