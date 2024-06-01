// import Accordion from "./components/accordion";
// import ColorRandom from "./components/color-random";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data.js";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <ColorRandom /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={5} limit={10} /> */}
      {/* <LoadMoreData /> */}
      <TreeView menus={menus} />
    </>
  );
}

export default App;
