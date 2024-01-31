//@ts-nocheck
import React from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';

export type AngleLeftIconProps = { };

function AngleLeftIcon({ children }: AngleLeftIconProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.34324 11.9409L9.3542 11.9514L9.36494 11.9621C10.2117 12.8089 10.2117 14.1817 9.36494 15.0285C8.51819 15.8752 7.14534 15.8752 6.29859 15.0285L0.635063 9.36494C-0.211688 8.51819 -0.211688 7.14533 0.635062 6.29858L6.29859 0.635062C7.14534 -0.211687 8.51819 -0.211687 9.36494 0.635063C10.2103 1.48041 10.2117 2.85012 9.36912 3.69722L5.26836 7.86109C6.57692 9.25708 7.9444 10.607 9.34324 11.9409Z" fill="#07080B"/>
        </svg>
    );
}

export default AngleLeftIcon;