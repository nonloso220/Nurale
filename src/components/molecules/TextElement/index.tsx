import { Flex } from '@chakra-ui/react'
import Icons from '../../atoms/icons'
import { Text } from '@chakra-ui/react'
import { icons } from '../../../utils/costants'
interface Props {
    label?: string
    nameIcon?: icons
    colorIcon?: string
    paddingIcon?: string
    marginLeft?: string
    marginRight?: string
    paddingRight?: string
    nameOtherIcon?: icons
    dropDownOpen?: boolean
    sidebarArrow?: boolean
    left?: string
    right?: string
    top?: string
    display?: string
    position?: any
    paddingBottom?: string
    marginTop?: string
    colorBoolean?: boolean
    colorText?: string
}
const TextElement = ({
    label,
    nameIcon = undefined,
    nameOtherIcon = undefined,
    colorIcon = 'black',
    paddingIcon = '0rem 1.3rem',
    marginLeft = '',
    marginRight = '',
    paddingRight = '',
    dropDownOpen = false,
    sidebarArrow = false,
    left = '0',
    right = '0',
    top = '0',
    display = 'flex',
    position = 'relative',
    paddingBottom = '0',
    marginTop = '0',
}: Props) => {
    return (
        <Flex
            style={{
                marginTop: marginTop,
                paddingBottom: paddingBottom,
                position: position,
                display: `${display}`,
                alignItems: 'center',
                marginLeft: `${marginLeft}`,
                marginRight: `${marginRight}`,
                paddingRight: `${paddingRight}`,
                width: '100%',
                left: `${left}`,
                right: `${right}`,
                top: `${top}`,
            }}
        >
            {nameIcon && <Icons name={nameIcon} size={1.5} color={colorIcon} />}
            {sidebarArrow ? null : (
                <>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            lineHeight: '1.3rem',
                            fontSize: '14.2px',
                            padding: `${paddingIcon}`,
                        }}
                    >
                        <span>{label}</span>
                    </Text>
                    {nameOtherIcon && (
                        <span
                            style={{ paddingTop: '12px', marginLeft: 'auto' }}
                        >
                            {dropDownOpen ? (
                                <Icons
                                    name={nameOtherIcon}
                                    size={1.5}
                                    color={colorIcon}
                                />
                            ) : (
                                <Icons
                                    name={'dropdownUpIcon'}
                                    size={1.5}
                                    color={colorIcon}
                                />
                            )}
                        </span>
                    )}
                </>
            )}
        </Flex>
    )
}
export default TextElement
