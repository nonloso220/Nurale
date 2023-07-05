import { Flex } from '../../atoms'
import { Select, SelectProps } from '@chakra-ui/react'

interface Props extends SelectProps {
    label: string
    fontWeight?: string
    fontSize?: string
    name?: string
    error?: string
    defaultElement: any
    selectElements: string[]
}
const SelectForm = ({
    label,
    fontWeight,
    fontSize,
    name,
    error,
    defaultElement,
    selectElements,
    ...rest
}: Props) => {
    return (
        <Flex bgcolor="white" column="column">
            <label
                style={{
                    fontFamily: 'Lato',
                    fontWeight: fontWeight ? fontWeight : '100px',
                    fontSize: fontSize ? fontSize : '18px',
                }}
            >
                {label}
            </label>
            <Select
                name={name}
                placeholder={defaultElement}
                style={{
                    borderRadius: '11px',
                    borderColor: 'rgb(133, 125, 172)',
                }}
                {...rest}
            >
                {selectElements.map((element) => (
                    <option value={element}>{element}</option>
                ))}
            </Select>

            <div style={{ color: 'red' }}>{error}</div>
        </Flex>
    )
}
export default SelectForm
