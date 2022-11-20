import React, { ChangeEvent } from "react";

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
  activeUser: string[];
};

const Modal = ({
  toggle,
  allUsers,
  toggleStatus,
  handleName,
  handleEmail,
  activeUser,
}: Props) => {
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleName(id, e.target.value)
                  }
                  style={{ backgroundColor: "transparent", border: "none" }}
                />
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  id=""
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleEmail(id, e.target.value)
                  }
                  style={{ backgroundColor: "transparent", border: "none" }}
                  required
                />
              </td>
              <td style={{ width: "fit-content" }}>
                {/* <label htmlFor="">
                  <input
                    type="checkbox"
                    name="active"
                    id=""
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      toggleStatus(id, e.target.checked)
                    }
                    checked={active}
                    disabled={!active && activeUser.length >= 1 ? true : false}
                  />
                </label> */}
                <label className="switch">
                  <input
                    type="checkbox"
                    name="active"
                    id=""
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      toggleStatus(id, e.target.checked)
                    }
                    checked={active}
                    disabled={!active && activeUser.length >= 1 ? true : false}
                  />
                  <span className="slider round"></span>
                </label>
                {/* {active ? "Online" : "Offline"} */}
              </td>
            </tr>
          );
        })}
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 90%;
  background-color: rgba(245, 245, 245, 1);
  overflow: auto;
  border: 1px solid lightgray;
  border-radius: 4px;
  height: 50%;

  @media (min-width: 1000px) {
    width: 60%;
  }

  header {
    background-color: #dfd7d7;
    width: 100%;
    border-bottom: 1px solid #3f1111;
    display: flex;
    justify-content: center;
    height: 3rem;
    position: sticky;
    top: 0;
    z-index: 100;

    .header-center {
      width: 97%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* height: 50px; */
    }
  }

  .btn-close {
    color: black;
    background-color: transparent;
    border: none;
    font-size: 1.7rem;
    cursor: pointer;

    :hover {
      color: #d80d30;
    }
  }

  table {
    /* height: 50%; */
    padding: 10px;
  }

  thead {
    /* height: 2em; */
    position: sticky;
    top: 15px;
    font-size: 20px;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    width: 100%;
    margin-top: 4px;

    td {
      text-align: left;
      width: 100%;
      padding-right:10px
    }

    input {
      font-size: 16px;
      width: inherit;
      max-width: inherit;
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 22.5px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #c71d1d;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 3.9px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  input:checked + .slider {
    background-color: #1c8b12;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default Modal;
