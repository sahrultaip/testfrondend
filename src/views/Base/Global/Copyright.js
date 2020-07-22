import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = (props) => {
    return(
        <div className="text-muted">
            <Typography className="textCpr" variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                <b>Ogya</b>
            </Link>{' '}
            {'2020'}
            </Typography>
        </div>
    )
}

export default Copyright;