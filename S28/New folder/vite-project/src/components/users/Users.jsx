import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Users() {
  const [state, setState] = useState([]);
  const navigate = useNavigate("");
  useEffect(() => {
    axios
      .get("http://localhost:8989/users/getallusers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        try {
          if (res.data.ok) {
            console.log(res);
            setState(res.data.result);
          } else {
            throw Error(res.data.result);
          }
        } catch (error) {
          alert(error.message);
        }
      })
      .catch(() => {
        alert("error while getting users data");
      });
  }, []);
  return (
    <div style={{ color: "white" }}>
      <h2>Users Information</h2>
      <table rules="rows">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PASSWROD</th>
          <th>ACTION</th>
        </tr>
        {state.length > 0 &&
          state.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home Page
      </button>
    </div>
  );
}

export default Users;
