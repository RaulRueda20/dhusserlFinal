import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

import { sesionStore } from '../../../../stores/sesionStore';

const style = {
    correccionesDeLetraIndice: {
        paddingTop: "15px",
        paddingBottom: "20px",
        fontSize: "1.6rem"
    }
}

const LetraIndice = (props) => {
    const { classes } = props;
    const global = useContext(sesionStore);
    const { state } = global
    const { letra } = state

    return (
        <div>
            <Typography className={classes.correccionesDeLetraIndice}>
                {letra}
            </Typography>
        </div>
    )
}

export default withStyles(style)(LetraIndice);