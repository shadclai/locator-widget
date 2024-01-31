//@ts-nocheck
import React from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';

export type CaretDownIconProps = { };

function CaretDownIcon({ children }: CaretDownIconProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.11198 5.27944C3.39219 5.64345 3.94114 5.64345 4.22135 5.27944L6.84056 1.877C7.19489 1.4167 6.86676 0.75 6.28587 0.75H1.04746C0.466574 0.75 0.138439 1.4167 0.492777 1.877L3.11198 5.27944Z" fill="#07080B"/>
        </svg>
    );
}

export default CaretDownIcon;