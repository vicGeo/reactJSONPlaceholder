import { useEffect, useState } from "react";
import { URL, USER_PER_PAGE } from "./utils/constants";
import DataTable from "./components/DataTable";
import Pagination from "./components/Pagination";
import './App.css';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const res = await axios.get(URL);
        setLoading(false);
        setUsers(res.data);


        setTotalPages(Math.ceil(res.data.length / USER_PER_PAGE));
      }
      fetchData();
  }, []);



  return (
    <div className="App">
    <h1>GEDESCO</h1>
    { loading ? <FontAwesomeIcon icon={faSpinner} /> :
    <>
    <DataTable users={users} page={page} />
    <Pagination totalPages={totalPages} />
    </>
    }
    </div>
  );
}

export default App;
