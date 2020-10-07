import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";
import mapStyles from "./styles/mapStyles";
import darkMapStyles from "./styles/darkMapStyles";

const libraries = ["places"];
const api = "AIzaSyBbUfLMZsJfn23Ce119CNto9_GsR2_hBkM";

const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    styles: darkMapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};

const center = {
    lat: -4.3280818,
    lng: 15.3060509,
};

function Hospital() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: api,
        libraries
    });
    const [map, setMap] = React.useState(null)
   
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            options={options}
        >
        </GoogleMap>
    )
}

export default Hospital
