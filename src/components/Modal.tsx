import React from "react";

import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { User } from "../App";

type Props = {
  allUsers: User[];
  setAllUsers: Function;
  toggle: () => void;
  toggleStatus: (id: number, status: boolean) => void;
  handleName: (id: number, name: string) => void;
  handleEmail: (id: number, email: string) => void;
};

const Modal = ({
  toggle,
  allUsers,
  toggleStatus,
  handleName,
  handleEmail,
}: //   foo
Props) => {
  console.log(allUsers);

  return (
    <Wrapper>
      <header>
        <div className="header-center">
          <h2>Users</h2>
          <button onClick={toggle} className="btn-close">
            <AiOutlineClose />
          </button>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        {allUsers.map((user) => {
          const { id, name, email, active } = user;
          return (
            <tr
              key={id}
              style={{
                borderBottom: "1px solid grey",
                marginTop: "4px",
                padding: "0,3px",
              }}
            >
              <td>
                <input
                  type="text"
                  name="name"
                  id=""
                  value={name}
                  onChange={(e: any) => handleName(id, e.target.value)}
                  style={{ backgroundColor: "transparent", border: "none" }}
                />
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  id=""
                  value={email}
                  onChange={(e: any) => handleEmail(id, e.target.value)}
                  style={{ backgroundColor: "transparent", border: "none" }}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="active"
                  id=""
                  onChange={(e: any) => toggleStatus(id, e.target.checked)}
                  checked={active}
                  // disabled={ ? true : false}
                />
                {active ? "Online" : "Offline"}
              </td>
            </tr>
          );
        })}
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  position: absolute;
  top: 20%;
  left: 25%;
  width: 40%;
  background-color: rgba(245, 245, 245, 1);
  height: 50%;
  overflow: auto;
  border: 1px solid lightgray;
  border-radius: 4px;

  header {
    background-color: rgba(245, 245, 245, 0.5);
    width: 100%;
    border-bottom: 1px solid #3f1111;
    display: flex;
    justify-content: center;

    .header-center {
      width: 90%;
      display: flex;
      justify-content: space-between;
    }
  }

  .btn-close {
    color: red;
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
  }

  table {
    padding: 20px;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  td {
    text-align: left;
    width: fit-content;
  }
`;

export default Modal;
