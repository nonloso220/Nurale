import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import Modal from '../../atoms/Modal'
import Flex from '../../atoms/Flex'
import Li from '../../atoms/Li'
import { theme } from '../../../theme'

interface Props {
    open: boolean
    children: React.ReactNode
    setOpen: (item: boolean) => void
    handleSave: () => void
    handleResetFilter: () => void
}
const Filter = ({
    open,
    children,
    setOpen,
    handleSave,
    handleResetFilter,
}: Props) => {
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <Modal
            show={open}
            color="black"
            style={{ position: 'absolute', right: '2.5%' }}
        >
            <Flex
                bgcolor="white"
                style={{
                    borderRadius: '10px',
                    width: '340px',
                    height: '480px',
                    padding: '16px',
                    boxShadow: '0 0 10px #857DAC',
                }}
                column="column"
            >
                <Flex bgcolor="white" column="column">
                    <Flex bgcolor="white">
                        <p
                            style={{
                                fontWeight: '550',
                                fontFamily: 'Lato',
                                fontSize: '25px',
                            }}
                        >
                            Filtri
                        </p>
                        <CloseIcon
                            onClick={handleClick}
                            style={{
                                height: 'auto',
                                marginLeft: 'auto',
                                cursor: 'pointer',
                            }}
                        />
                    </Flex>
                    <br />
                    <br />
                    <Flex bgcolor="white" column="column">
                        {children}
                    </Flex>
                </Flex>
                <Flex
                    bgcolor="white"
                    style={{
                        justifyContent: 'flex-end',
                        marginTop: '13%',
                        marginBottom: '2%',
                    }}
                >
                    <Li
                        style={{
                            backgroundColor: theme.colors.gray20,
                            color: theme.colors.purple,
                            border: '0px',
                            padding: '10px',
                            width: '134px',
                            textAlign: 'center',
                        }}
                        marginRight="1rem"
                        onClick={handleResetFilter}
                    >
                        <span style={{ fontWeight: 'bold' }}>
                            &nbsp; Svuota Filtri
                        </span>
                    </Li>
                    <Li
                        style={{
                            backgroundColor: theme.colors.pink100,
                            color: 'white',
                            border: '0px',
                            padding: '10px',
                            width: '156px',
                            textAlign: 'center',
                        }}
                        onClick={handleSave}
                        marginRight="1rem"
                    >
                        <CheckIcon />
                        <span style={{ fontWeight: 'bold' }}>
                            &nbsp; Conferma
                        </span>
                    </Li>
                </Flex>
            </Flex>
        </Modal>
    )
}
export default Filter
