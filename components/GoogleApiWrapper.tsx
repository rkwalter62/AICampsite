import { GoogleAPI, GoogleApiWrapper, Map } from "google-maps-react";
import React from "react";

interface Props {
  google: GoogleAPI;
  lat: number;
  lng: number;
}

const GoogleMap: React.FC<Props> = ({ google, lat, lng }) => {
  // const streetViewRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (streetViewRef.current) {
  //     const panorama = new google.maps.StreetViewPanorama(
  //       streetViewRef.current,
  //       {
  //         position: { lat, lng },
  //         pov: { heading: 165, pitch: 0 },
  //         zoom: 1,
  //       }
  //     );

  //     const map = new google.maps.Map(streetViewRef.current, {
  //       center: { lat, lng },
  //       zoom: 1,
  //       streetViewControl: false,
  //     });

  //     map.setStreetView(panorama);
  //   }
  // }, [google, lat, lng]);

  return (
    <Map
      google={google}
      zoom={12}
      containerStyle={{
        position: "relative",
        width: "100%",
        height: "450px",
      }}
      initialCenter={{
        lat: lat,
        lng: lng,
      }}
      streetViewControl
    ></Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
})(GoogleMap);
