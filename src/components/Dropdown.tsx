//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';
import CaretDownIcon from '@/components/CaretDownIcon';

export type BrandTextProps = { };

function Dropdown({ children, label, opened, toggleOpen }: BrandTextProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const [entered, setEntered] = useState(false);
    const [context, setContext] = useState(null);

    useEffect(() => {
        function closeDropdown() {
            setEntered(false);

            toggleOpen(false);
        }
        if (context && opened && entered === false) {
            context.document.addEventListener("mousedown", closeDropdown);
        }
        return () => {
            if (context)
                context.document.removeEventListener("mousedown", closeDropdown);
        }
    }, [entered]);

    function onMouseEnter(event) {
        setContext(event.view);

        setEntered(true);
    }
    function onMouseLeave(event) {
        setContext(event.view);

        setEntered(false);
    }

    return (
        <div className={opened? classes.dropdownOpened : classes.dropdown}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={classes.dropdownButton} onClick={() => toggleOpen(!opened)}>
                <span className={classes.dropdownButtonText}>{label}</span>
                <span className={classes.dropdownButtonCaret}>
                    <CaretDownIcon />
                </span>
            </div>
            <div className={classes.dropdownPopup}>
                {children}
            </div>
        </div>
    );
}

export default Dropdown;