//@ts-nocheck
import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from 'react-jss';
import fetch from 'cross-fetch';

const WidgetSettingsContext = createContext();

export type WidgetLoaderProps = { };

const baseTheme = {
    logo_image: "https://packson-locator-widget.onrender.com/client-logo.png",
    font_family: "Roboto, Arial, sans-serif",
    primary_color: "#000000",
    body_fg_color: "#000000",
    dd_bg_color: "#eaeaea",
    dd_fg_color: "#000000",
    dd_bg_color_hover: "#f4f4f4",
    dd_fg_color_hover: "#000000"
};


function WidgetLoader({ children, customize, wrapper }: WidgetLoaderProps) {
    const [settings, setSettings] = useState(null);
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const url = `${process.env.PACKSON_BASE_API_URI}/core/locator-widget-settings`;
        fetch(url)
            .then((res) => res.json())
            .then(({ data }) => {

                setSettings(data);

            });
    }, []);

    useEffect(() => {
        if (settings) {
            setTheme({...baseTheme, ...customize? {} : settings.theme.style});
        }
    }, [customize, settings]);

    useEffect(() => {
        const onThemeChange = ({ detail }) => {
            setTheme({ ...theme, ...detail });
        };
        if (customize && wrapper && settings && theme) {
            wrapper.addEventListener("themechange", onThemeChange);

            const widgetReadyEvent = new CustomEvent("widgetready", {
              detail: theme,
              bubbles: true,
              cancelable: true,
              composed: false,
            });
            wrapper.dispatchEvent(widgetReadyEvent);
        }
        return () => {
            if (wrapper) {
                wrapper.removeEventListener("themechange", onThemeChange);
            }
        };
    }, [customize, wrapper, settings, theme]);

    // TODO: implement loader screen/component
    if (settings == null || theme == null) return (<div>Loading...</div>);

    return (
        <WidgetSettingsContext.Provider value={settings}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </WidgetSettingsContext.Provider>
    );
}

export default WidgetLoader;

export {
    WidgetSettingsContext,
}