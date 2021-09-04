import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({

    card: {
        border: '1px solid black',
        padding: '1rem',

        '& img': {
            width: '100%',
        }
    }
}))

function Card() {
    const classes = useStyles()

    return (
        // <div>
        <div className={classes.card}>
            <h2>Pierced Owl Rose Gold Plated Stainless Steel Double</h2>
            <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt="" />
            <div className={classes.priceContainer}>
                <h2>10.99</h2>
                <h4>1.9</h4>
            </div>
            <p>Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel</p>
        </div>
        // </div>
    )
}

export default Card
