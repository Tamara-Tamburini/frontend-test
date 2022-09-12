import { Form, Radio } from "antd";

function FormItem({ optionsGroup, nameOptions }) {
  return (
    <Form.Item
      name={nameOptions.toLowerCase()}
      label={nameOptions + "s"}
      initialValue={optionsGroup[0].code}
    >
      <Radio.Group defaultValue={optionsGroup[0].code}>
        {optionsGroup.map((item, index) => {
          return (
            <Radio.Button key={index} value={item.code}>
              {item.name}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </Form.Item>
  );
}

export default FormItem;
