import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App.jsx";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      console.log(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return <div></div>;
};

export default Orders;
