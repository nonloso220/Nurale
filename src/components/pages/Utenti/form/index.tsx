import { FormProvider, useForm } from 'react-hook-form'
import { Flex, Modal } from '../../../atoms'
import InputForm from '../../../molecules/InputForm'
import { Stack } from '@chakra-ui/react'
import { theme } from '../../../../theme'
import Li from '../../../atoms/Li'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { User, createUser } from '../../../../store/users/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { fetchUsers } from '../../../../store/users/users'
import { useAppDispatch } from '../../../../store/applicationStore'
import { updateUser } from '../../../../store/users/user/actions/update'
import schema from './validation'
interface Props {
    open: boolean
    user?: User | null
    setOpen: (item: boolean) => void
}
const FormUser = ({ open, user, setOpen }: Props) => {
    const passwordGenerated = `Nurale${new Date().getFullYear()}!`
    const [deletePhone, setDeletePhone] = useState(false)
    const [deleteFirstName, setDeleteFirstName] = useState(false)
    const [deletLasteName, setDeleteLastName] = useState(false)
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
            password: getValues('password'),
            passwordConfirm: getValues('passwordConfirm'),
            lastName: getValues('lastName'),
            firstName: getValues('firstName'),
            phone: getValues('phone'),
            //risorsa: getValues('risorsa'),
            id: user?.id,
        }
        if(user){
            await dispatch(updateUser(newUser))
        }
        else{
            await dispatch(createUser(newUser))
        }
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
        } else {
            setValue('password', passwordGenerated)
            setValue('passwordConfirm', passwordGenerated)
        }
    }, [open])
    const handlePasswordGeneretor = () => {
        setValue('password', Math.random().toString(36).slice(-9))
        setValue('passwordConfirm', Math.random().toString(36).slice(-9))
    }
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
                                    type={user?"email":'input'}
                                    fontSize="16px"
                                    label="Email"
                                    name={'email'}
                                    action={'input'}
                                    placeholder={user?String(user?.email):"Email"}
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
                                {user?(
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
                                ):(
                                    <>
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
                                                    backgroundColor: theme.colors.pink100,
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
                                    </>
                                )}
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
                                {user?(<><InputForm
                                    fontSize="16px"
                                    label="Nome"
                                    placeholder="Nome"
                                    fontWeight="500"
                                    name={'firstName'}
                                    action={'input'}
                                    style={{
                                        width: '100%',
                                        borderRadius: '11px',
                                        borderColor: '#857DAC',
                                        display: 'flex',
                                    }}
                                    type={!deleteFirstName ? 'closeIcon' : 'text'}
                                    closeIconAction={handleCloseIconFirstName} /><div style={{ color: 'red' }}>
                                        {errors?.firstName?.message}
                                    </div><InputForm
                                        fontSize="16px"
                                        label="Cognome"
                                        placeholder="Cognome"
                                        fontWeight="500"
                                        name={'lastName'}
                                        action={'input'}
                                        style={{
                                            width: '100%',
                                            borderRadius: '11px',
                                            borderColor: '#857DAC',
                                            display: 'flex',
                                        }}
                                        type={!deletLasteName ? 'closeIcon' : 'text'}
                                        closeIconAction={handleCloseIconLastName} /><div style={{ color: 'red' }}>
                                        {errors?.lastName?.message}
                                    </div><InputForm
                                        fontSize="16px"
                                        label="Telefono"
                                        placeholder="Telefono"
                                        fontWeight="500"
                                        name={'phone'}
                                        action={'input'}
                                        style={{
                                            width: '100%',
                                            borderRadius: '11px',
                                            borderColor: '#857DAC',
                                            display: 'flex',
                                        }}
                                        type={!deletePhone ? 'closeIcon' : 'text'}
                                        closeIconAction={handleCloseIconPhone} /><div style={{ color: 'red' }}>
                                        {errors?.phone?.message}
                                    </div></>):(<><InputForm
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
                                        }} /><InputForm
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
                                            }} /><div style={{ color: 'red' }}>
                                            {errors?.lastName?.message}
                                        </div><InputForm
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
                                            }} /><div style={{ color: 'red' }}>
                                            {errors?.passwordConfirm?.message}
                                        </div></>)}
                                         {/* <div style={{ color: 'red' }}>
                                                {errors?.?.message}
                                            </div> */}
                                
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
                            &nbsp;{user?'Salva':'Conferma'}
                        </span>
                    </Li>
                </Flex>
            </Flex>
        </Modal>
    )
}
export default FormUser
