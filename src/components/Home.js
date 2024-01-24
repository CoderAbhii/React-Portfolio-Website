import React from 'react'
import pic1 from "./images/project1.png";
import pic2 from "./images/project2.png";
import pic3 from "./images/project3.png";
import "./Css/Home.css";

const Hero = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://c.tenor.com/NOYF3f82b_gAAAAC/programmer.gif" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-3">Welcome To <span>CodeWithAbhii</span></h2>
            <p className="lead">Confused on which stack to take? I have got you covered. Browse courses and find out the best course for you & best stack for you. Its free! Code With Abhii is my attempt to teach basics and new techniques to learn web development & software development.</p>
            <div className="d-grid gap-2 d-md-flex">
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center fw-bold">Top Projects</h1>
        <div className="card-group">
          <div className="card m-3 shadow mb-5 bg-body rounded" style={{ width: "23rem" }}>
            <img src={pic1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text text-muted">Project 1</p>
              <h5 className="card-title">Text - Analyzer App</h5>
              <p className="card-text">This is text analyzer app which is build in ReactJS and Bootstrap framework. This app also translate your text in hindi with 65% accuracy.</p>
              <a href="/" className="btn btn-sm rounded-pill p-2 fw-bold">Github Link</a>
            </div>
          </div>
          <div className="card m-3 shadow mb-5 bg-body rounded" style={{ width: "23rem" }}>
            <img src={pic2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text text-muted">Project 2</p>
              <h5 className="card-title">Calculator</h5>
              <p className="card-text">This is simple Calculator which is build in pure HTML CSS JAVASCRIPT. It calculates addition, subtraction, multiplication, divide.</p>
              <a href="/" className="btn btn-sm rounded-pill p-2 fw-bold">Github Link</a>
            </div>
          </div>
          <div className="card m-3 shadow mb-5 bg-body rounded" style={{ width: "23rem" }}>
            <img src={pic3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text text-muted">Project 3</p>
              <h5 className="card-title">Neumorphism Icons</h5>
              <p className="card-text">This is Neumorphism Icons which is made in HTML & pure CSS with Neumorphism ui. This type of ui is most attractive for users.</p>
              <a href="/" className="btn btn-sm rounded-pill p-2 fw-bold">Github Link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
