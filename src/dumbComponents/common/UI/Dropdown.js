import React, {Component} from 'react';
import styled from "styled-components";
import {Manager, Reference, Popper} from 'react-popper';
import colors from "../../../library/colors";

const Container = styled.div`
  background-color: white;
  padding: 16px;
  border: solid 1px ${colors.borderColor};
  visibility: hidden;
    
  &[data-placement*='top'] {
    margin-bottom: 12px;
  }
  
  &[data-placement*='right'] {
    margin-left: 12px;
  }
  
  &[data-placement*='bottom'] {
    margin-top: 12px;
  }
  
  &[data-placement*='left'] {
    margin-right: 12px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  
  &[data-placement*='bottom'] {
    top: -16px;
    left: 0;
    width: 48px;
    height: 16px;
    
    &::before, &::after {
      border-width: 0 8px 8px 8px;
    }
    
    &::before {
      bottom: -7px;
      border-color: transparent transparent #e7ebed transparent;
    }
    
    &::after {
      top: 0;
      border-color: transparent transparent white transparent;
    }
  }
  
  &[data-placement*='top'] {
    bottom: -17px;
    left: 0;
    width: 48px;
    height: 16px;
    
    &::before, &::after {
      border-width: 8px 8px 0 8px;
    }
    
    &::before {
      border-color: #e7ebed transparent transparent transparent;
    }
    
    &::after {
      bottom: 9px;
      border-color: white transparent transparent transparent;
    }
  }
  
  &[data-placement*='right'] {
    left: -16px;
    height: 48px;
    width: 16px;
    
    &::before, &::after {
      border-width: 8px 8px 8px 0;
    }
    
    &::before {
      top: 16px;
      left: 3px;
      border-color: transparent #e7ebed transparent transparent;
    }
    
    &::after {
      left: 4px;
      border-color: transparent white transparent transparent;
    }
  }
  
  &[data-placement*='left'] {  
    right: -16px;
    height: 48px;
    width: 16px;
    
    &::before, &::after {
      border-width: 8px 0 8px 8px;
    }
    
    &::before {
      top: 16px;
      right: 3px;
      border-color: transparent transparent transparent #e7ebed;
    }
    
    &::after {
      right: 4px;
      border-color: transparent transparent transparent white;
    }
  }
  
  &::before {
    content: '';
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    position: relative;
  }
  
  &::after {
    content: '';
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    position: relative;
  }
`;

const Highlight = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 4px;
  background-color: ${colors.primaryColor};
`;

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.tooltipVisible = false;
  }

  handleClick = (e) => {
    if(!this.tooltipVisible) {
      this.tooltipRef.style.visibility = 'visible';
    }
    else {
      this.tooltipRef.style.visibility = 'hidden';
    }

    this.tooltipVisible = !this.tooltipVisible;
  };

  render() {
    const {position, overlay, maxWidth, highlight} = this.props;
    return (
      <Manager>

        <Reference>
          {({ ref }) => (
            React.cloneElement(overlay, {
              innerRef: ref,
              onClick: this.handleClick,
            })
          )}
        </Reference>

        <Popper
          placement={position}
          innerRef={(node) => this.tooltipRef = node}
        >
          {({ ref, style, placement, arrowProps }) => (
            <Container
              innerRef={ref}
              style={{...style, maxWidth: maxWidth || 'auto'}}
              data-placement={placement}
            >
              {highlight && <Highlight/>}

              {this.props.children}

              <Arrow innerRef={arrowProps.ref} data-placement={placement} style={arrowProps.style} />

            </Container>
          )}
        </Popper>
      </Manager>
    );
  }
}