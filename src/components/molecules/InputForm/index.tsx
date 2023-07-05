import { CloseIcon } from '@chakra-ui/icons'
import {
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
interface Props extends InputProps {
    placeholder: string
    label: string
    fontWeight?: string
    fontSize?: string
    name?: string
    error?: string
    closeIcon?: boolean
    closeIconAction?: () => void
}
const InputForm = ({
    placeholder,
    label,
    fontWeight,
    fontSize,
    name,
    error,
    closeIcon,
    closeIconAction,
    ...rest
}: Props) => {
    const { register } = useFormContext()
    return (
        <div>
            <label
                style={{
                    fontFamily: 'Lato',
                    fontWeight: fontWeight ? fontWeight : '100px',
                    fontSize: fontSize ? fontSize : '18px',
                }}
            >
                {label}
            </label>
            <InputGroup>
                {name ? (
                    <Input
                        placeholder={placeholder}
                        fontSize={fontSize ? fontSize : '18px'}
                        {...register(name)}
                        {...rest}
                    />
                ) : (
                    <Input
                        placeholder={placeholder}
                        fontSize={fontSize ? fontSize : '18px'}
                        readOnly={true}
                        cursor="not-allowed"
                    />
                )}
                {closeIcon ? (
                    <InputRightElement>
                        <CloseIcon onClick={closeIconAction} />
                    </InputRightElement>
                ) : null}
            </InputGroup>

            <div style={{ color: 'red' }}>{error}</div>
        </div>
    )
}
export default InputForm
