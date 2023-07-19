import { useTranslation } from 'react-i18next'
import { Column } from '../../../utils/costants'

export const handleColumns = () => {
    const { t } = useTranslation()
    let COLUMNS: Column[] = []
    return (COLUMNS = [
        {
            name: 'Nome',
            id: 'name',
        },
        {
            name: 'Tipo di skill',
            id: 'skillType',
        },
        {
            name: 'Note',
            id: 'note',
        },
    ])
}
