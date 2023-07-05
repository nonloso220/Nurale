import { Stack, Text, Button, Checkbox } from '@chakra-ui/react'
import InputForm from '../../../molecules/InputForm'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../validation'
import { useNavigate } from 'react-router-dom'
import { EMAIL, ROUTES, TOKEN } from '../../../../utils/costants'
import { Flex, Spacer } from '../../../atoms'
import { LogoImage } from '../../../molecules'
import { User } from '../../../../utils/models'
import { useAppDispatch } from '../../../../store/applicationStore'
import InputPwdForm from '../../../organism/InputPwdForm'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { LoginUser } from '../../../../store'

const FormLogin = () => {
    const defaultValues = { email: '', password: '' }
    const [checkbox, setCheckbox] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const methods = useForm<User>({
        defaultValues,
        resolver: zodResolver(schema),
    })
    const {
        formState: { errors },
        trigger,
        setError,
        getValues,
        reset,
        setValue,
    } = methods

    const handleAccess = async () => {
        const errors = await trigger()
        if (!errors) {
            return errors
        }
        Cookies.set(EMAIL, getValues('email'))
        if (!checkbox) {
            Cookies.remove(EMAIL)
        }
        const response = await dispatch(LoginUser(getValues()))
        if (response.payload === null) {
            setError('email', { message: 'email non valida' })
            setError('password', { message: 'password non valida' })
            return null
        }
        reset(defaultValues)
        return navigate(ROUTES.Home)
    }
    const handleClickPassword = () => {
        return navigate(ROUTES.RecuperoPassword)
    }
    const handleChebox = async () => {
        setCheckbox(!checkbox)
    }
    useEffect(() => {
        Cookies.get(EMAIL) && setValue('email', Cookies.get(EMAIL) as string)
        if (Cookies.get(EMAIL)) {
            setCheckbox(true)
        }
    }, [])
    return (
        <FormProvider {...methods}>
            <Flex
                bgcolor="white"
                width={30}
                height={100}
                style={{
                    color: '#041E42',
                    padding: '2rem',
                    paddingTop: '30px',
                    paddingLeft: '60px',
                }}
            >
                <LogoImage login={true} />
                <Flex
                    bgcolor="white"
                    column="column"
                    style={{
                        marginTop: '112px',
                        textAlign: 'left',
                        fontFamily: 'Lato',
                    }}
                >
                    <Stack spacing={3}>
                        <InputForm
                            label="Email"
                            placeholder="inserisci email"
                            fontWeight="bold"
                            name={'email'}
                        />
                        <div style={{ color: 'red' }}>
                            {errors?.email?.message}
                        </div>
                        <InputPwdForm
                            type="password"
                            name="password"
                            placeholder="Inserisci Password"
                            label="Password"
                            fontWeight="bold"
                            error={errors?.password?.message}
                        />
                        {/* <div style={{ color: 'red' }}>
                            {errors?.password?.message}
                        </div> */}
                        <div style={{ marginLeft: '28px' }}>
                            <Text as="b">
                                <a
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleClickPassword}
                                >
                                    Hai dimenticato la password?
                                </a>
                            </Text>
                            <Spacer width={10} height={10} />
                        </div>
                        <Text as="b">
                            <Checkbox
                                colorScheme="purple"
                                onChange={handleChebox}
                                isChecked={checkbox}
                            >
                                Ricordami
                            </Checkbox>
                        </Text>
                        <Button
                            width={'100%'}
                            backgroundColor="#EF426F"
                            color="white"
                            _hover={{ bg: '#EF426F' }}
                            onClick={handleAccess}
                        >
                            Accedi
                        </Button>
                        {/* <Text as="b">
                            Non sei ancora registrato?
                            <a style={{ color: '#EF426F', cursor: ' pointer' }}>
                                registrati
                            </a>
                        </Text> */}
                        {/* <Spacer width={20} height={20} />
                        <Button
                            width={'100%'}
                            colorScheme="white"
                            color={'black'}
                            border={'1px solid rgba(81, 70, 137, 0.7)'}
                            _hover={{
                                bg: '#dfded3',
                                border: '1px solid black',
                            }}
                        >
                            <img src="image\Google - Original.svg" />{' '}
                            <Spacer width={3} />
                            Accedi con google
                        </Button>
                        <Button
                            width={'100%'}
                            colorScheme="white"
                            color={'black'}
                            border={'1px solid rgba(81, 70, 137, 0.7)'}
                            _hover={{
                                bg: '#dfded3',
                                border: '1px solid black',
                            }}
                        >
                            <img src="image\Facebook - Original.svg" />
                            <Spacer width={3} />
                            Accedi con facebook
                        </Button> */}
                    </Stack>
                </Flex>
            </Flex>
        </FormProvider>
    )
}
export default FormLogin
