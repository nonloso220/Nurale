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
import { useSelector } from 'react-redux'
import {
    fetchTypeOfPayments,
    getTypeOfPayments,
} from '../../../../store/typeOfPayments'
import {
    Supplier,
    createSupplier,
    fetchSuppliers,
    updateSupplier,
} from '../../../../store/suppliers'

interface Props {
    open: boolean
    supplier?: Supplier | null
    take: number
    skip: number
    setOpen: (item: boolean) => void
    form: (item: any) => void
}
const FormSupplier = ({ open, supplier, skip, take, setOpen, form }: Props) => {
    const dispatch = useAppDispatch()
    const typeOfPaymentsData = useSelector(getTypeOfPayments)
    const defaultValues = {
        name: '',
        typeOfPaymentId: 0,
        note: '',
        id: 0,
        typeOfPayment: { id: 0, name: '' },
    }
    const methods = useForm<Supplier>({
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
        console.log(getValues('typeOfPayment.id'))
        const newObject = {
            name: getValues('name'), //ok
            note: getValues('note'), //ok
            typeOfPaymentId: Number(getValues('typeOfPayment.id')), //ok
            id: supplier?.id,
        }
        if (supplier) {
            console.log('update object:')
            console.log(newObject)
            await dispatch(updateSupplier(newObject))
        } else {
            console.log('create object:')
            console.log(newObject)
            await dispatch(createSupplier(newObject))
        }
        await reset(defaultValues)
        await setOpen(false)
        await dispatch(
            fetchSuppliers({
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
        dispatch(fetchTypeOfPayments())
        if (supplier) {
            console.log('Supplier useEffect prima: ')
            console.log(supplier)
            setValue('name', supplier.name)
            setValue('note', supplier.note)
            setValue('typeOfPaymentId', supplier.typeOfPaymentId)
            setValue('typeOfPayment.name', supplier.typeOfPayment.name)
            setValue('typeOfPayment.id', supplier.typeOfPayment.id)
        } else null
        console.log('supplier useEffect dopo: ')
        console.log(supplier)
    }, [open, supplier])
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
                                    name={'typeOfPayment.id'}
                                    action={'select'}
                                    type="text"
                                    placeholder={''}
                                    defaultElement={
                                        supplier
                                            ? getValues('typeOfPayment.name')
                                            : ' '
                                    }
                                    selectElementsObject={typeOfPaymentsData}
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
                            &nbsp; {supplier ? 'salva' : 'Conferma'}
                        </span>
                    </Li>
                </Flex>
            </Flex>
        </Modal>
    )
}
export default FormSupplier
