import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const letra = {
    correccionesDeLetraIndice:{
        paddingTop:"15px",
        paddingBottom:"20px",
        fontSize: "1.6rem"
    }
}

function LetraIndice(props){
    const {classes}=props;

    return(
        <div>
            <Typography className={classes.correccionesDeLetraIndice}>
                {props.letraMain}
            </Typography>
        </div>
    )
}

export default withStyles(letra)(LetraIndice);