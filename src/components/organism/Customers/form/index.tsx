import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../../store'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../validation'
import { useEffect } from 'react'
import { Flex, Modal } from '../../../atoms'
import { Stack } from '@chakra-ui/react'
import InputForm from '../../../molecules/InputForm'
import { theme } from '../../../../theme'
import Li from '../../../atoms/Li'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import TextElement from '../../../molecules/TextElement'
import {
    Customer,
    createCustomer,
    fetchCustomers,
    updateCustomer,
} from '../../../../store/customers'
import { useSelector } from 'react-redux'
import { fetchTypeOfPayments, getTypeOfPayments } from '../../../../store/typeOfPayments'

interface Props {
    open: boolean
    customer?: Customer | null
    take: number
    skip: number
    setOpen: (item: boolean) => void
    form: (item: any) => void
}
const FormCustomer = ({ open, customer, skip, take, setOpen, form }: Props) => {
    const dispatch = useAppDispatch()
    const typeOfPaymentsData=useSelector(getTypeOfPayments)
    const defaultValues = {
        name: '',
        typeOfPaymentId: 0,
        note: '',
        id:0,
        typeOfPayment: { id: 0, name: '' },
    }
    const methods = useForm<Customer>({
        defaultValues,
        resolver: zodResolver(schema),
    })
    const {
        formState: { errors },
        trigger,
        getValues,
        setValue,
        reset,
    } = methods

    const handleSave = async () => {
        const errors1 = await trigger()
        if (!errors1) {
            console.log(errors)
            return errors1
        }
        const newObject = {
            name: getValues('name'),//ok
            note: getValues('note'),//ok
            typeOfPaymentId:customer?.typeOfPaymentId,//undefined
            id:customer?.id,
            typeOfPayment:{
                id:Number(typeOfPaymentsData.map(
                (data)=>{
                        if(data.name===String(getValues('typeOfPayment.name'))){
                            console.log('data return:')
                            console.log(data)
                            return data.id//nan
                        }
                        console.log('data:')
                        console.log(data)
                })),
            name:getValues('typeOfPayment.name')},//ok
        }
        if (customer) {
            console.log('update object:')
            console.log(newObject)
            await dispatch(updateCustomer(newObject))
        } else {
            console.log('create object:')
            console.log(newObject)
            await dispatch(createCustomer(newObject))
        }
        await reset(defaultValues)
        await setOpen(false)
        await dispatch(
            fetchCustomers({
                skip: skip,
                take: take,
            })
        )
        const objectForm: any = {
            open,
            skip,
            take,
            setOpen,
        }
        form(objectForm)
    }
    const handleClick = () => {
        setOpen(!open)
        open ? null : reset(defaultValues)
        const objectForm: any = {
            open,
            skip,
            take,
            setOpen,
        }
        form(objectForm)
    }
    useEffect(() => {
        dispatch(
            fetchTypeOfPayments()
        )    
        if (customer) {
            console.log('customer useEffect prima: ')
            console.log(customer)
            setValue('name', customer.name)
            setValue('note', customer.note)
            setValue('typeOfPaymentId',customer.typeOfPaymentId)
            setValue('typeOfPayment.name',customer.typeOfPayment.name)
            setValue('typeOfPayment.id',customer.typeOfPayment.id)
        } else null
        console.log('customer useEffect dopo: ')
        console.log(customer)
    }, [open, customer])
    const extractTypeOfPaymentId=()=>{
        
    }
    return (
        <Modal show={open} color="black">
            <Flex
                bgcolor="white"
                border="1px solid #857DAC"
                style={{
                    borderRadius: '10px',
                    width: '100%',
                    padding: '16px',
                }}
                column="column"
            >
                <Flex bgcolor="white">
                    <Flex
                        bgcolor="white"
                        column="column"
                        style={{ width: '100%' }}
                    >
                        <FormProvider {...methods}>
                            <Stack spacing={3}>
                                <InputForm
                                    fontSize="16px"
                                    label="Nome"
                                    placeholder="Nome"
                                    fontWeight="500"
                                    name={'name'}
                                    action={'input'}
                                    type="text"
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.name?.message}
                                </div>
                            </Stack>
                        </FormProvider>
                    </Flex>
                    <Flex
                        bgcolor="white"
                        column="column"
                        style={{
                            marginLeft: '20px',
                            width: '100%',
                        }}
                    >
                        <FormProvider {...methods}>
                            <Stack spacing={3}>
                                <InputForm
                                    fontSize="16px"
                                    label="Tipo di pagamento"
                                    fontWeight="500"
                                    name={'typeOfPayment.name'}
                                    action={'select'}
                                    type="text"
                                    placeholder={''}
                                    defaultElement={
                                        customer?getValues('typeOfPayment.name'):' '
                                    }
                                    selectElements={typeOfPaymentsData.map((data)=>data.name)}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.typeOfPayment?.message}
                                </div>
                            </Stack>
                        </FormProvider>
                    </Flex>
                </Flex>
                <Flex bgcolor="white" column="column" style={{ width: '100%' }}>
                    <FormProvider {...methods}>
                        <Stack spacing={3}>
                            <InputForm
                                fontSize="16px"
                                label="Note"
                                placeholder="Note"
                                fontWeight="500"
                                name={'note'}
                                action={'input'}
                                type="text"
                                style={{
                                    width: '100%',
                                    borderRadius: '11px',
                                    borderColor: '#857DAC',
                                    display: 'flex',
                                }}
                            />
                            <div style={{ color: 'red' }}>
                                {errors?.note?.message}
                            </div>
                        </Stack>
                    </FormProvider>
                </Flex>
                <Flex
                    bgcolor="white"
                    style={{
                        justifyContent: 'flex-end',
                        marginTop: '13%',
                        marginBottom: '2%',
                    }}
                >
                    <Li
                        style={{
                            backgroundColor: theme.colors.gray20,
                            color: theme.colors.purple,
                            border: '0px',
                            padding: '10px',
                            width: '134px',
                            textAlign: 'center',
                        }}
                        onClick={handleClick}
                        marginRight="1rem"
                    >
                        <CloseIcon />
                        <span style={{ fontWeight: 'bold' }}>
                            &nbsp; Annulla
                        </span>
                    </Li>
                    <Li
                        style={{
                            backgroundColor: theme.colors.pink100,
                            color: 'white',
                            border: '0px',
                            padding: '10px',
                            width: '156px',
                            textAlign: 'center',
                        }}
                        onClick={handleSave}
                        marginRight="1rem"
                    >
                        <CheckIcon />
                        <span style={{ fontWeight: 'bold' }}>
                            &nbsp; {customer? 'salva':'Conferma'}
                        </span>
                    </Li>
                </Flex>
            </Flex>
        </Modal>
    )
}
export default FormCustomer
