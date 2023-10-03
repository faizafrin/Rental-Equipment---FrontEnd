import React from "react";
import TopBar from "../Components/TopBar";
import Board from "../Components/Board";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Carousal from "../Components/Carousal";
const Home = () => {
  return (
    <div>
      <TopBar />
      <Carousal/>
      <div style={{ height: "2rem" }}></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 text-center">
            <h1 className="mt-3 rentals">Equipment Rentals</h1>
            <p className="now">is now</p>
            <p className="smater">Smarter</p>
            <p className="moto-description">
              Equiphunt is a one-stop solution for all your equipment needs.
              Scroll down to see what we have for you.
            </p>
          </div>
          <div className="col-md-7 text-center">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://www.ramco.com/hubfs/Evolving-Models-In-Equipment-Rental-Business-1.jpg"
              alt="name"
            />
          </div>
        </div>
      </div>
      <div style={{ height: "5rem" }}></div>
      <div className="container-fluid">
        <div className=" m-auto text-center">
          <Board
            style={"100%"}
            title={"Hire Equipments"}
            desc={
              "Hire tested premium quality equipment for rent at best prices."
            }
            ima={
              "https://www.fatbit.com/fab/wp-content/uploads/2020/01/Online-Heavy-Equipment-Rental-Software-Business-Model.jpg"
            }
            imaStyle={"60px"}
            but={"Hire Equipments"}
          />
        </div>
        <div style={{ height: "5rem" }}></div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                style={{ width: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3njT6dhCa4o-SLeRLGLFXA9DuvGhxjZdaeuvokE9P-yVcOFCpfpPu72zm_8imsAAoQ8&usqp=CAU"
                alt="icon2"
              />
            </div>
            <div className="col-md-8 text-center d-flex align-items-center">
              <div className="">
                <p className="roller">Let's Build the World Together!</p>
                <p className="safety-description">
                  We'll do the heavy lifting so you can focus on what matters
                  the most. Sign up to get started with our services. Got
                  questions? Contact us.
                </p>
                <div className=" ">
                  <Link
                    to="/signup"
                    className="btn btn-outline-primary col-md-3"
                  >
                    SIGN UP
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-primary col-md-3 mx-3 "
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;