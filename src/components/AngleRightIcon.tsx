//@ts-nocheck
import React from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';

export type AngleRightIconProps = { };

function AngleRightIcon({ children }: AngleRightIconProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.656764 11.9409L0.645804 11.9514L0.635062 11.9621C-0.211687 12.8089 -0.211687 14.1817 0.635062 15.0285C1.48181 15.8752 2.85466 15.8752 3.70141 15.0285L9.36494 9.36494C10.2117 8.51819 10.2117 7.14534 9.36494 6.29859L3.70141 0.635063C2.85466 -0.211687 1.48181 -0.211688 0.635062 0.635063C-0.21029 1.48042 -0.211686 2.85012 0.630881 3.69722L4.73164 7.86109C3.42308 9.25708 2.0556 10.607 0.656764 11.9409Z" fill="#07080B"/>
    </svg>
    );
}

export default AngleRightIcon;