import {Icon} from "@iconify/react"; 
import locationIcon from "@iconify/icons-mdi/fire-alert"; 
import icebergIcon from '@iconify-icons/openmoji/iceberg';
import volcanoIcon from '@iconify-icons/emojione/volcano';

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon}/> <Icon icon={icebergIcon}/>  <Icon icon={volcanoIcon}/> Wildfire, IceBerg & Volcanos Tracker (Powered by NASA)</h1>
        </header>
    )
}

export default Header
