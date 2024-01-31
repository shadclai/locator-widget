//@ts-nocheck
import React from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';

export type LocationCardProps = { };

function LocationCard({ id, storeName, street, city, state, postalCode, productsFound }: LocationCardProps){
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.locationCard}>
             <div>
                 <div className={classes.locationCardStore}>{storeName}</div>
                 <div className={classes.locationCardAddress}>{street}<br/>{city}, {state} {postalCode}</div>
             </div>
             <div>
                <span className={classes.locationCardDistance}><span className={classes.locationCardDistanceNum}>2.2</span> mi</span>
                {productsFound && (
                    <span className={classes.locationCardProductsFound}>{productsFound.length} products</span>
                )}
             </div>
         </div>
     );
 }

export default LocationCard;