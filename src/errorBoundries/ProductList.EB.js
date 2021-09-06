/**
 * Not logically implemented
 */

import React, { Component } from 'react'

export class ProductListEB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log('error: ', error);
        console.log('info:', info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>something went wrong!</h1>
        }
        return this.props.children
    }
}

export default ProductListEB
