import React from 'react'
import { Container, Navbar,  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Naav = () => {
    const menus = [
        {
            name:"Home",
            id:1,
            path:"/"        
        },
        {
            name:"About Us",
            id:2,
            path:"/about"        
        },
        {
            name:"WishList",
            id:3,
            path:"/wishlist"        
        },
    ]
    return (
        <div>
            <Navbar exp="lg" className='fixed-top'>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/" className="text-uppercase">

                            Melih E-Commerce

                            </NavLink>
                            <Navbar.Toggle aria-controls="navbarScrool" />
                            <Navbar.Collapse id='navbarScrool'>
                                <Nav className="ms-auto my-2 my-lg-0" style={{maxHeight:"100px" }} navbarScroll>
                                    
                                    {
                                        menus.map((menu)=>(
                                            <NavLink
                                            key={menu.id}
                                            to={menu.path}>
                                            {menu.name}
                                            </NavLink>
                                        ))
                                    }

                                </Nav>

                            </Navbar.Collapse>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            


        </div>
    );
    
}


export default Naav;