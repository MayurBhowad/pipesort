import { Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../../../hook/WindowDimensions.hook';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputDiv: {
        display: 'flex',
        flexDirection: 'column',

        '& input': {
            padding: '.5rem',
        },
    },
}))

function PersonalDetails() {
    const classes = useStyles()
    const [spacing1, setSpacing1] = useState(12)
    const [spacing2, setSpacing2] = useState(12)
    const { width } = useWindowDimensions()

    useEffect(() => {
        if (width > 768) {
            setSpacing2(6)
        } else {
            setSpacing2(12)
        }
    }, [width])

    return (
        <div className={classes.root}>
            <h3>Personal Details</h3>
            <Grid container spacing={3}>
                <Grid item xs={spacing1} className={classes.inputDiv}>
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" placeholder="Nick Roy" />
                </Grid>

                <Grid item xs={spacing1} className={classes.inputDiv}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="nickroy@gmail.com" />
                </Grid>

                <Grid item xs={spacing1} className={classes.inputDiv}>
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Room no. 1, street" />
                </Grid>

                <Grid item xs={spacing2} className={classes.inputDiv}>
                    <label htmlFor="city">City</label>
                    <input type="text" placeholder="Nagpur" />
                </Grid>

                <Grid item xs={spacing2} spacing={3} className={classes.inputDiv}>
                    <label htmlFor="state">State</label>
                    <input type="text" placeholder="Maharastra" />
                </Grid>

                <Grid item xs={spacing2} className={classes.inputDiv}>
                    <label htmlFor="pin">Pin Code</label>
                    <input type="text" placeholder="123 456" />
                </Grid>
            </Grid>

        </div>
    )
}

export default PersonalDetails
