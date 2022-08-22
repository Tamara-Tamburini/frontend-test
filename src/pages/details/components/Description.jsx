import { List } from "antd";

function Description({ details }) {
  var data = [
    { title: "CPU", feature: details.cpu },
    { title: "RAM", feature: details.ram },
    { title: "Operating System", feature: details.os },
    { title: "Display Size", feature: details.displaySize },
    { title: "Battery", feature: details.battery },
    { title: "Dimentions", feature: details.dimentions },
    { title: "Weight", feature: details.weight },
  ];

  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<div>{item.title}</div>}
            description={item.feature}
          />
        </List.Item>
      )}
    />
  );
}

export default Description;
