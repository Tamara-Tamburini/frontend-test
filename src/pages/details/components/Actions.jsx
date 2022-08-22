import { Form, Button, Radio } from "antd";
import { postAppCart } from "../../../services/mobileServices";

function Actions({ id, options, counter, cache}) {

  const handleSummit = (values) => {
    const formData = {
      id: id,
      colorCode: values.color ? values.color : "",
      storageCode: values.storage ? values.storage : "",
    };

    postAppCart(formData).then((response) => {
      localStorage.setItem("count", cache(response.count));
      counter(response.count);
      
      console.log(response.count)
    });
    // postAppCart(formData).then((response) => {
    //   localStorage.setItem("count", setCache(response.count));
    //   setCounter(cache.count);
    //   // setCounter(parseInt(cache.count) + 1);
      
    // });
  };

  if (options) {
    return (
      <>
        <Form
          name="addToCartForm"
          initialValues={{ remember: true }}
          onFinish={handleSummit}
        >
          {options.colors ? (
            <Form.Item
              name="color"
              label="Colors"
              initialValue={options.colors[0].code}
            >
              <Radio.Group defaultValue={options.colors[0].code}>
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
            <Form.Item
              name="storage"
              label="Storages"
              initialValue={options.storages[0].code}
            >
              <Radio.Group defaultValue={options.storages[0].code}>
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
            <Button type="primary" htmlType="submit">
              Add to Cart
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default Actions;
