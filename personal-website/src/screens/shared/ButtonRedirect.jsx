import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const ButtonRedirect = (props) => {
    return (
        <Link to={props.route}>
            <Button style={props.style} className={props.className} variant={props.variant} color={props.color} onClick={props.onClick}>
                <Typography variant={props.textVariant}>{props.content}</Typography>
            </Button>
        </Link>
    );
}

export default ButtonRedirect;