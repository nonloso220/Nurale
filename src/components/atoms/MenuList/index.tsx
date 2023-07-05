import { useNavigate } from 'react-router-dom'
import { SIDEBAR } from '../../../utils/costants'
import Li from '../Li'
import TextElement from '../../molecules/TextElement'
interface Props {
    name: string
}
const MenuList = ({ name }: Props) => {
    // const handleDropdownFocus = (state: boolean) => {
    //     setOpen(!state)
    //     console.log(open)
    // }
    // console.log(open)
    const navigate = useNavigate()
    return (
        <ul
            style={{
                listStyleType: 'none',
                paddingLeft: '36px',
            }}
        >
            {SIDEBAR.map((sidebar) =>
                sidebar.name == name ? (
                    sidebar.sublink?.map((sub) => (
                        <Li
                            style={{
                                paddingBlock: '10px',
                                borderRadius: '0',
                                borderWidth: '0 0 0 1px',
                            }}
                            onClick={() => navigate(sub.href)}
                            current={
                                location.pathname === sub.href ? true : false
                            }
                        >
                            <TextElement label={sub.name} />
                        </Li>
                    ))
                ) : (
                    <></>
                )
            )}
        </ul>
    )
}
export default MenuList
