import { useState } from "react";

import Layout from "../Layout/layout"
import { 
  intro,
  content,
  gallery,
  copy,
  navigator,
} from "./Intro.module.scss"

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
      <div className={intro}>
        <Layout>
          <div className={content}>
            <div className={gallery}>
              <img src={images[currentImage]} />
            </div>
            <div className={copy}>
              {children}              
            </div>
            {images.length > 1 &&
              <div className={navigator}>
                <a href="#" className={`btn mr-3 ${prevDisabled && "disabled"}`} onClick={setPrev}> &lt; Prev</a>
                <a href="#" className={`btn ${nextDisabled && "disabled"}`} onClick={setNext}>Next &gt; </a>
              </div>
            }
          </div>
        </Layout>
      </div>
    )
}