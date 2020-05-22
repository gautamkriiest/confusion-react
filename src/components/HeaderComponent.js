import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            // react fragment <React.Fragment>
            <> 
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand className="mr-auto" href="/">
                                <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/>
                            </NavbarBrand>
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home">
                                                <span className="fa fa-home">Home</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/aboutus">
                                                <span className="fa fa-info">About Us</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/menu">
                                                <span className="fa fa-list">Menu</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contactus">
                                                <span className="fa fa-address-card">Contact Us</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>Description Here ......</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;