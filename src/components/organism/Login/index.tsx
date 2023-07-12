import { Flex } from '../../atoms'
import FormLogin from './formLogin'
import ImmagineLogin from './immagineLogin'
const Login = () => {
    return (
        <Flex width={100}>
            <FormLogin />
            <ImmagineLogin />
        </Flex>
    )
}

export default Login
