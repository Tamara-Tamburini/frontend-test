import { Form, Button, Radio } from "antd";

const onChange = (e) => {
  console.log(`radio checked:${e.target.value}`);
};
function Actions({ options }) {
  if (options) {
    return (
      <>
        <Form>
          {options.colors ? (
            <Form.Item label="Colors">
              <Radio.Group
                onChange={onChange}
                defaultValue={options.colors[0].code}
              >
                {options.colors.map((item, index) => {
                  return (
                    <Radio.Button key={index} value={item.code}>
                      {item.name}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            </Form.Item>
          ) : null}
          {options.storages ? (
            <Form.Item label="Storages">
              <Radio.Group
                onChange={onChange}
                defaultValue={options.storages[0].code}
              >
                {options.storages.map((item, index) => {
                  return (
                    <Radio.Button key={index} value={item.code}>
                      {item.name}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            </Form.Item>
          ) : null}
          <Form.Item>
            <Button type="primary" htmlType="submit">Add to Card</Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default Actions;
