//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';

export type ActivityProps = { };

function Activity({ children, active, sub }: ActivityProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    function onActionClick(event) {
        event.preventDefault();
    }

    return (
        <div className={active? classes.activityActive : classes.activity}>
            <div className={sub? classes.subActivityWrapper : classes.activityWrapper}>
                {children}
            </div>
        </div>
    );
}

export default Activity;

export type ActivityHeaderProps = { };

export function ActivityHeader({ children }: ActivityHeaderProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.activityHeader}>
            {children}
        </div>
    );
}

export type ActivityFooterProps = { };

export function ActivityFooter({ children }: ActivityFooterProps) {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.activityFooter}>
            {children}
        </div>
    );
}

export type ActivityBodyProps = { };

export function ActivityBody({ children, shrunk }: ActivityBodyProps) {
    const classes = useStyles();

    return (
        <div className={shrunk? classes.activityBodyShrunk : classes.activityBody}>
            {children}
        </div>
    );
}