import { useState, useEffect } from "react";
import "./styles.css";

/*
  Pseudocode
   Variables
   - images -> array
   - currentSlide -> number
   - errorMsg -> string
   - isLoading -> boolean
   
   Functions
    - getImagesUrl(url) -> fetch(url)
    
    Procedure
    - fetch image
    - asign to state
    - build next & previous btn
*/

// eslint-disable-next-line react/prop-types
export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUrl(getUrl) {
    try {
      setIsLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    fetchUrl(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div>
      <div className="img-slider-container">
        <div className="slider-wrapper">
          {isLoading ? <div className="loader "></div> : ""}
          {images && images.length ? images.map((image, index) => <img className={currentSlide === index ? "current-image" : "current-image hide-current-image"} key={image.id} src={image.download_url} alt={image.download_url} />) : null}
        </div>
        <div className="btn-wrapper">
          <button onClick={() => handlePrev()} className="btn-img-slider">
            prev
          </button>
          <button onClick={() => handleNext()} className="btn-img-slider">
            next
          </button>
        </div>
      </div>
      {/* {isLoading ? <div className="loader"></div> : ""} */}
      {/* {images.map((image) => (
        <div key={image.id}>
          <img src={image.download_url} alt={image.download_url} />
        </div>
      ))} */}
    </div>
  );
}
