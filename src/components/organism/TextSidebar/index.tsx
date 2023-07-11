import { Flex } from '../../atoms'
import TextElement from '../../molecules/TextElement'
import { SIDEBAR, icons } from '../../../utils/costants'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MenuList from '../../molecules/MenuList'
import Li from '../../atoms/Li'

interface Props {
    nameIcon?: icons
    nameOtherIcon?: icons
    label?: string
    marginRight?: string
    dropdownVerification?: boolean
    arryLabel?: string[]
    sidebarArrow?: boolean
}
const TextSidebar = ({
    nameIcon = undefined,
    nameOtherIcon = undefined,
    label = '',
    marginRight = '',
    dropdownVerification = false,
    sidebarArrow = false,
}: Props) => {
    
    const navigate = useNavigate()
    const [open, setOpen] = useState<boolean>(false)

    const handleClick = () => {
        if (!dropdownVerification) {
            SIDEBAR.map((sidebar) => {
                sidebar.name == label
                    ? sidebar.href &&
                      (navigate(sidebar.href))
                    : null
            })
        } else {
            setOpen(!open)
            console.log(open)
        }
    }
    return (
        <Flex
            bgcolor="white"
            height={100}
            heightType="%"
            style={{
                paddingBottom: '16px',
                width: sidebarArrow ? 'fit-content' : '100%',
            }}
            column="column"
        >
            <Li
                onClick={
                    sidebarArrow && open
                        ? () => {
                              return 0
                          }
                        : handleClick
                }
                style={{
                    width: sidebarArrow ? 'fit-content' : '100%',
                }}
            >
                <TextElement
                    label={label}
                    nameIcon={nameIcon}
                    marginRight={marginRight}
                    dropDownOpen={!open}
                    nameOtherIcon={nameOtherIcon}
                    sidebarArrow={sidebarArrow}
                />
            </Li>

            <Flex column="column" bgcolor="white">
                {open && <MenuList name={label} />}
            </Flex>
        </Flex>
    )
}
export default TextSidebar
