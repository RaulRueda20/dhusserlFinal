import React from 'react';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

// import Expresiones from './Expresiones'
import { Typography } from '@material-ui/core';

const styleList = {
  lista:{
     width:"100% !important",
  },
  contenedorLista:{
    backgroundColor: "#daa79f",
  },
  listaItem: {
    justifyContent: "center",
    padding: "7px 0",
  },
  divListaLetras:{
    height: "31px",
    overflowY: "scroll"
  }
}

const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function ListaLetras (props){
  const { classes }= props;

  React.useEffect(()=>{
    console.log(props.state)
  },[true])

  const handleChangeLetraMain = (event) => {
    props.setLetraMain(event.target.innerText)
    if(props.state.checkedA==false){
      props.setState({checkedA:true})
    }
    if(!props.flagLetraMain){
      props.setFlagLetraMain(true)
    }
  };

  return(
    <div className={classes.divListaLetras}>
      <div className={classes.contenedorLista}>
        <List className={classes.lista}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {letras.map(letra =>(
              <Grid item xs={1} md key={letra} className={classNames({"selected" : props.letraMain == letra})}>
                <ListItem className={classes.listaItem} button onClick={handleChangeLetraMain} id={letra}>
                  <Typography variant="h6" align="center">{letra}</Typography>
                </ListItem> 
              </Grid>
            ))}
          </Grid>
        </List>
      </div>
    </div>
  )
}

export default withStyles(styleList)(ListaLetras);
