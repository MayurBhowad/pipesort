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
            border: '1px solid #9ea8ad',
            borderRadius: '3px',
            padding: '.5rem',
            outline: 'none',
        },
    },
}))

function PersonalDetails(props) {
    const classes = useStyles()
    const [spacing1, setSpacing1] = useState(12)
    const [spacing2, setSpacing2] = useState(12)
    const { width } = useWindowDimensions()
    const { setFullName, setEmail, setAddress, setCity, setState, setPincode } = props;

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
                    <input type="text" placeholder="Nick Roy" onChange={e => setFullName(e.target.value)} />
                </Grid>

                <Grid item xs={spacing1} className={classes.inputDiv}>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="nickroy@gmail.com" onChange={e => setEmail(e.target.value)} />
                </Grid>

                <Grid item xs={spacing1} className={classes.inputDiv}>
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Room no. 1, street" onChange={e => setAddress(e.target.value)} />
                </Grid>

                <Grid item xs={spacing2} className={classes.inputDiv}>
                    <label htmlFor="city">City</label>
                    <input type="text" placeholder="Nagpur" onChange={e => setCity(e.target.value)} />
                </Grid>

                <Grid item xs={spacing2} spacing={3} className={classes.inputDiv}>
                    <label htmlFor="state">State</label>
                    <input type="text" placeholder="Maharastra" onChange={e => setState(e.target.value)} />
                </Grid>

                <Grid item xs={spacing2} className={classes.inputDiv}>
                    <label htmlFor="pin">Pin Code</label>
                    <input type="text" placeholder="123 456" onChange={e => setPincode(e.target.value)} />
                </Grid>
            </Grid>

        </div>
    )
}

export default PersonalDetails
