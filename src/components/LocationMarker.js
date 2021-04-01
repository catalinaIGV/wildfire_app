import {Icon} from "@iconify/react"; 
import icebergIcon from '@iconify-icons/openmoji/iceberg';
import volcanoIcon from '@iconify-icons/emojione/volcano';
import fireIcon from '@iconify-icons/emojione/fire';



const LocationMarker = ({lat, long, onClick, categoryId}) => {


    return (
        <div className="location-marker" onClick={onClick}>

            { (categoryId === 8) ? <Icon icon={fireIcon} className="location-icon"></Icon> : (categoryId === 15) ? <Icon icon={icebergIcon} className="location-icon"></Icon> : <Icon icon={volcanoIcon} className="location-icon" /> }
            
        </div>
    )
}

export default LocationMarker


