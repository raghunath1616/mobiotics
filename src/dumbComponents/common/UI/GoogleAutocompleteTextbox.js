import React, { Component } from "react";
import { LoadScript } from "services/Utils";
import Textbox from "dumbComponents/common/UI/Textbox";
import styled from "styled-components";

class GoogleAutocompleteTextbox extends Component {
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
      types: this.props.types,
      fields: ["name", "geometry.location", "geometry.viewport", "place_id", "formatted_address", "address_components"],
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
        address: place.formatted_address,
        addressComponents : place.address_components
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
    return <Textbox id={this.props.id} placeholder={this.props.placeholder} reference={this.referenceHandler} {...this.props}/>
  }
}

export default GoogleAutocompleteTextbox;
