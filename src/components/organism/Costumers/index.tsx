import { useState } from 'react'
import {
    TypeOfPayment,
    deleteTypeOfPayment,
    fetchTypeOfPayments,
    getPaginations,
    getTypeOfPayments,
} from '../../../store/typeOfPayments'
import TableLayout from '../TableLayout'
// import FormTypeOfPayment from './form'
import { handleColumns } from './columns'
import { useSelector } from 'react-redux'
import { Flex } from '../..'
import Li from '../../atoms/Li'
import { theme } from '../../../theme'

const TypeOfPayments = () => {
    const totalElement = useSelector(getPaginations)
    const typeOfPayments = useSelector(getTypeOfPayments)
    const [typeOfPayment, setTypeOfPayment] = useState<TypeOfPayment | null>(
        null
    )
    const [open, setOpen] = useState<boolean>(false)
    const [skip, setSkip] = useState<number>(0)
    const [take, setTake] = useState<number>(0)
    const [elementFilter, setElementFilter] = useState<boolean | string>()
    const formObject = (Object: any) => {
        setTypeOfPayment(Object.object)
        setSkip(Object.params.skip)
        setTake(Object.params.take)
        setOpen(Object.open)
    }
    const handleFilter = (element: boolean) => {
        // setColoredButton(element ? true : false)
        // setColoredButton2(element ? false : true)
        setElementFilter(element)
    }
    const handleResetFilter = async () => {
        setElementFilter(undefined)
    }
    return (
        <TableLayout
            labelNavbar="Tipi di pagamento"
            lablel="Aggiungi nuovo Tipo di Pagamento"
            totalElement={totalElement}
            objects={typeOfPayments}
            handleColumns={handleColumns}
            fetchElement={fetchTypeOfPayments}
            form={formObject}
            open={open}
            setOpen={setOpen}
            deleteFunction={deleteTypeOfPayment}
            setElementFilter={setElementFilter}
            elementFilter={elementFilter}
            childrenFilter={
                <>
                    <Flex bgcolor="white">
                        <span>Pagamenti alla fine del mese</span>
                    </Flex>
                    <Flex bgcolor="white">
                        <Li
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '65px',
                                color: 'white',
                                textAlign: 'center',
                            }}
                            onClick={handleResetFilter}
                        >
                            Tutti
                        </Li>
                        <Li
                            //  coloredButton
                            //  ? theme.colors.purple
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '65px',
                                color: 'white',
                                textAlign: 'center',
                            }}
                            onClick={() => handleFilter(true)}
                        >
                            Si
                        </Li>
                        <Li
                            // coloredButton2
                            // ? theme.colors.purple
                            // :
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '65px',
                                color: 'white',
                                textAlign: 'center',
                            }}
                            onClick={() => {
                                handleFilter(false)
                            }}
                        >
                            No
                        </Li>
                    </Flex>
                </>
            }
            children={
                <div></div>
                // <FormTypeOfPayment
                //     open={open}
                //     take={take}
                //     skip={skip}
                //     form={formObject}
                //     TypeOfPayment={typeOfPayment}
                //     setOpen={setOpen}
                // />
            }
            typePage={'typeOfPayment'}
        />
    )
}
export default TypeOfPayments
