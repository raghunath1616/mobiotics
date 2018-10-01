import React, { Component } from "react";
import { LoadScript } from "services/Utils";
import Textbox from "dumbComponents/common/UI/Textbox";
import styled from "styled-components";
import { load } from "react-cookies";

const FormGroup = styled.div`
  margin-bottom: 15px;
  outline: 0;
`;

const InputGroup = styled.span`
  position: relative;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  :last-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-left: 0;
  }
`;

const InputText = styled(Textbox)`
  border-right: none;
  display: table-cell;
`;

const InputGroupAddOn = styled.span`
  background: transparent;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top: 0.5px solid #d4d4d4;
  border-right: 0.5px solid #d4d4d4;
  border-bottom: 0.5px solid #d4d4d4;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555;
  text-align: center;
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
  display: table-cell;
  i {
    color: #ced0da;
  }
`;

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.referenceHandler = this.referenceHandler.bind(this);
  }

  loadScript() {
    if (typeof window.google == "undefined") {
      LoadScript(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyC93omL1FXLHokGaYmaYCYt3EI4gFGD1tM&libraries=places",
        () => {
          this.googleAutoCompleteInitializer();
        }
      );
    } else {
      this.googleAutoCompleteInitializer();
    }
  }

  googleAutoCompleteInitializer() {
    let options = {
      types: this.props.types
    };
    let geoComponents = new window.google.maps.places.Autocomplete(
      this.inputElement,
      options
    );
    if (this.props.restrict) {
      let cityBounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(
          this.props.restrict.south_west.lat,
          this.props.restrict.south_west.lng
        ),
        new window.google.maps.LatLng(
          this.props.restrict.north_east.lat,
          this.props.restrict.north_east.lng
        )
      );
      options.strictBounds = true;
      options.bounds = cityBounds;
      options.componentRestrictions = {};
      options.componentRestrictions.country = this.props.restrict.country.short_name.toLowerCase();
      geoComponents.setOptions(options);
    }
    window.google.maps.event.addDomListener(this.inputElement, "keydown", e => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });

    window.google.maps.event.addListener(geoComponents, "place_changed", () => {
      var place = geoComponents.getPlace();
      let location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        south_west: {
          lat: place.geometry.viewport.getSouthWest().lat(),
          lng: place.geometry.viewport.getSouthWest().lng()
        },
        north_east: {
          lat: place.geometry.viewport.getNorthEast().lat(),
          lng: place.geometry.viewport.getNorthEast().lng()
        },
        address: place.formatted_address
      };
      place.address_components.map(
        component => (location[component.types[0]] = component)
      );
      if (this.props.clearInput) {
        this.inputElement.value = "";
        this.inputElement.focus();
      }
      this.props.location(location);
    });
  }

  componentDidMount() {
    this.loadScript();
    // this.inputElement.focus();
  }

  referenceHandler(input) {
    this.inputElement = input;
  }

  render() {
    let loader;
    loader = this.props.loader ? (
      <img
        src={"https://d2fedz0by71ckz.cloudfront.net/images/rds-logo-blue.gif"}
        height="22"
        alt={"radius loader"}
      />
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <defs>
          <path
            id="a"
            d="M10.222 4.033a4.376 4.376 0 1 0-6.19 6.19 4.376 4.376 0 1 0 6.19-6.19m4.552 10.741a.877.877 0 0 1-1.239 0l-2.756-2.757c-2.4 1.794-5.804 1.624-7.984-.557a6.126 6.126 0 0 1 0-8.665 6.126 6.126 0 0 1 8.665 0c2.181 2.18 2.351 5.584.557 7.984l2.757 2.757a.876.876 0 0 1 0 1.238"
          />
        </defs>
        <use fill="#DADADA" fillRule="evenodd" xlinkHref="#a" />
      </svg>
    );
    return (
      <FormGroup>
        <InputGroup>
          <InputText
            id={this.props.id}
            placeholder={this.props.placeholder}
            reference={this.referenceHandler}
          />
          <InputGroupAddOn>{loader}</InputGroupAddOn>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default AutoComplete;
