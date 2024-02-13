import React from 'react'
import {Container , Nav, Navbar,Button,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./menu.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
const Menu = () => {
    const {isAuth} = useSelector(state => state.user)
    const dispatch = useDispatch()
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{width:"100%" }}>
    <Container>
      
    <Link to="/" className='brand'><Navbar.Brand  >BTounsi</Navbar.Brand></Link>
      
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
                  
            {!isAuth ? <>
            <Link to="/register" className='navmenu '>Register</Link>
              <Link to="/login" className='navmenu '>Login</Link>
              
          
            </> : <>
            <Link to="/" className='navmenu '>Home</Link>
            <Link to="/add">Add</Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>

             <NavDropdown.Item href="#action4">
               Another action
             </NavDropdown.Item>
            <NavDropdown.Divider />
             <NavDropdown.Item href="#action5">
               Something else here
            </NavDropdown.Item>
           </NavDropdown>
            <Link to="/" className='link' onClick={() => dispatch(logout())}>logout</Link>
            </>
            }
            <Form className="d-flex"style={{marginLeft:"400px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  //   <Navbar expand="lg" className="bg-body-tertiary">
  //     <Container fluid>
  //       <Navbar.Brand className='brand'>Btounsi</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="navbarScroll" />
  //       <Navbar.Collapse id="navbarScroll">
  //         <Nav
  //           className="me-auto my-2 my-lg-0"
  //           style={{ maxHeight: '100px' }}
  //           navbarScroll
  //         >
  //           <Nav.Link to="/Register"className='navmenu'>Register</Nav.Link>
  //           <Nav.Link to="/Login"className='navmenu'>Login</Nav.Link>
  //           <Nav.Link to="/"className='navmenu'>Home</Nav.Link>
  //           <NavDropdown title="Link" id="navbarScrollingDropdown">
  //             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
  //             <NavDropdown.Item href="#action4">
  //               Another action
  //             </NavDropdown.Item>
  //             <NavDropdown.Divider />
  //             <NavDropdown.Item href="#action5">
  //               Something else here
  //             </NavDropdown.Item>
  //           </NavDropdown>
           
  // //       
  // //           
  //           {/* <Nav.Link href="#" disabled>
  //             Link
  //           </Nav.Link> */}
  //         </Nav>
    //       <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-success">Search</Button>
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

export default Menu