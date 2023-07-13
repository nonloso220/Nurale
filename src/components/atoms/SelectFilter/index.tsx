import { Select, SelectProps } from '@chakra-ui/react'
import { ChangeEvent } from 'react'

interface Props extends SelectProps {
    defaultElement: any
    selectElements: string[]
    label: string
    fontWeight?: string
    fontSize?: string
    clear: boolean
    setClear: (clear: boolean) => void
    handleChangeFilter: (event: ChangeEvent<HTMLSelectElement>) => void
}
const SelectFilter = ({
    defaultElement,
    selectElements,
    label,
    fontWeight,
    fontSize,
    clear = false,
    setClear,
    handleChangeFilter,
    ...rest
}: Props) => {
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
            <Select
                placeholder={defaultElement}
                defaultValue={defaultElement}
                style={{
                    borderRadius: '11px',
                    borderColor: 'rgb(133, 125, 172)',
                }}
                onChange={handleChangeFilter}
                {...rest}
            >
                {clear ? (
                    <>
                        <option value="" selected></option>
                        {setClear(!clear)}
                    </>
                ) : null}
                {selectElements?.map((element) => (
                    <option value={element}>{element}</option>
                ))}
            </Select>
        </div>
    )
}
export default SelectFilter
