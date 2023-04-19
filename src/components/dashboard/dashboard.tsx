import { Button, Form, Input, InputNumber } from "antd";
import { useState } from "react";

const ItemCard = () => {
  const [number, setNumber] = useState<number>(1);

  const handleChange = (value: number | undefined | null) => {
    console.log(value);
    setNumber(number || 0);
  };
  console.log("valueee", number);
  const handleIncrement = () => {
    setNumber(number => number + 1);
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const onFinish = (values: any) => {
    console.log("Success:", number, values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1 className="font-semibold">products</h1>
      <div className="flex gap-5 p-6">
        <button className="bg-orange-400" onClick={handleIncrement}>
          ++++
        </button>
        <InputNumber min={0} value={number} onChange={handleChange} />
        <button className="bg-orange-400" onClick={handleDecrement}>
          ----
        </button>
      </div>
      <Form
        initialValues={{ abc: number }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="w-full flex justify-between">
          <label className="text-xl font-semibold  w-2/4">Items</label>
          <label className="text-xl font-semibold flex justify-center w-1/4">
            Qty
          </label>
          <label className="text-xl font-semibold flex justify-center w-1/4">
            Price
          </label>
        </div>
        <div className="w-full py-2 flex justify-between">
          <div className=" w-2/4">
            <div className="flex flex-col">
              <p className="_grey-color">Product ID #5353</p>
              <div className="flex items-center gap-3">
                <img
                  className="w-20 h-16 rounded shadow"
                  src="https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg"
                  alt="img"
                />
                <h1 className="font-semibold text-sm">
                  Laptop Lenovo Series 4
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center w-1/4">
            <div className="flex gap-5 p-6">
              <button
                type="button"
                className="bg-orange-400"
                onClick={handleIncrement}
              >
                ++++
              </button>
              <Form.Item name="abc">
                <InputNumber
                  // type="number"
                  min={1}
                  value={number}
                  onChange={handleChange}
                  
                />
                {/* <input value={number} /> */}
              </Form.Item>
              <button
                type="button"
                className="bg-orange-400"
                onClick={handleDecrement}
              >
                ----
              </button>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center w-1/4">
            <p className="_grey-color">$ 103.00</p>
            <p className="shadow px-1 rounded">$ 177.99</p>
          </div>
        </div>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" className="bg-yellow-400" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ItemCard;
