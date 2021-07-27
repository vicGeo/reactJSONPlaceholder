import { useEffect, useState } from "react";
import { TABLE_TITLES, URL, USER_PER_PAGE } from "./utils/constants";
import DataTable from "./components/DataTable";
import './App.css';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./components/Pagination";


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

  const handleClick = num => setPage(num);

  const sortField = (field) => {
    const userSorted = [...users].sort((a, b) => {
      if (field === "ID") {
        return a.id - b.id;
      }
      if (field ==="NAME") {
        return a.name.localeCompare(b.name);

      }
      if (field === "USERNAME") {
        return a.username.localeCompare(b.username);
      }
    })
    setUsers(userSorted);

}



  return (
    <div className="App">
    <h1>GEDESCO</h1>
    { loading ? <FontAwesomeIcon icon={faSpinner} /> :
    <>
    <DataTable users={users} page={page} titles={TABLE_TITLES} sortField={sortField} />
    <Pagination totalPages={totalPages} handleClick={handleClick} />
    </>
    }
    </div>
  );
}

export default App;
