import React, { useState } from "react";
import users from "./users-mock.json";
import Modal from "./components/Modal";

import styled from "styled-components";

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

  let activeUser: string[] = allUsers
    .filter((user) => user.active === true)
    .map((newUser) => {
      return newUser.email;
    });

  return (
    <Wrapper>
      <nav className="nav">
        <div className="nav-center">
          <h2>User Status Dashboard</h2>
          <button onClick={handleToggleModal} className="btn-toggle">
            Show users
          </button>
        </div>
      </nav>
      <div className="section-center">
        <h1>
          {activeUser.length > 0
            ? `Active user: ${activeUser} `
            : "No active user"}
        </h1>
      </div>
      {isModalOpen ? (
        <Modal
          toggle={handleToggleModal}
          allUsers={allUsers}
          setAllUsers={setAllUsers}
          toggleStatus={handleStatus}
          handleName={handleName}
          handleEmail={handleEmail}
          activeUser={activeUser}
        />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  .nav {
    align-items: center;
    display: flex;
    height: fit-content;
    padding: 20px 0;
    width: 100%;
    justify-content: center;
    box-shadow: 1px 1px 10px grey;

    .nav-center {
      display: flex;
      justify-content: space-between;
      width: 90%;
    }
  }

  .btn-toggle {
    background-color: #d80d30;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;

    :hover {
      background-color: #ad0a20;
    }
  }

  .section-center {
    display: flex;
    justify-content: center;
  }
`;

export default App;
