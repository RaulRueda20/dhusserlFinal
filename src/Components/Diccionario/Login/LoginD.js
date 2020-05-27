//React
import React from 'react';

//Elements
import { withStyles } from '@material-ui/styles';

//Components
import LoginForm from './LoginForm';
import RegistroForm from './RegistroForm';
import Header from './Header';
import Footer from './Footer';

//Other req
import fondo from "../../../Imagenes/fondo.png";
import * as localStore from '../../../js/localStore';

const loGin ={
  back: {
    backgroundImage: `url(${fondo})`,
    position : "fixed",
    zIndex : -1,
    height : "100vh",
    width : "100vw",
    opacity: 0.45,
    top: 0
  }
}

function LoginD(props){
  const [login, setLogin] = React.useState(true)
  const {classes} = props

  React.useEffect(()=>{
    if(localStore.getObjects("sesion")){
      // console.log("Sesion existe")
      // console.log(localStore.getObjects("sesion").user , localStore.getObjects("sesion").password )
      if(localStore.getObjects("sesion").user && localStore.getObjects("sesion").password){
        console.log("Dentro", props)
        props.history.push("/diccionario/husserl")
      }
    }
  }, [true])

  return(
    <div>
      <div className={classes.back}/>
      <Header lang={props.lang} setLang={props.setLang}/>
      {login ? <LoginForm {...props} lang={props.lang} setLang={props.setLang} setLogin={setLogin}/> : <RegistroForm {...props} lang={props.lang} setLang={props.setLang} setLogin={setLogin}/>}
      <br/>
      <Footer lang={props.lang}/>
    </div>
  )
}

export default withStyles(loGin)(LoginD);