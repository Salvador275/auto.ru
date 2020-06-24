import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 y-navbar" light>
          <Container>
            <NavbarBrand tag={Link} className="y-logo y-white-text" to="/">auto.ru</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse className="d-sm-inline-flex flex-sm-row y-header-menu" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow central y-space-around">
                <NavItem>
                    <NavLink tag={Link} className="text-light" to="/catalog">Каталог</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-light" to="/about">О проекте</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-light" to="/contacts">Контакты</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-light" to="/tosell">Продать</NavLink>
                </NavItem>
              </ul>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/signin">Войти</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light">|</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/register">Регистрироваться</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
