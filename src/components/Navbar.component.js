import { makeStyles } from '@material-ui/styles'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navUl: {

        '& ul': {
            display: 'flex',
            marginRight: '-2rem',

            '& li': {
                margin: '0 2rem'
            },
        },
    },
}))


function Navbar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <h1>PipeSort</h1>
            </div>
            <div className={classes.navUl}>
                <ul>
                    <li>Product</li>
                    <li>Cart</li>
                    <li>Payment</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
