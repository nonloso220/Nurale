import { useTranslation } from 'react-i18next'
import { Column } from '../../../utils/costants'

export const handleColumns = () => {
    const { t } = useTranslation()
    let COLUMNS: Column[] = []
    return (COLUMNS = [
        {
            name: 'Nome',
            id: 'firstName',
        },
        {
            name: 'Cognome',
            id: 'lastName',
        },
        {
            name: 'Costo Or.',
            id: 'hourCost',
        },
        {
            name: 'Ricavo Or.',
            id: 'hourRevenue',
        },
        {
            name: 'CV',
            id: 'curriculumVitae',
        },
        {
            name: 'Fornitore',
            id: 'supplier.name',
        },
        {
            name: 'Note',
            id: 'note',
        },
    ])
}
