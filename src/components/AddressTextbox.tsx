//@ts-nocheck
import React, { useState, useRef } from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';
import PinIcon from '@/components/PinIcon';
import SightIcon from '@/components/SightIcon';
import GeoSpinner from '@/components/GeoSpinner';

export type AddressTextboxProps = { };

function AddressTextbox({
    name,
    value,
    onChange,
    geocoding,
    autoLocate,
    autoLocating,
    candidatesEnabled,
    candidates,
    chooseCandidate,
}: AddressTextboxProps) {
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
        <div className={focused? candidatesEnabled? classes.addressTextboxActiveWithCandidateDropdown : classes.addressTextboxActive : classes.addressTextbox}>
            <div className={classes.textboxInputWrapper}
                onClick={() => ref.current.focus()}
            >
                <div className={focused? classes.focusableTextboxAddonActive : classes.focusableTextboxAddon}>
                    {geocoding? <GeoSpinner/> : <PinIcon/>}
                </div>
                <input type="text"
                    autoFocus
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={classes.addressTextboxInput}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="Enter address"
                    autoComplete="off"
                    ref={ref}
                />
                <div className={classes.textboxDivider}></div>
                <a href="#"
                    className={classes.addressTextboxSight}
                    onClick={onSightClick}
                    title="Auto locate"
                >
                    {autoLocating? <GeoSpinner/> : <SightIcon/>}
                </a>
            </div>
            {(focused || hovered) && candidatesEnabled && (
                <div className={classes.addressTextboxCandidateDropdown}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {candidates.map((candidate, i) => (
                        <a href="#" key={i}
                            className={classes.addressTextboxCandidateListItem}
                            onClick={(event) => onCandidateClick({ event, candidate })}>
                            <span>{candidate.displayName}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AddressTextbox;