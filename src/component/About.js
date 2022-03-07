import React, { useState } from "react";

export default function About(props) {
  const [setStyle, mySetStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [setBtn, mySetBtn] = useState("Enable Dark mode");
   const toggleKey = () => {
    if (setStyle.color == "white") {
      mySetStyle({
        color: "black",
        backgroundColor: "white",
      });
      mySetBtn("Enable dark mode");
      props.showAlert("light mode has been enabled", "success");
    } else {
      mySetStyle({
        color: "white",
        backgroundColor: "black",
        borderColor: "white",
      });
      mySetBtn("Enable light Mode");
      props.showAlert("dark mode has been enabled", "success");
    }
  };
  return (
    <div className="container my-10" style={setStyle}>
      <h1 className="container my-3">About Us</h1>
      <div className="accordion" style={setStyle} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={setStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={setStyle}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils is a best platform to convert from uppercase to lowercase.</strong>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et qui numquam, natus voluptatibus, corrupti nobis, magnam voluptatum quae sunt impedit corporis dolore accusantium iusto. Libero, consequatur nostrum? Illo facere molestias esse neque, eveniet cupiditate?<code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={setStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={setStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={setStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={setStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary my-3" onClick={toggleKey}>
          {setBtn}{" "}
        </button>
      </div>
    </div>
  );
}
