

//@ts-nocheck
import React from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';

export type PinIconProps = { };

function PinIcon({ children }: PinIconProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle className={classes.geoSpinner} cx="12" cy="12" r="0"/>
            <circle className={classes.geoSpinnerRipple} cx="12" cy="12" r="0"/>
        </svg>
    );
}

export default PinIcon;