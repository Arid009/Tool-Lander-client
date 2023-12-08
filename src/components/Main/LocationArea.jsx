import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const LocationArea = () => {
    

    return (
        <div className='max-w-screen-xl mt-6 mx-auto flex justify-center'>
            <div className='w-[80%] h-[100%]'>
                <MapContainer center={[22.3752, 91.8349]} zoom={13} scrollWheelZoom={true} style={{ width: '90%', height: '90%' }}>
                    <TileLayer
                        attribution='contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[22.3752, 91.8349]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default LocationArea;