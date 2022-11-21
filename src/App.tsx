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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState<User[]>(users);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleStatus = (userId: number, nextSeen: boolean) => {
    const newArr = allUsers.map((user: User) => {
      if (user.id === userId) {
        return { ...user, active: nextSeen };
      } else {
        return { ...user, active: false };
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
          <span className="nav-title">Users Dashboard</span>
          <button onClick={handleToggleModal} className="btn-toggle">
            <span className="btn-text">Show users</span>
          </button>
        </div>
      </nav>
      <div className="section-center">
        <h3>
          {activeUser.length > 0
            ? `Active user: ${activeUser} `
            : "No active user"}
        </h3>
      </div>
      {isModalOpen ? (
        <Modal
          toggle={handleToggleModal}
          allUsers={allUsers}
          setAllUsers={setAllUsers}
          toggleStatus={handleStatus}
          handleName={handleName}
          handleEmail={handleEmail}
        />
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;

  nav {
    align-items: center;
    display: flex;
    height: fit-content;
    padding: 20px 0;
    width: 100%;
    justify-content: center;
    box-shadow: 0 5px 5px 1px gray;

    .nav-center {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 90%;

      .nav-title {
        font-size: 20px;
        font-weight: 400;
        @media (min-width: 700px) {
          font-size: 30px;
        }
      }
    }
  }
  .btn-toggle {
    padding: 8px 10px;
    background-color: #d80d30;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;

    :hover {
      background-color: #ad0a20;
    }

    .btn-text {
      font-size: 12px;
    }

    @media (min-width: 700px) {
      font-size: 15px;
    }
  }
  .section-center {
    width: 90%;
    display: flex;
    justify-content: center;

    h3 {
      font-size: 20px;

      @media (min-width: 700px) {
        font-size: 25px;
      }
    }
  }
`;

export default App;
