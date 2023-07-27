import { useTranslation } from 'react-i18next'
import { Column } from '../../../utils/costants'
import Icons from '../../atoms/icons'

export const handleColumns = () => {
    const { t } = useTranslation()
    let COLUMNS: Column[] = []
    return (COLUMNS = [
        {
            name: 'Nome',
            id: 'name',
        },
        {
            name: 'Tipo di pagamento',
            id: 'typeOfPayment.name',
        },
        {
            name: 'Note',
            id: 'note',
        },
    ])
}
