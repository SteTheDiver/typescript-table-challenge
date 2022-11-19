import React, { useState } from "react";

import styled from "styled-components";
import Modal from "./components/Modal";
import users from "./users-mock.json";

export type User = {
  id: number;
  name: string;
  email: string;
  active: boolean;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [allUsers, setAllUsers] = useState<User[]>(users);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleStatus = (userId: number, nextSeen: boolean) => {
    const newArr = allUsers.map((user: User) => {
      if (user.id === userId) {
        return { ...user, active: nextSeen };
      } else {
        return user;
      }
    });
    setAllUsers(newArr);
  };
  //   setAllUsers(
  //     allUsers.map((user: User) => {
  //       if (user.id === userId) {
  //         return { ...user, active: nextSeen };
  //       } else {
  //         return user;
  //       }
  //     })
  //   );
  // };
  const handleName = (userId: number, newName: string) => {
    const newArr = allUsers.map((user: User) => {
      if (user.id === userId) {
        return { ...user, name: newName };
      } else {
        return user;
      }
    });
    setAllUsers(newArr);
  };
  const handleEmail = (userId: number, newEmail: string) => {
    const newArr = allUsers.map((user: User) => {
      if (user.id === userId) {
        return { ...user, email: newEmail };
      } else {
        return user;
      }
    });
    setAllUsers(newArr);
  };

  let foo = allUsers
    .filter((user) => user.active === true)
    .map((newUser) => {
      return newUser.email;
    });

  console.log(foo);

  console.log(isModalOpen);

  return (
    <Wrapper className="App">
      <button onClick={handleToggleModal} className="btn-toggle">
        Toggle Modal
      </button>
      <h1>{foo}</h1>
      {isModalOpen ? (
        <Modal
          toggle={handleToggleModal}
          allUsers={allUsers}
          setAllUsers={setAllUsers}
          toggleStatus={handleStatus}
          handleName={handleName}
          handleEmail={handleEmail}
          // foo={foo}
          // filteredUsers={filteredUsers}
        />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .btn-toggle {
    padding: 15px;
    background-color: #d80d30;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    :hover {
      background-color: #ad0a20;
    }
  }
`;

export default App;
