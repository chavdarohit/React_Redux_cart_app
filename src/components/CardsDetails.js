import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../components/Style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADD, REMOVE, REMOVE_INDIVIDUAL } from "../redux/actions/actions";

const CardsDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  //add Data
  const sendToCart = (item) => {
    dispatch(ADD(item));
  };
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(REMOVE(id));
  };

  const removeOne = (item) => {
    dispatch(REMOVE_INDIVIDUAL(item));
  };

  const history = useNavigate();

  const getData = useSelector((state) => state.cartReducer.carts);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };
  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>
      <section className="container mt-3">
        <div className="iteamsdetails">
          {data.map((ele) => {
            return (
              <>
                <div className="items_img">
                  <img src={ele.imgdata} alt=""></img>
                </div>
                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <strong>Restaurant </strong>: {ele.rname}
                        </p>
                        <p>
                          <strong>Price </strong>:₹ {ele.price}
                        </p>
                        <p>
                          <strong>Dishes </strong>:{ele.address}
                        </p>
                        <p>
                          <strong>Total </strong>:₹ {ele.price * ele.qnty}
                        </p>
                        <div
                          className="mt-5 d-flex justify-content-between align-item-center"
                          style={{
                            width: 100,
                            cursor: "pointer",
                            background: "#ddd",
                            color: "#111"
                          }}
                        >
                          <span
                            style={{ fontSize: 24 }}
                            onClick={
                              ele.qnty <= 1
                                ? () => {
                                    remove(ele.id);
                                    history("/");
                                  }
                                : () => {
                                    removeOne(ele);
                                  }
                            }
                          >
                            -
                          </span>
                          <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => sendToCart(ele)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating :</strong>
                          <span
                            style={{
                              backgroundColor: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px"
                            }}
                          >
                            {ele.rating} ★
                          </span>
                        </p>
                        <p>
                          <strong>Order Review :</strong>
                          <span> {ele.somedata}y</span>
                        </p>
                        <p className="d-flex align-items-center">
                          <strong>Remove :</strong>
                          <span style={{ padding: "10px" }}>
                            <button
                              class="remove"
                              onClick={() => {
                                remove(ele.id);
                                history("/");
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 69 14"
                                class="svgIcon bin-top"
                              >
                                <g clip-path="url(#clip0_35_24)">
                                  <path
                                    fill="black"
                                    d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_35_24">
                                    <rect
                                      fill="white"
                                      height="14"
                                      width="69"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 69 57"
                                class="svgIcon bin-bottom"
                              >
                                <g clip-path="url(#clip0_35_22)">
                                  <path
                                    fill="black"
                                    d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_35_22">
                                    <rect
                                      fill="white"
                                      height="57"
                                      width="69"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
