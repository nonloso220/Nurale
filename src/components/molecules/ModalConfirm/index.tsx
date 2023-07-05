import {
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Stack,
} from '@chakra-ui/react'
import ButtonForm from '../ButtonForm'
import { CloseIcon, CheckIcon } from '@chakra-ui/icons'
import { theme } from '../../../theme'

interface Props {
    open: boolean
    objectName: string
    handleClose: () => void
    handleDelete: () => void
}
const ModalConfirm = ({
    open,
    objectName,
    handleClose,
    handleDelete,
}: Props) => {
    return (
        <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay bgColor={'rgba(3, 30, 66, 0.5)'} />
            <ModalContent top="25%">
                <ModalBody padding="3.5rem 0">
                    <Flex flexDirection="column">
                        <p
                            style={{
                                textAlign: 'center',
                                fontSize: theme.fontSizes.xs,
                                fontWeight: theme.fontWeights.bold,
                            }}
                        >
                            Sei sicuro di voler eliminare
                            <span style={{ color: theme.colors.pink100 }}>
                                {' '}
                                {objectName}
                            </span>
                        </p>
                        <Flex
                            width="100%"
                            justifyContent="right"
                            placeContent="center"
                        >
                            <Flex paddingTop="3rem">
                                <Stack spacing={3} direction="row">
                                    <ButtonForm
                                        leftIcon={<CloseIcon />}
                                        width="fit-content"
                                        onClick={handleClose}
                                        fontSize={theme.fontSizes.xs}
                                        backgroundColor={theme.colors.gray20}
                                        color={theme.colors.purple}
                                    >
                                        Annulla
                                    </ButtonForm>
                                    <ButtonForm
                                        leftIcon={<CheckIcon />}
                                        width="fit-content"
                                        onClick={async () => (
                                            await handleDelete(), handleClose()
                                        )}
                                        fontSize={theme.fontSizes.xs}
                                        backgroundColor={theme.colors.pink100}
                                    >
                                        Conferma
                                    </ButtonForm>
                                </Stack>
                            </Flex>
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
export default ModalConfirm
