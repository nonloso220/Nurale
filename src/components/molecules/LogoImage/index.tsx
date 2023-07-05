import { Divider } from '@chakra-ui/react'
import { Flex } from '../../atoms'
interface Props {
    width?: number
    widthDivider?: number
    hightDivider?: number
    login?: boolean
}
const LogoImage = ({
    width = 20,
    widthDivider = 281,
    hightDivider = 89,
    login = false,
}: Props) => {
    return (
        <Flex bgcolor="white">
            <img
                style={{
                    marginRight: '5%',
                    position: login ? 'absolute' : 'relative',
                    width: `${width}%`,
                }}
                src="image\logo-form-piccolo.svg"
            />
            <Divider
                style={{
                    position: 'absolute',
                    border: '1.5px solid',
                    width: `${widthDivider}px`,
                    color: '#514689',
                    marginTop: `${hightDivider}px`,
                }}
            />
        </Flex>
    )
}
export default LogoImage
