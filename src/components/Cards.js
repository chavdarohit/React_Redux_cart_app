import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import cardsData from "./CardsData.js";
import "../components/Style.css";
import { CardActionArea, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/actions.js";

const Cards = () => {
  const [cards, setCards] = useState(cardsData);
  const dispatch = useDispatch();
  const sendToCart = (item) => {
    dispatch(ADD(item));
  };
  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Add to Cart Project</h2>
        <div className="row d-flex justify-content-center align-item-center ">
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                sx={{ maxWidth: 345 }}
                className="mx-2 mt-4 card_style"
                style={{ border: "none", cursor: "default" }}
              >
                <CardActionArea style={{ padding: 10 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.imgdata}
                    alt={card.rname}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.rname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {card.price}₹
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div className="button_div d-flex justify-content-center">
                  <CardActions>
                    <button
                      className="add_to_cart col-lg-12"
                      onClick={() => sendToCart(card)}
                    >
                      Add to Cart
                    </button>
                  </CardActions>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
