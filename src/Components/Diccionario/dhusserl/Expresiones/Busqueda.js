//React
import React from 'react';

//Components
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import { mdiFormatLetterCase } from '@mdi/js';
import { withStyles } from '@material-ui/styles';

//Other req
import '../../../../css/expresiones.css';
import {webService} from '../../../../js/webServices';
import classNames from 'classnames';

//Language
import {busquedas, distincionMayusyMinus, BusquedaGeneral, busquedaPorLetra} from '../../../../js/Language';

const styles = {
  contenedor:{
    alignItems:"center !important"
  },
  switch:{
    textAlign: "center"
  }
}

function Busqueda(props){
  const {classes}=props;
  const [insensitiveCase,setInsensitiveCase]=React.useState(false);

  const ChunkB = (expresiones) =>{
    props.setChunkListGlobal(expresiones.slice(0,50))
  }

  const handleChangeBusquedaExpresiones = (event) => {
    event.preventDefault()
    if(props.state.checkedA == false){
      var stringCaracteres = props.busqueda.replace(/(?!\w|\s)./g, '')
      var stringNumeros = props.busqueda.replace(/([0-9])./g, '')
      if(props.busqueda.length<2){
        props.setModalDebusquedas(true)
      }else if(stringCaracteres.length<2){
        props.setModalCaracteresInvalidos(true)
      }else if(stringNumeros.length<2){
        props.setModalNumeros(true)
      }else if(props.busqueda.length>2){
        props.setLoading(true)
        var servicebe = "/referencias/busquedaExpresion"
        webService(servicebe, "POST", {parametro:props.busqueda,case:insensitiveCase}, (data) => {
          // console.log("busqueda",data.data.response)
          ChunkB(data.data.response)
          props.setExpresionesGlobales(data.data.response)
          props.setLoading(false)
          props.setFlagDeBusqueda(true)
        })
      }
    }else{
      props.expresiones.map(expresion=>{
        var expresionNombre=expresion.expresion +  expresion.traduccion +  expresion.id
        var expresionEncontrada= expresionNombre.indexOf(props.busqueda)
        // console.log(document.getElementById("expresion"+expresion.id))
        document.getElementById("expresion"+expresion.id).classList.remove("hiddenE")
        if(expresionEncontrada == -1){
          document.getElementById("expresion"+expresion.id).className += " hiddenE";
        }
      })
      props.setLoading(false)
    }
  }

  function handleInsensitiveCase(){
    setInsensitiveCase(!insensitiveCase)
  }

  const handleSwitch=name=>event=>{
    props.setState({...props.state, [name]:event.target.checked});
  }

  return(
    <form onSubmit={handleChangeBusquedaExpresiones}>
      <Grid container className={classes.contenedor}>
        <Grid item xs={10}>
          <FormControl className="busquedaEnExpresiones">
            <InputLabel htmlFor="input-with-icon-adornment">{busquedas(props.lang)}</InputLabel>
            <Input
            onChange={event => props.setBusqueda(event.target.value)}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="end">
                <Tooltip title={distincionMayusyMinus(props.lang)}>
                    <IconButton onClick={handleInsensitiveCase} className={classNames([{"caseSeleccionado" : insensitiveCase == true}, "case"])}>
                        <Icon path={mdiFormatLetterCase}
                        title="User Profile"
                        size={1}
                        />
                    </IconButton>
                </Tooltip>
              </InputAdornment>
            }  
            endAdornment={
              <InputAdornment position="start">
                <IconButton type="submit" className="lupita">
                  <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
            />
          </FormControl>  
        </Grid>
        <Grid item xs={2} className={classes.switch}>
          <Tooltip title={props.state.checkedA ? busquedaPorLetra(props.lang) : BusquedaGeneral(props.lang)}>
            <Switch
                checked={props.state.checkedA}
                onChange={handleSwitch("checkedA")}
                value="checkedA"
                inputProps={{'aria-label': 'checkbox with default color'}}
                size="small"
            />
          </Tooltip>
        </Grid>
      </Grid>
    </form>
  )
}

export default withStyles(styles)(Busqueda);