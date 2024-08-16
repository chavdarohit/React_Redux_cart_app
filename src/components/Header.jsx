/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import { MaterialUISwitch } from "./MaterialUiSwitch";
import Menu from "@mui/material/Menu";
import { useSelector } from "react-redux";
import { Table } from "@mui/material";
import "../components/Style.css";

const Header = () => {
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log("getData", getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <Navbar.Brand href="/">Add To Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-light">
              Home
            </Nav.Link>
          </Nav>

          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <button class="btn-cart">
              <svg
                class="icon-cart"
                viewBox="0 0 24.38 30.52"
                height="30.52"
                width="24.38"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>icon-cart</title>
                <path
                  transform="translate(-3.62 -0.85)"
                  d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                ></path>
              </svg>
            </button>
          </Badge>
          <MaterialUISwitch sx={{ m: 1 }} />
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button"
          }}
        >
          {
            // if there is items in the cart then show the items in the cart
            getData.length ? (
              <div
                className="grid-container card-details"
                style={{ width: "24rem", cursor: "pointer" }}
              >
                {getData.map((item) => {
                  return (
                    <>
                      <div>
                        <img
                          src={item.imgdata}
                          alt={item.rname}
                          style={{ width: "5rem", height: "5rem" }}
                        />
                      </div>
                      <div>
                        <p>{item.rname}</p>
                        <p>Price: {item.price}₹</p>
                        <p>Quantity: {item.qnty}</p>
                      </div>
                      <div> remove </div>
                    </>
                  );
                })}
              </div>
            ) : (
              // if there is nothing in the cart then show the cart is empty
              <div
                className="card_details d-flex justify-content-center align-items-center"
                style={{
                  width: "24rem",
                  padding: "10px",
                  position: "relative"
                }}
              >
                <a
                  href="#close"
                  className="text-decoration-none text-dark small-close"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "2px",
                    fontSize: "23px",
                    cursor: "pointer"
                  }}
                  onClick={handleClose}
                >
                  x
                </a>
                <p style={{ fontSize: 22 }}>Your cart is empty</p>
                <img
                  src="./cart.gif"
                  alt=""
                  className="emptycart_img"
                  style={{ width: "5rem", padding: 10 }}
                />
              </div>
            )
          }
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
