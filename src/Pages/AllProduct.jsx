import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../Redux/Product/action";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../assets/FirebaseFolder/Firebase";
import { toast, ToastContainer } from "react-toastify";
import "./AllProduct.css";

const Allproduct = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.proReducer);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getData);
  }, []);

  const handleDelete = async (id) => {
    let data = doc(db, "products", id);
    await deleteDoc(data);
    toast.success("Data Deleted Successfully", { autoClose: 3000 });
    dispatch(getData);
  };

  // if (state.loading) return <p>Loading...</p>;
  // if (!state.product || state.product.length === 0) return <p>No products found</p>;

  return (
    <>
      {/* <ToastContainer /> */}
      <section className="main_content dashboard_part large_header_bg">
        <div className="container-fluid g-0">
          <div className="row">
            {/* Other content */}
            <div className="row">
              {state.product.map((el) => {
                return (
                  <div className="" key={el.id}>
                    <div className="white_card position-relative mb_20 ">
                      <div className="card-body">
                        <img src={el.imageURL} alt="Product" height="150"  />
                        <div className="row my-4">
                          <div className="col">
                            <span className="badge_btn_3  mb-1">
                              {el.category}
                            </span>
                            <a className="f_w_400 color_text_3 f_s_14 d-block">
                              {el.product}
                            </a>
                          </div>
                          <div className="col-auto cent">
                            <h4 className="text-dark mt-0">
                              ₹{el.price} &nbsp;&nbsp;
                              <small className="text-muted font-14">
                                <del>₹{el.strikedOffPrice}</del>
                              </small>
                            </h4>
                          </div>
                        </div>
                        <div className="d-grid">
                          <button
                            className="btn_2"
                            onClick={() => navigate(`/product/edit/${el.id}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn_2"
                            onClick={() => handleDelete(el.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Allproduct;
