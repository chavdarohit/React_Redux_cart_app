/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import { MaterialUISwitch } from "./MaterialUiSwitch";
import Menu from "@mui/material/Menu";
import { useSelector } from "react-redux";
import "../components/Style.css";
import { Link } from "react-router-dom";

const Header = () => {
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log("getData main page", getData);

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
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 15px",
                    borderBottom: "2px solid #000"
                  }}
                >
                  <h4>Photos</h4>
                  <h4 style={{ marginRight: "90px" }}>Restaurant</h4>
                </div>
                <div
                  className="grid-container card-details"
                  style={{
                    width: "23rem",
                    cursor: "pointer"
                  }}
                >
                  {getData.map((item) => {
                    return (
                      <>
                        <div>
                          <Link to={`/cart/${item.id}`} onClick={handleClose}>
                            <img
                              src={item.imgdata}
                              alt={item.rname}
                              style={{
                                width: "7rem",
                                height: "6rem",
                                padding: "0 0 0 15px"
                              }}
                            />
                          </Link>
                        </div>
                        <div>
                          <p>{item.rname}</p>
                          <p>Price: {item.price}₹</p>
                          <p>Quantity: {item.qnty}</p>

                          <p class="smalltrash">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="50"
                              height="50"
                              viewBox="0 0 72 72"
                            >
                              <path d="M 32 13 C 30.895 13 30 13.895 30 15 L 30 16 L 17 16 C 14.791 16 13 17.791 13 20 C 13 21.973645 14.432361 23.602634 16.3125 23.929688 L 18.707031 52.664062 C 19.053031 56.811062 22.520641 60 26.681641 60 L 45.318359 60 C 49.479359 60 52.945969 56.811062 53.292969 52.664062 L 55.6875 23.929688 C 57.567639 23.602634 59 21.973645 59 20 C 59 17.791 57.209 16 55 16 L 42 16 L 42 15 C 42 13.895 41.105 13 40 13 L 32 13 z M 24.347656 24 L 47.652344 24 L 45.396484 51.082031 C 45.352484 51.600031 44.918438 52 44.398438 52 L 27.601562 52 C 27.081562 52 26.647469 51.600031 26.605469 51.082031 L 24.347656 24 z"></path>
                            </svg>
                          </p>
                        </div>

                        <div>
                          <p class="largetrash">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="50"
                              height="50"
                              viewBox="0 0 72 72"
                            >
                              <path d="M 32 13 C 30.895 13 30 13.895 30 15 L 30 16 L 17 16 C 14.791 16 13 17.791 13 20 C 13 21.973645 14.432361 23.602634 16.3125 23.929688 L 18.707031 52.664062 C 19.053031 56.811062 22.520641 60 26.681641 60 L 45.318359 60 C 49.479359 60 52.945969 56.811062 53.292969 52.664062 L 55.6875 23.929688 C 57.567639 23.602634 59 21.973645 59 20 C 59 17.791 57.209 16 55 16 L 42 16 L 42 15 C 42 13.895 41.105 13 40 13 L 32 13 z M 24.347656 24 L 47.652344 24 L 45.396484 51.082031 C 45.352484 51.600031 44.918438 52 44.398438 52 L 27.601562 52 C 27.081562 52 26.647469 51.600031 26.605469 51.082031 L 24.347656 24 z"></path>
                            </svg>
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
                <hr></hr>
                <p className="text-center">Total: ₹ 300</p>
              </>
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
