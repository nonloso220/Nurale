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
            name: 'Note',
            id: 'note',
        },
        {
            name: 'Tipo di pagamento',
            id: 'typeOfPayment.name',
        },
        
    ])
}
