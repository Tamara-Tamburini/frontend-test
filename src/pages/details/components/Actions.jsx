import { Form, Button } from "antd";
import { postAppCart } from "../../../services/mobileServices";
import FormItem from "./FormItem";

function Actions({ id, options, counter }) {
  const handleSummit = (values) => {
    const formData = {
      id: id,
      colorCode: values.color ? values.color : "",
      storageCode: values.storage ? values.storage : "",
    };

    // Send data and set it to locale storage
    postAppCart(formData).then((response) => {
      const newResponse = response.count;
      const oldResponse =
        window.localStorage.getItem("count") === null
          ? 0
          : window.localStorage.getItem("count");

      window.localStorage.setItem(
        "count",
        parseInt(oldResponse) + parseInt(newResponse)
      );

      // Uses cart couter hook to set count to the cart component
      counter(parseInt(oldResponse) + parseInt(newResponse));
    });
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
            <FormItem optionsGroup={options.colors} nameOptions={"Color"}/>
          ) : null}
          {options.storages ? (
            <FormItem optionsGroup={options.storages} nameOptions={"Storage"}/>
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
