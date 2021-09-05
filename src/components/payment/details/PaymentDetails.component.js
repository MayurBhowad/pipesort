import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../../../hook/WindowDimensions.hook'

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

        '& span': {
            color: '#778891'
        },
    },
}))

function PaymentDetails(props) {
    const classes = useStyles()
    const [spacing1, setSpacing1] = useState(12)
    const [spacing2, setSpacing2] = useState(12)
    const { width } = useWindowDimensions()
    const { setCardNumber, setCardName, setExpDate, setCvv } = props;
    console.log(props.inputState);

    useEffect(() => {
        if (width > 768) {
            setSpacing2(6)
        } else {
            setSpacing2(12)
        }
    }, [width])

    return (
        <div className={classes.root}>
            <h3>Payment Details</h3>
            <Grid container spacing={3}>

                <Grid item xs={spacing1} className={classes.inputDiv}>
                    <label htmlFor="card_number">Card Number</label>
                    <input type="text" placeholder="" onChange={e => setCardNumber(e.target.value)} />
                </Grid>

                <Grid item xs={spacing1} className={classes.inputDiv}>
                    <label htmlFor="cc_name">Name<span>(as it appears on your card)</span></label>
                    <input type="text" placeholder="Nick Roy" onChange={e => setCardName(e.target.value)} />
                </Grid>

                <Grid item xs={spacing2} className={classes.inputDiv}>
                    <label htmlFor="expiration_date">Expiration Date</label>
                    <input type="text" placeholder="MM/YYYY" onChange={e => setExpDate(e.target.value)} />
                </Grid>

                <Grid item xs={spacing2} className={classes.inputDiv}>
                    <label htmlFor="security_code">Security Code</label>
                    <input type="text" placeholder="CVV 3 or 4 digits" onChange={e => setCvv(e.target.value)} />
                </Grid>

            </Grid>

        </div>
    )
}

export default PaymentDetails
