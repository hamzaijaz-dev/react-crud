import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [original, setOriginal] = useState([]);
  useEffect(() => {
    if (users.length === 0) {
      //getUsers();
      setUsers(original);
    }
  }, [users]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setOriginal(json);
      });
  };

  const filterData = (e) => {
    let value = e.target.value;
    setUsers(original.filter((t) => t.name.toLowerCase().includes(value)));

    // setUsers(
    //   original.filter((t) => {
    //     return t.name.toLowerCase().includes(value);
    //   })
    // );
  };

  const deleteUser = (value) => {
    setUsers(users.filter((user) => user.id !== value));
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col" className="">
              <input type="text" onChange={filterData} />{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>
                {' '}
                  <Button variant="danger" onClick={() => deleteUser(user.id)}>X</Button>
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
