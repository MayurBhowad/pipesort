import { Grid, makeStyles } from '@material-ui/core'
import { BorderBottom } from '@material-ui/icons';
import React from 'react'
import Card from './card/Card.component';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '2rem',
        margin: '0 4rem',
    },
    topNav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid black',

        '& select': {
            width: '10rem',
            padding: '.5rem',
        },
    },
    productsContainer: {
        marginTop: '1rem',
    },
}))

function Products() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.topNav}>
                <div><h3>Products</h3></div>
                <div>
                    <select name="" id="">
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </select>
                </div>
            </div>
            <div className={classes.productsContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Products
