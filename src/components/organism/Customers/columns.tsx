import { useTranslation } from 'react-i18next'
import { Column } from '../../../utils/costants'

export const handleColumns = () => {
    const { t } = useTranslation()
    let COLUMNS: Column[] = []
    return (COLUMNS = [
        {
            name: 'Codice',
            id: 'name',
        },
        {
            name: 'Descrizione',
            id: 'skillType',
        },
        {
            name: 'Cliente',
            id: 'note',
        },
        {
            name: 'Data inizio',
            id: 'name',
        },
        {
            name: 'Data Fine',
            id: 'skillType',
        },
        {
            name: 'Tipo di Commessa',
            id: 'note',
        },
        {
            name: 'Stato',
            id: 'note',
        },
    ])
}
