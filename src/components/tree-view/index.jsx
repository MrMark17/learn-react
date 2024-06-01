import MenuList from "./menu-list";
// eslint-disable-next-line react/prop-types
export default function TreeView({ menus = [] }) {
  return (
    <div>
      <MenuList list={menus} />
    </div>
  );
}
