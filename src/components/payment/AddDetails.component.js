import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PaymentDetails from './details/PaymentDetails.component'
import PersonalDetails from './details/PersonalDetails.component'

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 2rem',
        [theme.breakpoints.down(400)]: {
            margin: '0 1rem',
        },
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.breakpoints.down(400)]: {
            flexDirection: 'column',
        },
    },
    personalDetails: {
        flex: 1,
    },
    paymentDetails: {
        flex: 1,
    },
    gap: {
        width: '1rem',
    },
    submitBtn: {
        margin: '2rem 0',
        '& button': {
            width: '100%',
            padding: '.5rem',
            color: '#ffffff',

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

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')

    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [expDate, setExpDate] = useState('')
    const [cvv, setCvv] = useState('')

    const onsubmit = () => {
        alert(`input values: ${fullName}, ${email}, ${address}, ${address}, ${city}, ${state}, ${pincode}, ${cardNumber}, ${cardName}, ${expDate}, ${cvv}`)
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.personalDetails} >
                    <PersonalDetails setFullName={setFullName} setEmail={setEmail} setAddress={setAddress} setCity={setCity} setState={setState} setPincode={setPincode} />
                </div>
                <div className={classes.gap}></div>
                <div className={classes.paymentDetails} >
                    <PaymentDetails setCardNumbe={setCardNumber} setCardName={setCardName} setExpDate={setExpDate} setCvv={setCvv} />
                </div>
            </div>
            <div className={classes.submitBtn} >
                <button onClick={onsubmit}>Submit</button>
            </div>
        </div>
    )
}

export default AddDetails
