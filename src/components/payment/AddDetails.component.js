import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PaymentDetails from './details/PaymentDetails.component'
import PersonalDetails from './details/PersonalDetails.component'

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 2rem',
    },
    submitBtn: {
        margin: '2rem 0',
        '& button': {
            width: '100%',
            padding: '.5rem',

            cursor: 'pointer',

            border: 'none',
            borderRadius: '2px',

            backgroundColor: '#0268FF',

            transition: 'all .5s',

            '&:hover': {
                backgroundColor: '#014CE6',
            }
        },
    },
}))

function AddDetails() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.personalDetails} >
                <PersonalDetails />
            </div>
            <div className={classes.paymentDetails} >
                <PaymentDetails />
            </div>
            <div className={classes.submitBtn} >
                <button>Submit</button>
            </div>
        </div>
    )
}

export default AddDetails
