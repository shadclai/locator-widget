//@ts-nocheck
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
          width: '5px',
          width: '5px',
        },
        '*::-webkit-scrollbar-track': {
         ' border-radius': '3px',
         ' background-color': '#FFFFFF',
        },
        '*::-webkit-scrollbar-track:hover': {
          'background-color': '#FFFFFF',
        },
        '*::-webkit-scrollbar-track:active': {
          'background-color': '#ffffff',
        },
        '*::-webkit-scrollbar-thumb': {
          'border-radius': '5px',
          'background-color': '#B3B3B3',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          'background-color': '#000000',
        },
        '*::-webkit-scrollbar-thumb:active': {
          'background-color': '#797979',
        },
        '*': {
            'font-family': theme.font_family,
            'font-size': '16px',
            'box-sizing': 'border-box',
            'scrollbar-width': 'thin',
            'scrollbar-color': '#B3B3B3 #FFFFFF',
        },
        'html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video': {
            margin: 0,
            padding: 0,
            border: 0,
            outline: 0,
            'font-size': '100%',
            'vertical-align': 'baseline',
            background: 'transparent',
        },
        body: {
            'line-height': 1,
            color: theme.body_fg_color,
        },
        'article,aside,details,figcaption,figure, footer,header,hgroup,menu,nav,section': {
            display: 'block',
        },
        'nav ul': {
            'list-style': 'none',
        },
        'blockquote,q': {
            quotes: 'none',
        },
        'blockquote:before,blockquote:after,q:before,q:after': {
            content: '',
            content: 'none',
        },
        'a': {
            margin: 0,
            padding: 0,
            'font-size': '100%',
            'vertical-align': 'baseline',
            background: 'transparent',
            'text-decoration': 'none',
            color: theme.primary_color,
        },
        'ins': {
            'background-color': '#ff9',
            color: '#000',
            'text-decoration': 'none',
        },
        'mark': {
            'background-color': '#ff9',
            color: '#000',
            'font-style': 'italic',
            'font-weight': 'bold',
        },
        'del': {
            'text-decoration': 'line-through',
        },
        'abbr[title], dfn[title]': {
            'border-bottom': '1px dotted',
            cursor: 'help',
        },
        'table': {
            'border-collapse': 'collapse',
            'border-spacing': 0,
        },
        'hr': {
            display: 'block',
            height: '1px',
            border: 0,
            'border-top': '1px solid #cccccc',
            margin: '1em 0',
            padding: 0,
        },
        'input, select': {
            'vertical-align': 'middle',
        },
        '@keyframes geo-spinner': {
            '0%': {
                r: 0,
                opacity: 1
            },
            '100%': {
                r: '11px',
                opacity: 0
            }
         },
    },
    grid: {
        display: 'flex',
        'flex-wrap': 'wrap',
    },
    gridCell: {
        width: '33.33333%',
    },
    gridImageCell: {
        composes: '$gridCell',
        display: 'flex',
        'align-items': 'center',
    },
    gridImageWrapper: {
        display: 'flex',
        'align-items': 'center',
        'flex-direction': 'column',
        margin: '0 auto',
        'max-width': '100%',
        border: '1px solid transparent',
        'border-radius': '6px',
        '&:hover,&:active': {
            'border-color': '#eeeeee',
        }
    },
    gridImageInputWrapper: {
        composes: '$gridImageWrapper',
        position: 'relative',
    },
    gridImageCheckedInputWrapper: {
        composes: '$gridImageInputWrapper',
    },
    gridImageCheckbox: {
        position: 'absolute',
        bottom: '4px',
        right: '4px',
        opacity: 0,
        visibility: 'collapse',
        '$gridImageInputWrapper:hover>&,$gridImageCheckedInputWrapper>&': {
            visibility: 'visible',
            opacity: 1,
        }
    },
    gridImage: {
        width: '100%',
        height: 'auto',
        'user-drag': 'none',
        'user-select': 'none',
        'max-width': '270px'
    },
    gridImageFigure: {
        display: 'flex',
        'align-items': 'center',
        'flex-direction': 'column',
        'max-width': '100%',
    },
    gridImageCaption: {
        display: 'block',
        'font-size': '13px',
        'margin-top': '.3rem',
        'white-space': 'nowrap',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'max-width': '100%',
    },
    geoSpinner: {
        animation: 'geo-spinner 1.2s cubic-bezier(0.52,.6,.25,.99) infinite',
    },
    geoSpinnerRipple: {
        composes: '$geoSpinner',
        'animation-delay': '.6s',
    },
    activity: {
        'background-color': "#FFFFFF",
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        width: '100vw',
        height: '100vh',
        visibility: 'collapse',
        opacity: 0,
        transition: 'opacity 80ms ease 0s, visibility 80ms ease 0s',
    },
    activityActive: {
        composes: '$activity',
        'z-index': 'auto',
        visibility: 'visible',
        opacity: 1,
    },
    activityWrapper: {
        'background': 'linear-gradient(0deg, rgba(255,255,255,1) 60%, rgba(244,244,244,1) 100%)',
        'height': '100%',
        display: 'flex',
        'flex-direction': 'column',
        'overflow': 'hidden',
    },
    subActivityWrapper: {
        composes: '$activityWrapper',
        'background': '#ffffff',
    },
    activityHeader: {
        display: 'flex',
        'align-items': 'center',
        padding: '.9rem 1.35rem',
        'margin-top': '1.35rem',
        'justify-content': 'space-between',
    },
    activityBody: {
        padding: '.9rem 1.35rem',
        'flex-grow': 1,
        overflow: 'auto',
    },
    activityBodyShrunk: {
        composes:'$activityBody',
        'flex-grow': 0,
        overflow: 'visible',
    },
    activityFooter: {
        padding: '1rem',
        display: 'flex',
        'align-items': 'center',
    },
    activityAction: {},
    actionLink: {
        cursor: 'pointer',
        'user-select': 'none',
        'font-weight': '700',
        display: 'inline-flex',
        padding: '.5rem',
    },
    textbox: {
        display: 'flex',
        'align-items': 'center',
        position: 'relative',
        'margin-bottom': '1rem',
        border: '1px solid transparent',
    },
    textboxInput: {
        border: '0 none',
        padding: '1.1rem 0',
        'flex-grow': 1,
        '&:active,&:focus': {
            border: 'none',
            'box-shadow': 'none',
            'background-color': 'transparent',
            resize: 'none',
            outline: 'none',
        },
        '&:first-child': {
            'padding-left': '1rem',
        },
        '&:last-child': {
            'padding-right': '1rem',
        },
    },
    textboxInputWrapper: {
        display: 'flex',
        'align-items': 'center',
        'flex-grow': 1,
    },
    textboxDivider: {
        'background-color': '#dddddd',
        height: '17px',
        width: '1px',
    },
    textboxAddon: {
        padding: '1.1934rem',
        cursor: 'text',
    },
    focusableTextboxAddon: {
        composes: '$textboxAddon',
        opacity: .4,
    },
    focusableTextboxAddonActive: {
        composes: '$focusableTextboxAddon',
        opacity: 1,
    },
    productSearchTextbox: {
        composes: '$textbox',
        'border-bottom-color': 'rgba(0,0,0,.2)',
    },
    productSearchTextboxActive: {
        composes: '$productSearchTextbox',
        'border-bottom-color': 'rgba(0,0,0,1)',
    },
    productSearchTextboxInput: {
        composes: '$textboxInput',
        'background-color': 'transparent',
    },
    addressTextbox: {
        composes: '$textbox',
        'background-color': '#ffffff',
        'border-radius': '6px',
        'box-shadow': '0px 1px 2px 0px rgba(0,0,0,0.12)',
        'border-color': '#ffffff',
    },
    addressTextboxActive: {
        composes: '$addressTextbox',
    },
    addressTextboxActiveWithCandidateDropdown: {
        composes: '$addressTextboxActive',
        'border-radius': '6px 6px 0 0',
    },
    addressTextboxInput: {
        composes: '$textboxInput',
        'padding-right': '.6rem',
    },
    addressTextboxSight: {
        composes: '$focusableTextboxAddon',
        cursor: 'pointer',
        '&:hover,&:active': {
            opacity: 1,
        }
    },
    addressTextboxCandidateDropdown: {
        position: 'absolute',
        top: '100%',
        left: 0,
        'background-color': '#ffffff',
        width: '100%',
        'border-radius': '0 0 6px 6px',
        'box-shadow': '0px -1px 0px 0px #ffffff, 0px 1px 2px 0px rgba(0,0,0,0.1)',

    },
    addressTextboxCandidateListItem: {
        display: 'block',
        padding: '1rem',
        cursor: 'pointer',
        'border-top': '1px solid #F4F4F4',
        color: '#777777',
        'line-height': 1.5,
        '&:hover,&:active': {
            color: '#000000',
        }
    },
    pagination: {
        display: 'flex',
    },
    paginationLinks: {
        display: 'flex',
        'align-items': 'center',
        margin: '0 auto',
    },
    paginationLink: {
        display: 'inline-block',
        padding: '.7rem 1rem',
        opacity: .4,
        '&:hover,&:active': {
            opacity: 1,
        }
    },
    poweredBy: {
        'margin-left': 'auto',
        'font-size': '13px',
    },
    dropdown: {
        display: 'inline-flex',
        'flex-direction': 'column',
        position: 'relative',
        'z-index': '100',
    },
    dropdownOpened: {
        composes: '$dropdown',
    },
    dropdownButton: {
        display: 'flex',
        'align-items': 'center',
        padding: '.6rem .7rem',
        'background-color': theme.dd_bg_color,
        color: theme.dd_fg_color,
        cursor: 'pointer',
        'border-radius': '3px',
        'user-select': 'none',
        '&:hover': {
            'background-color': theme.dd_bg_color_hover,
            color: theme.dd_fg_color_hover,
        },
        '$dropdownOpened > &': {
            'border-radius': '3px 3px 0 0',
        }
    },
    dropdownButtonText: {
        display: 'inline-block',
        'margin-right': '.5rem',
    },
    dropdownButtonCaret: {
        opacity: .5,
        '& path': {
            fill: theme.dd_fg_color,
        },
        '$dropdownButton:hover > & path': {
            fill: theme.dd_fg_color_hover,
        },
        '$dropdownOpened &': {
            transform: 'rotate(-180deg)',
            opacity: 1,
        }
    },
    dropdownPopup: {
        'background-color': theme.dd_bg_color,
        color: theme.dd_fg_color,
        'border-radius': '0 3px 3px 3px',
        position: 'absolute',
        top: '100%',
        left: '0',
        visibility: 'collapse',
        opacity: 0,
        'min-width': '100%',
        'z-index': '-9999',
        '$dropdownOpened > &': {
            visibility: 'visible',
            opacity: 1,
            'z-index': 'auto',
        }
    },
    distanceSelectOption: {
        cursor: 'pointer',
        padding: '.6rem .7rem',
        '&:hover': {
            'background-color': theme.dd_bg_color_hover,
            color: theme.dd_fg_color_hover,
        }
    },
    resultsHeader: {
        margin: '.7rem 0',
        'font-size': '14px',
        '& $dropdownPopup': {
            'border-radius': '0 0 3px 3px',
            width: '100%',
        }
    },
    locationIndexList: {
        'flex-grow': 1,
        overflow: 'auto',
        'border-width': '1px 0',
        'border-style': 'solid',
        'border-color': '#E7E7E7',
        '& > $locationIndex': {
            'border-bottom': '1px solid #E7E7E7',
            '&:hover,&:active': {
                'background-color': '#FAFAFA',
            },
            '&:last-child': {
                'border-bottom': 'none',
            }
        }
    },
    locationIndex: {
        display: 'flex',
        'align-items': 'center',
        'flex-wrap': 'nowrap',
        'justify-content': 'space-between',
        padding: '.9rem 1.35rem',
    },
    locationIndexDistance: {
        'font-size': '18px',
        display: 'block',
        'margin-bottom': '.3rem',
    },
    locationIndexDistanceNum: {
        'font-weight': '700',
    },
    locationIndexStore: {
        'font-weight': '700',
        'margin-bottom': '.3rem',
    },
    locationIndexAddress: {
        'line-height': '1.5',
        'font-size': '14px',
    },
    locationIndexProductsFound: {
        'font-size': '14px',
        display: 'block',
    },
    locationCard: {
        display: 'flex',
        'align-items': 'center',
        'flex-wrap': 'nowrap',
        'justify-content': 'space-between',
        'border-top': '1px solid #EEEEEE',
        padding: '1.5rem 1.35rem',
    },
    locationCardDistance: {
        'font-size': '24px',
        display: 'block',
        'margin-bottom': '.3rem',
    },
    locationCardDistanceNum: {
        'font-weight': '700',
    },
    locationCardStore: {
        'font-weight': '700',
        'margin-bottom': '.3rem',
        'font-size': '20px',
    },
    locationCardAddress: {
        'line-height': '1.5',
        'font-size': '16px',
    },
    locationCardProductsFound: {
        'font-size': '13px',
        display: 'block',
    },
    productCard: {},
    productCardFigure: {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
    },
    productCardImage: {
        width: '100%',
        'max-width': '232px',
        height: 'auto',
    },
    mapBoxContainer: {
        'flex-grow': 1,
        position: 'relative',
        overflow: 'hidden',
    },
}));

export {
    useStyles,
};