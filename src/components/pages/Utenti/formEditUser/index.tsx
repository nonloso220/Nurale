import { FormProvider, useForm } from 'react-hook-form'
import { Flex, Modal } from '../../../atoms'
import InputForm from '../../../molecules/InputForm'
import { Stack } from '@chakra-ui/react'
import { theme } from '../../../../theme'
import Li from '../../../atoms/Li'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { User } from '../../../../store/users/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './validation'
import { useEffect, useState } from 'react'
import { fetchUsers } from '../../../../store/users/users'
import { useAppDispatch } from '../../../../store/applicationStore'
import { updateUser } from '../../../../store/users/user/actions/update'
interface Props {
    open: boolean
    user: User | null
    setOpen: (item: boolean) => void
}
const FormEditUser = ({ open, user, setOpen }: Props) => {
    const [deletePhone, setDeletePhone] = useState(false)
    const [deleteFirstName, setDeleteFirstName] = useState(false)
    const [deletLasteName, setDeleteLastName] = useState(false)
    const dispatch = useAppDispatch()
    const defaultValues = {
        email: '',
        lastName: '',
        firstName: '',
        risorsa: '',
        phone: null,
    }
    const methods = useForm<Partial<User>>({
        defaultValues,
        resolver: zodResolver(schema),
    })
    const {
        formState: { errors },
        trigger,
        // setError,
        getValues,
        reset,
        setValue,
    } = methods
    const handleSave = async () => {
        const errors1 = await trigger()
        if (!errors1) {
            console.log(errors)
            return errors1
        }
        const newUser = {
            resourceId: 12,
            email: getValues('email'),
            lastName: getValues('lastName'),
            firstName: getValues('firstName'),
            phone: getValues('phone'),
            id: user?.id,
        }

        await dispatch(updateUser(newUser))
        console.log('ciao')
        reset(defaultValues)
        setOpen(false)
        await dispatch(
            fetchUsers({
                search: '',
                skip: 0,
                take: 10000,
            })
        )
    }
    useEffect(() => {
        if (user) {
            setValue('email', user.email)
            setValue('firstName', user.firstName)
            setValue('lastName', user.lastName)
            setValue('id', user.id)
            setValue('phone', user.phone)
        } else null
    }, [open])
    const handleCloseIconPhone = () => {
        setDeletePhone(true)
        setValue('phone', null)
    }
    const handleCloseIconFirstName = () => {
        setDeleteFirstName(true)
        setValue('firstName', '')
    }
    const handleCloseIconLastName = () => {
        setDeleteLastName(true)
        setValue('lastName', '')
    }
    const handleClick = () => {
        setOpen(!open)
        open ? null : reset(defaultValues)
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
                                    label="Email"
                                    placeholder={String(user?.email)}
                                    fontWeight="500"
                                    style={{
                                        width: '95%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.email?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="Risorsa"
                                    placeholder="Risorsa"
                                    fontWeight="500"
                                    name={'risorsa'}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                {/* <div style={{ color: 'red' }}>
                                                {errors?.?.message}
                                            </div> */}
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
                                    label="Nome"
                                    placeholder="Nome"
                                    fontWeight="500"
                                    name={'firstName'}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                    closeIcon={!deleteFirstName ? true : false}
                                    closeIconAction={handleCloseIconFirstName}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.firstName?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="Cognome"
                                    placeholder="Cognome"
                                    fontWeight="500"
                                    name={'lastName'}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                    closeIcon={!deletLasteName ? true : false}
                                    closeIconAction={handleCloseIconLastName}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.lastName?.message}
                                </div>
                                <InputForm
                                    fontSize="16px"
                                    label="Telefono"
                                    placeholder="Telefono"
                                    fontWeight="500"
                                    name={'phone'}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                    closeIcon={!deletePhone ? true : false}
                                    closeIconAction={handleCloseIconPhone}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.phone?.message}
                                </div>
                            </Stack>
                        </FormProvider>
                    </Flex>
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
                            &nbsp; Conferma
                        </span>
                    </Li>
                </Flex>
            </Flex>
        </Modal>
    )
}
export default FormEditUser
