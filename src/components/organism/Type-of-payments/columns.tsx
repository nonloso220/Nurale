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
            name: 'Giorni al primo pagamento',
            id: 'daysToFirstPayment',
        },
        {
            name: 'Giorni tra i pagamenti',
            id: 'daysBetweenPayments',
        },
        {
            name: 'Numero di pagamenti',
            id: 'numberOfPayments',
        },
        {
            name: 'Spostare i pagamenti alla fine del mese',
            id: 'movePaymentsToTheEndOfMonth',
            transform: (value: any) =>
                value === true ? (
                    <Icons name="trueIcon" size={1.5} />
                ) : (
                    <Icons name="falseIcon" size={1.5} />
                ),
        },
        {
            name: 'Note',
            id: 'note',
        },
    ])
}
