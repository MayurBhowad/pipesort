import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({

    card: {
        border: '1px solid black',
        borderRadius: '3px',
        padding: '1rem',

        '& h2': {
            display: "-webkit-box",
            boxOrient: "vertical",
            lineClamp: 2,
            wordBreak: "break-all",
            overflow: "hidden"
        },

        '& img': {
            width: '100%',
            height: '200px',
            objectFit: 'scale-down',
        },

        '& p': {
            display: "-webkit-box",
            boxOrient: "vertical",
            lineClamp: 3,
            wordBreak: "break-all",
            overflow: "hidden"
        }
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '& h2': {
            margin: '0',
        },
        '& h4': {
            margin: '0',
        },
    }
}))

function Card(props) {
    const classes = useStyles()
    const { product } = props;

    return (
        // <div>
        <div className={classes.card} key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt="" />
            <div className={classes.priceContainer}>
                <h2>${product.price}</h2>
                <h4>Rating: {product.rating.rate}</h4>
            </div>
            <p>{product.description}</p>
        </div>
        // </div>
    )
}

export default Card
