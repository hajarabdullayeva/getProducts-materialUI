import { useEffect, useState } from "react";
import { axiosInstance } from "./api";
import Loading from "./components/Loading";

const App = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/suppliers");
      setResponse(res.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const postData = async () => {
    await axiosInstance.post("/suppliers", {
      companyName: "Melahet MMC",
      contactName: "Melahet",
    });

    getData();
  };

  const deleteData = async () => {
    await axiosInstance.delete("/suppliers/31");
    getData();
  };

  const updateData = async () => {
    await axiosInstance.put("suppliers/32", {
      companyName: "New Company",
    });
    getData();
  };

  if (loading) return <Loading />;
  if (error) return "Error";
  return (
    <>
      <button onClick={postData}>add</button>
      <button onClick={deleteData}>delete</button>
      <button onClick={updateData}>update</button>

      {response?.map((r) => (
        <p key={r.id}>{r?.companyName}</p>
      ))}
    </>
  );
};

export default App;
