import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PaymentDetails from './details/PaymentDetails.component'
import PersonalDetails from './details/PersonalDetails.component'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',

        [theme.breakpoints.down(400)]: {
            margin: '0 1rem',
        },
    },
    container: {
        width: '400px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',

        [theme.breakpoints.down(400)]: {
            flexDirection: 'column',
        },
    },
    stepContainer: {

        '& h4': {
            margin: '.5rem 0',
        },
    },
    stepListItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',



        '& h2': {
            margin: '.5rem 0',
            fontSize: '20px',
        },

        '& p': {
            fontSize: '20px'
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
    active: {
        color: '#0268FF',
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
                <div className={classes.stepContainer}>
                    <h4>Steps</h4>
                    <div className={classes.stepListItem}>
                        <p className={classes.active}>----</p>
                        <h2 className={classes.active}>billing address</h2>
                        <p >----</p>
                        <h2 >payment details</h2>
                        <p>----</p>
                    </div>
                </div>
                <div className={classes.personalDetails} >
                    <PersonalDetails setFullName={setFullName} setEmail={setEmail} setAddress={setAddress} setCity={setCity} setState={setState} setPincode={setPincode} />
                </div>
                {/* <div className={classes.gap}></div>
                <div className={classes.paymentDetails} >
                    <PaymentDetails setCardNumbe={setCardNumber} setCardName={setCardName} setExpDate={setExpDate} setCvv={setCvv} />
                </div> */}
                <div className={classes.submitBtn} >
                    <button onClick={onsubmit}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default AddDetails
