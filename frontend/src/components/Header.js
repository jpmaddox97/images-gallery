import React from 'react';
import { PropTypes } from 'prop-types';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: 'lightblue'
}

const Header = ({ title }) => {
    return (
    <Navbar style={navbarStyle} variant="light">
        <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
    </Navbar>
      )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;