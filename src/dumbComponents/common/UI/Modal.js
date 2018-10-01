import React, { Component } from "react";
import Backdrop from "dumbComponents/common/UI/Backdrop";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 40%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  overflow-x: hidden;
  overflow-y: auto;
`;

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <StyledModal
          style={{
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </StyledModal>
      </React.Fragment>
    );
  }
}

export default Modal;
