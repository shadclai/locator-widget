//@ts-nocheck
import React from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';

export type PinIconProps = { };

function PinIcon({ children }: PinIconProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <svg width="16" height="16" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.36175 0C2.82744 0 0 2.82744 0 6.36175C0 10.7443 2.40333 14.632 6.00832 16.894C6.22037 17.0353 6.50312 17.0353 6.78586 16.894C10.3202 14.5613 12.7235 10.7443 12.7235 6.36175C12.7235 2.82744 9.89605 0 6.36175 0ZM6.36175 9.18919C4.80665 9.18919 3.5343 7.91684 3.5343 6.36175C3.5343 4.80665 4.80665 3.5343 6.36175 3.5343C7.91684 3.5343 9.18919 4.80665 9.18919 6.36175C9.18919 7.91684 7.91684 9.18919 6.36175 9.18919Z" fill="#07080B"/>
        </svg>
    );
}

export default PinIcon;