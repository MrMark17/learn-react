// import Accordion from "./components/accordion";
// import ColorRandom from "./components/color-random";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
// import TreeView from "./components/tree-view";
// import menus from "./components/tree-view/data.js";
// import QrCodeGenerator from "./components/qr-code-generator";
// import LightDarkTheme from "./components/light-dark-theme";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <ColorRandom /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={5} limit={10} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QrCodeGenerator /> */}
      {/* <LightDarkTheme /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </>
  );
}

export default App;
