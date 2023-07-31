import { CloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
    Select,
    Textarea,
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import Li from '../../atoms/Li'
import { useState } from 'react'
import { TypeOfPayment } from '../../../store/typeOfPayments'
import { number } from 'zod'
interface Props extends InputProps {
    type?: string
    placeholder: string
    label: string
    fontWeight?: string
    fontSize?: string
    name: string
    error?: string
    action: string
    defaultElement?: any
    selectElements?: string[]
    selectElementsObject?: any
    showPassword?: boolean
    closeIconAction?: () => void
}
const InputForm = ({
    placeholder,
    label,
    fontWeight,
    fontSize,
    name,
    error,
    type = 'text',
    action = 'input',
    closeIconAction,
    defaultElement,
    selectElements,
    selectElementsObject,
    showPassword = true,
    ...rest
}: Props) => {
    const [show, setShow] = useState(showPassword)
    const { register } = useFormContext()
    const handleClick = () => setShow(!show)
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
            {action === 'select' ? ( //SELECT
                <Select
                    placeholder={defaultElement}
                    style={{
                        borderRadius: '11px',
                        borderColor: 'rgb(133, 125, 172)',
                    }}
                    {...register(name)}
                >
                    {selectElementsObject
                        ? selectElementsObject?.map(
                              (element: TypeOfPayment) => (
                                  <option value={String(element.id)}>
                                      {element.name}
                                  </option>
                              )
                          )
                        : selectElements?.map((element) => (
                              <option value={element}>{element}</option>
                          ))}
                    {}
                </Select>
            ) : action === 'input' ? ( //INPUT
                <InputGroup>
                    <Input
                        placeholder={placeholder}
                        fontSize={fontSize ? fontSize : '18px'}
                        {...register(name)}
                        {...rest}
                        type={show ? 'text' : 'password'}
                        isDisabled={type === 'email' ? true : false}
                        cursor={type === 'email' ? 'not-allowed' : 'pointer'}
                        readOnly={type === 'email' ? true : false}
                    />
                    {type === 'password' || type === 'closeIcon' ? (
                        <InputRightElement>
                            {type === 'closeIcon' ? ( //close icon
                                <CloseIcon onClick={closeIconAction} />
                            ) : null}
                            {type === 'password' ? ( //password icon
                                <Li
                                    onClick={handleClick}
                                    // style={{
                                    //     top: '36px',
                                    //     border: '0px',
                                    //     position: 'absolute',
                                    //     left: '36px',
                                    //     width: 'fit-content',
                                    // }}
                                >
                                    {show ? <ViewIcon /> : <ViewOffIcon />}
                                </Li>
                            ) : null}
                        </InputRightElement>
                    ) : null}
                </InputGroup>
            ) : action === 'textArea' ? ( //TEXT AREA
                <Textarea placeholder="Note" {...register(name)} />
            ) : null}

            <div style={{ color: 'red' }}>{error}</div>
        </div>
    )
}
export default InputForm
