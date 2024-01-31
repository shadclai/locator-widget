//@ts-nocheck
import React from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';

export type SearchIconProps = { };

function SearchIcon({ children }: SearchIconProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3994 13.4423L12.8661 9.8641C13.4411 8.86019 13.7411 7.74382 13.7411 6.61911C13.7411 2.97006 10.7744 0 7.13275 0C3.49108 0 0.524414 2.97006 0.524414 6.61911C0.524414 10.2682 3.49108 13.2382 7.13275 13.2382C8.29525 13.2382 9.44525 12.9175 10.4702 12.3051L13.9869 15.8709C14.0661 15.95 14.1786 16 14.2911 16C14.4036 16 14.5161 15.9542 14.5952 15.8709L16.3994 14.0463C16.5661 13.8756 16.5661 13.609 16.3994 13.4423ZM7.13275 2.5785C9.35775 2.5785 11.1661 4.39052 11.1661 6.61911C11.1661 8.8477 9.35775 10.6597 7.13275 10.6597C4.90775 10.6597 3.09941 8.8477 3.09941 6.61911C3.09941 4.39052 4.90775 2.5785 7.13275 2.5785Z" fill="black"/>
        </svg>
    );
}

export default SearchIcon;