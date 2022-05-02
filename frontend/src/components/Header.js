import React from 'react';
import { PropTypes } from 'prop-types';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#eeee'
}

const Header = ({ title }) => {
    return (
    <Navbar style={navbarStyle} variant="light">
        <Container>
            <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }}/>
        </Container>
    </Navbar>
      )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;