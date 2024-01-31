//@ts-nocheck
import React from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { jss } from 'react-jss';

import WidgetLoader from '@/components/WidgetLoader';
import App from "@/components/App";

window.Packson = {
    customizable: false,
    ...window.Packson || {},
};

const containerDIV = document.createElement("div");
containerDIV.id = "packson-widget-container";
Object.assign(containerDIV.style, {
    margin: '0 auto',
    width: '431px',
});

const widgetRoot = document.getElementById("packson-locator-widget");
widgetRoot.appendChild(containerDIV);

const mainDIV = document.createElement("div");
mainDIV.id = "packson-widget-main";
const main = widgetRoot.appendChild(mainDIV);

const appIFRAME = document.createElement("iframe");
Object.assign(appIFRAME, {
    name: "packson-widget-frame",
    frameBorder: "0",
    scrolling: "no",
    width: "431",
    height: "703",
});
Object.assign(appIFRAME.style, {
    'border-radius': "16px",
    '-webkit-box-shadow': "0px 3px 25px 0px rgba(0,0,0,0.07)",
    '-moz-box-shadow': "0px 3px 25px 0px rgba(0,0,0,0.07)",
    'box-shadow': "0px 3px 25px 0px rgba(0,0,0,0.07)",
});
appIFRAME.onload = () => {
    const frame = window.frames['packson-widget-frame'];
    const {
        head,
        body
    } = frame.document;
    jss.setup({
        insertionPoint: head
    });
    const root = createRoot(main);
    root.render(createPortal((
        <WidgetLoader wrapper={widgetRoot}
            customize={Packson.customizable}
        >
            <App/>
        </WidgetLoader>
    ), body));
};
widgetRoot.appendChild(appIFRAME);
