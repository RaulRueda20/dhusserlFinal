import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

import { letraStore } from '../../../../stores/letraStore';

const letra = {
    correccionesDeLetraIndice:{
        paddingTop:"15px",
        paddingBottom:"20px",
        fontSize: "1.6rem"
    }
}

function LetraIndice(props){
    const {classes}=props;
    const globalLetra = React.useContext(letraStore);

    return(
        <div>
            <Typography className={classes.correccionesDeLetraIndice}>
                {globalLetra.letra}
            </Typography>
        </div>
    )
}

export default withStyles(letra)(LetraIndice);