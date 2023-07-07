import { FormProvider, useForm } from 'react-hook-form'
import { Flex, Modal } from '../../../atoms'
import InputForm from '../../../molecules/InputForm'
import { Stack } from '@chakra-ui/react'
import { theme } from '../../../../theme'
import Li from '../../../atoms/Li'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { User, createUser } from '../../../../store/users/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './validation'
import { useEffect } from 'react'
import { fetchUsers } from '../../../../store/users/users'
import { useAppDispatch } from '../../../../store/applicationStore'
interface Props {
    open: boolean
    setOpen: (item: boolean) => void
}
const FormNewUser = ({ open, setOpen }: Props) => {
    const passwordGenerated = `Nurale${new Date().getFullYear()}!`
    const dispatch = useAppDispatch()
    const defaultValues = {
        email: '',
        password: '',
        passwordConfirm: '',
        lastName: '',
        firstName: '',
        risorsa: '',
        phone: null,
    }
    const methods = useForm<User>({
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
            password: getValues('password'),
            passwordConfirm: getValues('passwordConfirm'),
            lastName: getValues('lastName'),
            firstName: getValues('firstName'),
            //risorsa: getValues('risorsa'),
        }

        await dispatch(createUser(newUser))
        await reset(defaultValues)
        await setOpen(false)
        await dispatch(
            fetchUsers({
                search: '',
                skip: 0,
                take: 10000,
            })
        )
    }
    const handlePasswordGeneretor = () => {
        setValue('password', Math.random().toString(36).slice(-9))
        setValue('passwordConfirm', Math.random().toString(36).slice(-9))
    }
    useEffect(() => {
        setValue('password', passwordGenerated)
        setValue('passwordConfirm', passwordGenerated)
    }, [open])
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
                                    placeholder="Email"
                                    fontWeight="500"
                                    name={'email'}
                                    action={'input'}
                                    type={'text'}
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
                                    label="Nome"
                                    placeholder="Nome"
                                    fontWeight="500"
                                    name={'firstName'}
                                    action={'input'}
                                    type={'text'}
                                    style={{
                                        width: '95%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.firstName?.message}
                                </div>
                                <Flex bgcolor="white" style={{ width: '100%' }}>
                                    <InputForm
                                        fontSize="16px"
                                        label="Password"
                                        placeholder="Password"
                                        fontWeight="500"
                                        name={'password'}
                                        action={'input'}
                                        style={{
                                            width: '190%',
                                            borderRadius: '11px',
                                            borderColor: '#857DAC',
                                            flexDirection: 'column',
                                        }}
                                    />
                                    <Li
                                        style={{
                                            backgroundColor:
                                                theme.colors.pink100,
                                            color: 'white',
                                            border: '0px',
                                            paddingLeft: '16px',
                                            paddingRight: '16px',
                                            paddingTop: '7px',
                                            paddingBottom: '7px',
                                            width: 'fit-content',
                                            alignSelf: 'center',
                                            marginTop: '4%',
                                            marginLeft: '40%',
                                            fontFamily: 'Lato',
                                        }}
                                        onClick={handlePasswordGeneretor}
                                    >
                                        <span>Genera</span>
                                    </Li>
                                </Flex>
                                <div style={{ color: 'red' }}>
                                    {errors?.password?.message}
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
                                    label="Risorsa"
                                    placeholder="Risorsa"
                                    fontWeight="500"
                                    name={'risorsa'}
                                    action={'input'}
                                    type={'text'}
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
                                <InputForm
                                    fontSize="16px"
                                    label="Cognome"
                                    placeholder="Cognome"
                                    fontWeight="500"
                                    name={'lastName'}
                                    action={'input'}
                                    type={'text'}
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
                                    label="Conferma Password"
                                    placeholder="Conferma Password"
                                    fontWeight="500"
                                    name={'passwordConfirm'}
                                    action={'input'}
                                    type={'text'}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                />
                                <div style={{ color: 'red' }}>
                                    {errors?.passwordConfirm?.message}
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
export default FormNewUser
