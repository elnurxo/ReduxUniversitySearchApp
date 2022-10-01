import { Table, Form, Button, Input } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchUniversities from "./api/getUniversities";
import {
  getUniversities,
  getUniversitiesPending,
  getUniversitiesError,
} from "./redux/reducers/university.reducer";
import { Spin } from "antd";

function App() {
  const [form] = Form.useForm();
  const universities = useSelector(getUniversities);
  const pending = useSelector(getUniversitiesPending);
  const error = useSelector(getUniversitiesError);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUniversities()(dispatch);
  }, [dispatch]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Alpha Code",
      dataIndex: "alpha_two_code",
      key: "alpha_two_code",
    },
    {
      title: "University Website",
      dataIndex: "web_pages",
      key: "web_pages",
      render: (text) => (
        <a target="_blank" rel="noreferrer" href={`${text}`}>
          {text}
        </a>
      ),
    },
  ];

  const submitSearch = (values) => {
    fetchUniversities(values.university)(dispatch);
    form.resetFields();
  };

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <div>
          <h1 style={{ color: "red",fontWeight: "bold"}}>Error has occurred...</h1>
          <h1 style={{textAlign:'center',fontWeight:'bolder'}}>︺︹︺</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h1 style={{textAlign:'center',marginBottom:'30px',fontWeight:'bolder'}}>Search Universities from all across the world!</h1>
        <Form
          form={form}
          name="search"
          initialValues={{
            remember: true,
          }}
          onFinish={submitSearch}
          autoComplete="off"
        >
          <Form.Item
            style={{ width: "50%" }}
            label="University Name"
            name="university"
            rules={[
              {
                required: true,
                message: "University name is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button className="searchBtn" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
        {/* Loading Data */}
        {pending ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spin size="large" />
          </div>
        ) : (
          <Table rowKey={"name"} dataSource={universities} columns={columns} />
        )}
      </div>
    </>
  );
}

export default App;
