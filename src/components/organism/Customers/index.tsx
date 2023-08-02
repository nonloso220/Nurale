import { useState } from 'react'
import TableLayout from '../TableLayout'
import { handleColumns } from './columns'
import { useSelector } from 'react-redux'
import { Flex } from '../..'
import Li from '../../atoms/Li'
import { theme } from '../../../theme'
import FormTypeOfPayment from '../Type-of-payments/form'
import {
    Customer,
    deleteCustomer,
    fetchCustomers,
    getCustomers,
    getPaginations,
} from '../../../store/customers'
import FormCustomer from './form'
import { FormProvider } from 'react-hook-form'
import { Select, Stack } from '@chakra-ui/react'
import InputForm from '../../molecules/InputForm'
import { getTypeOfPayment } from '../../../store/typeOfPayments/typeOfPayment/selectors'
import { TypeOfPayment, getTypeOfPayments } from '../../../store/typeOfPayments'

const Customers = () => {
    const totalElement = useSelector(getPaginations)
    const customers = useSelector(getCustomers)
    const typeOfPaymentsData = useSelector(getTypeOfPayments)
    const [customer, setCustomer] = useState<Customer | null>(null)
    const [open, setOpen] = useState<boolean>(false)
    const [skip, setSkip] = useState<number>(0)
    const [take, setTake] = useState<number>(0)
    const [elementFilter, setElementFilter] = useState<boolean | string |number>()
    let v:string=''
    const formObject = (Object: any) => {
        setCustomer(Object.object)
        setSkip(Object.params.skip)
        setTake(Object.params.take)
        setOpen(Object.open)
    }
    const handleFilter = () => {
        // setColoredButton(element ? true : false)
        // setColoredButton2(element ? false : true)
        setElementFilter(Number(v))
    }
    const handleResetFilter = async () => {
        setElementFilter(undefined)
    }
    return (
        <TableLayout
            labelNavbar="clienti"
            lablel="Aggiungi nuovo cliente"
            totalElement={totalElement}
            objects={customers}
            handleColumns={handleColumns}
            fetchElement={fetchCustomers}
            form={formObject}
            open={open}
            setOpen={setOpen}
            deleteFunction={deleteCustomer}
            setElementFilter={setElementFilter}
            elementFilter={elementFilter}
            childrenFilter={
                <>
                    <Flex bgcolor="white">
                        <span>tipo di pagamento</span>
                    </Flex>
                    <Flex bgcolor="white">
                        <Flex
                            bgcolor="white"
                            column="column"
                            style={{
                                marginLeft: '20px',
                                width: '100%',
                            }}
                        >
                                <Select
                                    placeholder={''}
                                    style={{
                                        borderRadius: '11px',
                                        borderColor: 'rgb(133, 125, 172)',
                                    }}
                                    // onChange={handleFilter}
                                >
                                   { typeOfPaymentsData?.map(
                                        (element: TypeOfPayment) => (
                                            <option value={String(element.id)}>
                                                {element.name}
                                            </option>
                                        )
                                    )}
                                </Select>
                                {/* <InputForm
                                        fontSize="16px"
                                        label="Tipo di pagamento"
                                        fontWeight="500"
                                        name={'typeOfPayment.id'}
                                        action={'select'}
                                        type="text"
                                        placeholder={''}
                                        defaultElement={
                                            customer
                                                ? customer.typeOfPayment.name
                                                : ' '
                                        }
                                        selectElementsObject={typeOfPaymentsData}
                                        style={{
                                            width: '100%',
                                            borderRadius: '11px',
                                            borderColor: '#857DAC',
                                            display: 'flex',
                                        }}
                                        // onChange={() => handleFilter(typeOfPaymentId)}
                                    /> */}
                        </Flex>
                    </Flex>
                </>
            }
            children={
                <FormCustomer
                    open={open}
                    take={take}
                    skip={skip}
                    form={formObject}
                    customer={customer}
                    setOpen={setOpen}
                />
            }
            typePage={'customer'}
        />
    )
}
export default Customers
