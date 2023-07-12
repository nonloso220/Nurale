import { Stack, Text, Button } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
// import { ROUTES } from '../../utils/costants'
import { schema } from './validation'
import { Flex, LogoImage, Spacer } from '../..'
import InputForm from '../../molecules/InputForm'
import { User } from '../../../utils/models'
const RecuperoPassword = () => {
    const navigate = useNavigate()
    const defaultValues = { email: '' }
    const methods = useForm<Partial<User>>({
        defaultValues,
        resolver: zodResolver(schema),
    })
    const {
        formState: { errors },
        // trigger,
        // getValues,
        // reset,
        // setValue,
    } = methods
    const handleClickBackToLogin = () => {
        return navigate(-1)
    }

    return (
        <FormProvider {...methods}>
            <Flex
                width={100}
                height={100}
                bgcolor="linear-gradient(299.92deg, #514689 18.26%, #EF426F 117.31%)"
            >
                <Flex
                    style={{
                        borderRadius: '3.8rem',
                        justifyContent: 'center',
                        // webkitBoxPack: 'center',
                        marginLeft: '35%',
                        marginTop: '7%',
                    }}
                    column="column"
                    width={27.6}
                    widthType="rem"
                    height={31.900000000000006}
                    heightType="rem"
                    padding={5}
                    bgcolor="white"
                >
                    <LogoImage />
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
                            <Spacer width={20} height={20} />
                            <InputForm
                                label="Email"
                                placeholder="inserisci email"
                                fontWeight="bold"
                                name={'email'}
                            />
                            <div style={{ color: 'red' }}>
                                {errors?.email?.message}
                            </div>
                            <Spacer width={20} height={10} />
                            <Button
                                width={'100%'}
                                backgroundColor="#EF426F"
                                color="white"
                                _hover={{ bg: '#EF426F' }}
                                // onClick={handleAccess}
                            >
                                Recupero password
                            </Button>
                            <Text
                                as="b"
                                style={{
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <a onClick={handleClickBackToLogin}>
                                    Torna al login
                                </a>
                            </Text>
                        </Stack>
                    </Flex>
                </Flex>
            </Flex>
        </FormProvider>
    )
}
export default RecuperoPassword
