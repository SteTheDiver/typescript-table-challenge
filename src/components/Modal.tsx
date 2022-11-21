import React, { ChangeEvent, useEffect } from "react";

import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { User } from "../App";

type Props = {
  allUsers: User[];
  setAllUsers: Function;
  toggle: () => void;
  toggleStatus: (id: number, active: boolean) => void;
  handleName: (id: number, name: string) => void;
  handleEmail: (id: number, email: string) => void;
};

const Modal = ({
  toggle,
  allUsers,
  toggleStatus,
  handleName,
  handleEmail,
}: Props) => {
  const refs = allUsers.reduce((acc: any, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleLoad = (id: number) =>
    refs[id]?.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  let activeArr: number[] = allUsers
    .filter((user) => user.active === true)
    .map((user) => {
      return user.id;
    });

  const activeId: number | any = activeArr.pop();

  const handleScroll = () => handleLoad(activeId);

  useEffect(() => {
    handleScroll();
  });

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
          <tr className="row-header">
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => {
            const { id, name, email, active } = user;
            return (
              <tr key={id} className="row-body" ref={refs[id]}>
                <td>
                  <input
                    type="text"
                    name="name"
                    id=""
                    required
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
                    required
                    id=""
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleEmail(id, e.target.value)
                    }
                    style={{ backgroundColor: "transparent", border: "none" }}
                  />
                </td>
                <td style={{ width: "fit-content" }}>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="active"
                      id=""
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        toggleStatus(id, e.target.checked)
                      }
                      checked={active}
                    />
                    <span className="slider round"></span>
                  </label>
                </td>
              </tr>
            );
          })}
        </tbody>
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
  overflow: hidden;
  width: 80%;
  background-color: rgba(245, 245, 245, 1);
  border: 1px solid lightgray;
  border-radius: 4px;

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

    .header-center {
      width: 97%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }

    .btn-close {
      display: flex;
      color: black;
      background-color: transparent;
      border: none;
      font-size: 1.7rem;
      cursor: pointer;

      :hover {
        color: #d80d30;
      }
    }
  }
  table {
    overflow: scroll;
    table-layout: fixed;
    font-family: Arial, Helvetica, sans-serif;
  }

  thead {
    height: 2em;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
  }

  tbody {
    display: block;
    height: 500px;
    overflow-y: scroll;
    padding: 0 5px;
  }

  tr {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 2rem;
    margin-top: 4px;
    width: 100%;
  }

  .row-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    width: calc(100% - 15px);
    margin-top: 4px;

    th {
      font-size: 15px;

      @media (min-width: 700px) {
        font-size: 17px;
      }
    }
  }

  .row-body {
    width: 100%;
    td {
      width: 100%;
    }
  }

  .row-body:nth-child(odd) {
    background-color: rgba(229, 215, 218, 0.5);
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    font-size: 11.5px;
    background-color: transparent;

    @media (min-width: 850px) {
      width: 80%;
      font-size: 15px;
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
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
    transition: 0.2s;
  }
  input:checked + .slider {
    background-color: #1c8b12;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + .slider:before {
    transform: translateX(17px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`;

export default Modal;
