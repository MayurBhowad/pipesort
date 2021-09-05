import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        [theme.breakpoints.down(500)]: {
            padding: '0 1rem',
            flexDirection: 'column',
        },
    },
    navUl: {

        '& ul': {
            display: 'flex',
            marginRight: '-2rem',

            '& li': {
                margin: '0 2rem'
            },
        },

        [theme.breakpoints.down(400)]: {
            display: 'none',
        },
    },
    mobileNavUl: {
        width: '100%',

        '& ul': {
            margin: '0',
            padding: '0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            '& li': {
                padding: '.3rem .5rem',
                backgroundColor: '#0268FF',
                color: '#fff',
                borderRadius: '5px',
            },
        },

        [theme.breakpoints.up(400)]: {
            display: 'none',
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
                    <li><Link to="/" >Product</Link></li>
                    <li>Cart</li>
                    <li><Link to="/payment" >Payment</Link></li>
                </ul>
            </div>
            <div className={classes.mobileNavUl}>
                <ul>
                    <li><Link to="/" >Product</Link></li>
                    <li><Link to="/payment" >Payment</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
