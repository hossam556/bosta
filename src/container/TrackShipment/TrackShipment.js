import React from 'react'
import SliderCard from '../../components/TrackShipment/SliderCard/SliderCard'
import DetailsCard from '../../components/TrackShipment/DetailsCard/DetailsCard'
import AddressCard from '../../components/TrackShipment/AddressCard/AddressCard'
import './TrackShipment.scss'

const TrackShipment = () => {
    return (
        <>
            <SliderCard/>
            <div className='TrackShipment_container'>
                <AddressCard/>
                <DetailsCard/>
            </div>
        </>
    )
}

export default TrackShipment
