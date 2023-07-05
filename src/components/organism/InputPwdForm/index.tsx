import { InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import InputForm from '../../molecules/InputForm'
import Li from '../../atoms/Li'
interface Props extends InputProps {
    placeholder: string
    label: string
    fontWeight?: string
    fontSize?: string
    name: string
    type?: string
    error?: string
}
const InputPwdForm = ({
    placeholder,
    label,
    fontWeight,
    fontSize,
    name,
    type,
    error,
    ...rest
}: Props) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <InputGroup>
            <InputForm
                label={label}
                fontWeight={fontWeight}
                placeholder={placeholder}
                name={name}
                type={show ? 'text' : 'password'}
                error={error}
                {...rest}
            />
            <InputRightElement width="4.5rem">
                <Li
                    onClick={handleClick}
                    style={{
                        top: '36px',
                        border: '0px',
                        position: 'absolute',
                        left: '36px',
                        width: 'fit-content',
                    }}
                >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                </Li>
            </InputRightElement>
        </InputGroup>
    )
}
export default InputPwdForm
