'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapStyles = {
  height: '500px',
  width: '100%',
}

const OFFICE_LOCATION = {
  lat: 23.044867,  // Replace with your Ahmedabad office lat
  lng: 72.554125   // Replace with your Ahmedabad office lng
}

export default function GoogleMapOffice() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={OFFICE_LOCATION}
        zoom={15}
      >
        <Marker position={OFFICE_LOCATION} title="Swasau Tech Pvt. Ltd. Office" />
      </GoogleMap>
    </LoadScript>
  )
}
