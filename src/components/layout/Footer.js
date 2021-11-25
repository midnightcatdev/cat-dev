import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Footer extends Component {
    static defaultProps = {
        title: 'This is a Footer',

    };
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return (
            <footer className='navbar bg-primary'>
                <h1>
                     {this.props.title}
                </h1>
            </footer>
        );
    }
}

export default Footer;
