//@ts-nocheck
import React, { useState, useRef } from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';
import PinIcon from '@/components/PinIcon';
import SightIcon from '@/components/SightIcon';
import GeoSpinner from '@/components/GeoSpinner';
import SearchIcon from '@/components/SearchIcon';

export type ProductSearchTextboxProps = { };

function ProductSearchTextbox({
    name,
    value,
    onChange,
    geocoding,
    autoLocate,
    autoLocating,
    candidatesEnabled,
    candidates,
    chooseCandidate,
}: ProductSearchTextboxProps) {
    const ref = useRef();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);

    function onSightClick(event) {
        event.preventDefault();
        event.stopPropagation();

        autoLocate();
    }

    function onCandidateClick({ event, candidate }) {
        event.preventDefault();

        chooseCandidate(candidate);
    }

    return (
        <div className={focused? candidatesEnabled? classes.productSearchTextboxActiveWithCandidateDropdown : classes.productSearchTextboxActive : classes.productSearchTextbox}>
            <div className={classes.textboxInputWrapper}
                onClick={() => ref.current.focus()}
            >
                <div className={focused? classes.focusableTextboxAddonActive : classes.focusableTextboxAddon}>
                    {geocoding? <GeoSpinner/> : <SearchIcon/>}
                </div>
                <input type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={classes.productSearchTextboxInput}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="Search products"
                    autoComplete="off"
                    ref={ref}
                />
            </div>
        </div>
    );
}

export default ProductSearchTextbox;