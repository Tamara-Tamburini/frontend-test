import { Skeleton, Row } from "antd";
import Item from "./Item";

function ItemList({ items, filteredItems }) {
  items = filteredItems.length > 0 ? filteredItems : items

  if (!items) {
    return <Skeleton />;
  }

  return  (
    <>
      <Row align="middle" gutter={[24, 24]} className="listWrapper">
        <Item items={items} />
      </Row>
    </>
  )

}
export default ItemList;
