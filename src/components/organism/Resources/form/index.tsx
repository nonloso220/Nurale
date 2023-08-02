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
import { Resource, createResource, fetchResource, updateResource } from '../../../../store/resources'
import { fetchSuppliers } from '../../../../store/suppliers'
import { getSuppliers } from '../../../../store/suppliers/suppliers/selectors'

interface Props {
    open: boolean
    resource?: Resource | null
    take: number
    skip: number
    setOpen: (item: boolean) => void
    form: (item: any) => void
}
const FormResource = ({ open, resource, skip, take, setOpen, form }: Props) => {
    const dispatch = useAppDispatch()
    const suppliersData = useSelector(getSuppliers)
    const defaultValues = {
        firstName: '',
        lastName: '',
        hourCost:0,
        hourRevenue:0,
        supplierId:0,
        curriculumVitae: '',
        note: '',
        id: 0,
    }
    const methods = useForm<Resource>({
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
        setValue('curriculumVitae', String(getValues('curriculumVitae')))
        setValue('note', String(getValues('note')))
        const errors1 = await trigger()
        if (!errors1) {
            console.log(errors)
            return errors1
        }
        const newObject = {
            firstName: getValues('firstName'), //ok
            lastName: getValues('lastName'), //ok
            hourCost: getValues('hourCost'),
            hourRevenue: getValues('hourRevenue'),
            curriculumVitae: getValues('curriculumVitae'), //ok
            supplierId: Number(getValues('supplier.id')), 
            note: getValues('note'), //ok
            id: resource?.id,
        }
        if (resource) {
            console.log('update object:')
            console.log(newObject)
            await dispatch(updateResource(newObject))
        } else {
            console.log('create object:')
            console.log(newObject)
            await dispatch(createResource(newObject))
        }
        await reset(defaultValues)
        await setOpen(false)
        await dispatch(
            fetchResource({
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
        console.log('problema use effect')
        dispatch(fetchSuppliers())
        if (resource) {
            setValue('firstName', resource.firstName)
            setValue('lastName', resource.lastName)
            setValue('hourCost', resource.hourCost)
            setValue('hourRevenue', resource.hourRevenue)
            setValue('supplierId', resource.supplierId)
            setValue('curriculumVitae', resource.curriculumVitae)
            setValue('note', resource.note)
        } else null
    }, [open, resource])
    // useEffect(()=>{
    //     if(getValues('hourCost')!=0)
    //         setValue('insert_dayCost',(getValues('hourCost')*8))
    // },[getValues('hourCost')])
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
                                    name={'firstName'}
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
                                    {errors?.firstName?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="Costo Or."
                                    defaultElement={'€0,00'}
                                    placeholder="inserire costo orario"
                                    fontWeight="500"
                                    name={'hourCost'}
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
                                    {errors?.hourCost?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="ricavo Or."
                                    defaultElement={'€0,00'}
                                    placeholder="inserire ricavo orario"
                                    fontWeight="500"
                                    name={'hourRevenue'}
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
                                    {errors?.hourRevenue?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="CV"
                                    placeholder="inserire curriculum Vitae"
                                    fontWeight="500"
                                    name={'curriculumVitae'}
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
                                    {errors?.curriculumVitae?.message}
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
                                    label="Cognome"
                                    placeholder="inserire Cognome"
                                    fontWeight="500"
                                    name={'lastName'}
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
                                    {errors?.lastName?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="Costo Giorn."
                                    defaultElement={'€0,00'}
                                    // value={getValues('hourCost')!=0?(getValues('hourCost')*8):0}
                                    placeholder="inserire costo giornaliero"
                                    fontWeight="500"
                                    name={'resource.insert_dayCost'}
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
                                    {errors?.lastName?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="Ricavo Giorn."
                                    defaultElement={'€0,00'}
                                    placeholder="inserire ricavo giornaliero"
                                    fontWeight="500"
                                    name={'resource.insert_dayRevenue'}
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
                                    {errors?.lastName?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="Tipo di pagamento"
                                    fontWeight="500"
                                    name={'supplier.id'}
                                    action={'select'}
                                    type="text"
                                    placeholder={''}
                                    defaultElement={
                                        resource
                                            ? getValues('supplier.name')
                                            : ' '
                                    }
                                    selectElementsObject={suppliersData}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.supplier?.message}
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
                            &nbsp; {resource ? 'salva' : 'Conferma'}
                        </span>
                    </Li>
                </Flex>
            </Flex>
        </Modal>
    )
}
export default FormResource
