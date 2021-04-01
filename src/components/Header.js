import {Icon} from "@iconify/react"; 
import locationIcon from "@iconify/icons-mdi/fire-alert"; 
import icebergIcon from '@iconify-icons/openmoji/iceberg';
import volcanoIcon from '@iconify-icons/emojione/volcano';
import fireIcon from '@iconify-icons/emojione/fire';

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={fireIcon}/> <Icon icon={icebergIcon}/>  <Icon icon={volcanoIcon}/> Wildfire, IceBerg & Volcanos Tracker (Powered by NASA)</h1>
        </header>
    )
}

export default Header
