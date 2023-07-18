import { icons } from '../../../utils/costants'
import accountIcon from './accountIcon'
import anagraficheIcon from './anagraficheIcon'
import campanelloIcon from './campanelloIcon'
import commesseIcon from './commesseIcon'
import darkmodeIcon from './darkmodeIcon'
import dropdownIcon from './dropdownIcon'
import dropdownUpIcon from './dropdownUpIcon'
import homeIcon from './homeIcon'
import inserimentoVel from './inserimetoVel'
import logoutIcon from './logoutIcon'
import settingsIcon from './settingsIcon'
import sidebarIcon from './sidebarIcon'
import sidebarReverseIcon from './sidebarReverseIcon'
import timesheetIcon from './timesheetIcon'
import editIcon from './editIcon'
import deleteIcon from './deleteIcon'
import rightArrowIcon from './rightArrowIcon'
import leftArrowIcon from './leftArrowIcon'
import trueIcon from './trueIcon'
import falseIcon from './falseIcon'

interface Props {
    name: icons
    size?: number
    maxHeight?: number
    color?: string
}
const Icons = ({ name, size = 24, maxHeight = 24, color = 'black' }: Props) => {
    const index = {
        homeIcon,
        inserimentoVel,
        commesseIcon,
        anagraficheIcon,
        settingsIcon,
        timesheetIcon,
        logoutIcon,
        darkmodeIcon,
        campanelloIcon,
        accountIcon,
        sidebarIcon,
        dropdownIcon,
        dropdownUpIcon,
        sidebarReverseIcon,
        leftArrowIcon,
        rightArrowIcon,
        editIcon,
        deleteIcon,
        trueIcon,
        falseIcon,
    }

    const Icon = index[name]
    return <Icon color={color} maxHeight={maxHeight} size={size} />
}
export default Icons
