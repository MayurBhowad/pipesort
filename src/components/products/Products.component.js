import { FormControl, Grid, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { productsContext } from '../../context/product.context';
import useWindowDimensions from '../../hook/WindowDimensions.hook';
import Card from './card/Card.component';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '2rem',
        margin: '0 4rem',

        [theme.breakpoints.down(400)]: {
            marginTop: '2rem',
            margin: '0 1rem',
        },
    },
    topNav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid black',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    productsContainer: {
        marginTop: '1rem',
    },
}))

function Products(props) {
    const classes = useStyles();
    const { width } = useWindowDimensions();
    var products = React.useContext(productsContext);

    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState("women's clothing")
    const [spacing1, setSpacing1] = useState(4)
    const [sortedProduct, setSortedProduct] = useState([])

    let productsDisplayContainer;
    if (sortedProduct === null || loading) {
        productsDisplayContainer = (<h5>Loading...</h5>)
    } else {
        if (sortedProduct.length > 0) {
            productsDisplayContainer = sortedProduct.map(product => (
                <Grid item xs={spacing1} key={product.id}>
                    <Card product={product} />
                </Grid>
            ))
        } else {
            productsDisplayContainer = (<h5>No product Foud</h5>)
        }
    }

    useEffect(() => {
        if (selectedCategory) {
            let srt = products.filter(item => item.category === selectedCategory)
            setSortedProduct(srt)
        } else {
            setSortedProduct(products)
        }

        products.length > 0 ? setLoading(false) : setLoading(true)
    }, [selectedCategory, products])

    useEffect(() => {
        if (width > 1024) {
            setSpacing1(3)
        } else if (width > 768) {
            setSpacing1(4)
        } else if (width > 420) {
            setSpacing1(6)
        } else {
            setSpacing1(12)
        }
    }, [width])

    return (
        <div className={classes.root}>
            <div className={classes.topNav}>
                <div><h3>Products</h3></div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                    >
                        <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
                        <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
                        <MenuItem value={"jewelery"}>jewelery</MenuItem>
                        <MenuItem value={"electronics"}>electronics</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={classes.productsContainer}>
                <Grid container spacing={3}>
                    {productsDisplayContainer}
                </Grid>
            </div>
        </div>
    )
}

export default Products
