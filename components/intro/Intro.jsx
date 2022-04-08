import Layout from "../Layout/layout"
import { useState } from "react";


import { portfolio_article__intro } from "./Intro.module.scss"

export default function Intro({children, images}) {
    const [currentImage, setCurrentImage] = useState(0),
          prevDisabled = currentImage <= 0,
          nextDisabled = currentImage >= (images.length - 1);

    const setPrev = () => {
      if (prevDisabled) return;
      setCurrentImage(currentImage - 1);
    };

    const setNext = () => {
      if (nextDisabled) return;
      setCurrentImage(currentImage + 1);
    };

    return (
      <div className={portfolio_article__intro}>
        <Layout>
          <div className="grid">
            <div className="g-col-8 justify-self-end align-self-center mr-3">
              <img src={images[currentImage]} />
            </div>
            <div className="g-col-4 align-self-center ">
              {children}
              {images.length > 1 &&
                <div className="mt-4">
                  <a href="#" className={`btn mr-3 ${prevDisabled && "disabled"}`} onClick={setPrev}> &lt; Prev</a>
                  <a href="#" className={`btn ${nextDisabled && "disabled"}`} onClick={setNext}>Next &gt; </a>
                </div>
              }
            </div>
          </div>
        </Layout>
      </div>
    )
}