// React
import React, { useEffect, useContext, useState } from "react";

// Elements
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  Card,
  CardHeader,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Divider,
} from "@material-ui/core";

//Other req
import { sesionStore } from "../../../../stores/sesionStore";
import { languageStore } from "../../../../stores/languageStore";

//Language
import { marcarConsultadas } from "../../../../js/Language";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 100,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  divLista: {
    maxHeight: "173px !important",
    overflowY: "scroll",
  },
}));

const ListaDeConsultados = (props) => {
  const classes = useStyles();
  const global = useContext(sesionStore);
  const globalLanguage = useContext(languageStore);
  const [listaC, setListaC] = useState([]);

  const fixListaC = (lista) => {
    //let lista =  localStore.getObjects("referenciasConsultadas")
    let lista = global.ultimasVisitadas;
    let listaNueva = [];
    let listaFinal = [];
    for (let i in lista) {
      if (
        listaNueva.indexOf(lista[i].id + "/" + lista[i].referencias[0].refid) ==
        -1
      ) {
        listaNueva.push(lista[i].id + "/" + lista[i].referencias[0].refid);
      }
    }
    for (let j in listaNueva) {
      let flag = false;
      let listaid = listaNueva[j].split("/")[0];
      let listaRefId = listaNueva[j].split("/")[1];
      for (let k in lista) {
        if (
          listaid == lista[k].id &&
          listaRefId == lista[k].referencias[0].refid &&
          !flag
        ) {
          listaFinal.push(lista[k]);
          flag = true;
        }
      }
    }
    return listaFinal;
  };

  useEffect(() => {
    //let listaConsultas = localStore.getObjects("referenciasConsultadas")
    let listaConsultas = global.ultimasVisitadas;
    let listaVacia = [];
    for (let i in listaConsultas) {
      listaVacia.push(listaConsultas[i]);
    }
    setListaC(fixListaC(listaVacia));
  }, [true]);

  const handleToggle = (value) => () => {
    const currentIndex = props.checked.indexOf(value);
    const newChecked = [...props.checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    props.setChecked(newChecked);
  };

  const handleToggleAll = (value) => () => {
    let newChecked = [...props.checked];
    for (let i in value) {
      let currentIndex = props.checked.indexOf(
        value[i].referencias[0].refid + "/" + value[i].id
      );
      if (currentIndex === -1) {
        newChecked.push(value[i].referencias[0].refid + "/" + value[i].id);
      } else {
        newChecked.splice(currentIndex);
      }
    }
    props.setChecked(newChecked);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Checkbox
            onClick={handleToggleAll(listaC)}
            disabled={listaC.length === 0}
            inputProps={{ "aria-label": "Todas las expresiones consultadas" }}
          />
        }
        title={marcarConsultadas(globalLanguage.lang)}
      />
      <Divider />
      <List component="div" role="list" className={classes.divLista}>
        {listaC.map((value, index) => {
          const labelId = `${value.id}`;
          return (
            <ListItem
              key={value.id + "-" + index}
              role="listitem"
              button
              onClick={handleToggle(
                value.referencias[0].refid + "/" + value.id
              )}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={
                    props.checked.indexOf(
                      value.referencias[0].refid + "/" + value.id
                    ) !== -1
                  }
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={`${
                  value.expresion + "-" + value.referencias[0].refid
                }`}
              />
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

export default ListaDeConsultados;
