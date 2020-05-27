//React
import React from 'react';

//Components
import LoginForm from './LoginForm';
import Header from './Header';
import Footer from './Footer';

//Other req
import * as localStore from '../../../js/localStore';

function LoginA(props){
  const {classes} = props

  React.useEffect(()=>{
    if(localStore.getObjects("admin_sesion")){
      if(localStore.getObjects("admin_sesion").email && localStore.getObjects("admin_sesion").user_password){
        console.log("Dentro", props)
        props.history.push(`${props.match.url}/husserl`)
      }
    }
  }, [true])

    return(
      <div>
        <Header/>
        <LoginForm {...props}/>
        <br/>
        <Footer/>
      </div>
    )
}

export default (LoginA);
