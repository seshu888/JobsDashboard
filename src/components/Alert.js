import React, { useContext } from "react";
import styled from "styled-components";
import ToastContext from "../context/toastContext";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
const Wrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 50px;
  min-width: 200px;
  height: 50px;
  z-index:100;

  .toast-succ {
    background-color: var(--green-dark);
    height: 100%;
    box-shadow: var(--shadow-3);
    color: var(--white);

    &:hover {
      box-shadow: var(--shadow-5);
    }
    .text {
      padding-top: 0.6rem;
    }
    .close-icon {
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }

  .toast-danger {
    background-color: var(--red-dark);
  }
`;
const Alert = () => {
  const { openToast, handleCloseToast, msg } = useSelector(state=>state.toast);
  return (
    <Wrapper>
      <div
        className={
          msg.type === "danger" ? "toast-succ toast-danger" : "toast-succ "
        }
      >
        <p className="close-icon" onClick={handleCloseToast}>
          <AiOutlineClose />
        </p>
        <p className="text">{msg.text}</p>
      </div>
    </Wrapper>
  );
};

export default Alert;
