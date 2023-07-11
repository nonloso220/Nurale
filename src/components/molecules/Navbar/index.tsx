import { Flex } from '../..'
import TextElement from '../TextElement'
interface Props {
    label?: string
}
const Navbar = ({ label }: Props) => {
    return (
        <div>
            <Flex
                bgcolor="linear-gradient(90deg, rgb(239, 66, 111) 0%, rgb(81, 70, 137) 26.06%, rgba(0, 0, 0, 0) 51.87%)"
                width={100}
                widthType="%"
                height={47}
                heightType="px"
                style={{
                    borderRadius: '0px 0px 20px 0px',
                    color: 'white',
                    boxShadow: 'rgba(81, 70, 137, 0.3) 0px 2px 6px',
                }}
            >
                <span
                    style={{
                        marginBlock: 'auto',
                        marginRight: '80%',
                        marginLeft: '3%',
                        fontSize: 'larger',
                    }}
                >
                    {label}
                </span>

                <TextElement
                    nameIcon={'campanelloIcon'}
                    colorIcon="gray"
                    paddingIcon="0"
                    paddingRight="15px"
                />
                <TextElement
                    nameIcon={'accountIcon'}
                    colorIcon="gray"
                    paddingIcon="0"
                />
            </Flex>
        </div>
    )
}
export default Navbar
