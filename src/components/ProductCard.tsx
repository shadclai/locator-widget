//@ts-nocheck
import React from "react";
import { useTheme } from 'react-jss';
import { useStyles } from '@/styles';

export type ProductCardProps = { };

function ProductCard({ id, thumbnail_url, name, short_desc }: ProductCardProps){
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <div className={classes.productCard}>
            <figure className={classes.productCardFigure}>
                <img className={classes.productCardImage }
                    src={thumbnail_url}
                    width="128"
                    height="128"
                 />
                 <figcaption>{name}</figcaption>
                 <p>{short_desc}</p>
             </figure>
         </div>
     );
 }

export default ProductCard;