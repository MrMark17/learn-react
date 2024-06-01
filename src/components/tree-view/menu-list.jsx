import MenuItem from "./menu-item";

// eslint-disable-next-line react/prop-types
export default function MenuList({ list = [] }) {
  return (
    <>
      <ul>{list && list.length ? list.map((item, index) => <MenuItem item={item} key={index} />) : null}</ul>
    </>
  );
}
