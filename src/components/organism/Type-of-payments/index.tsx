import { Flex, Table } from '../..'
import Navbar from '../../molecules/Navbar'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store/applicationStore'
import { AddIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import { theme } from '../../../theme'
import Li from '../../atoms/Li'
import Paginate from '../Pagination'
import {
    fetchTypeOfPayments,
    getPaginations,
    getTypeOfPayments,
} from '../../../store/typeOfPayments/typeOfPayments'
import FormTypeOfPayment from './form'
import ModalConfirm from '../../molecules/ModalConfirm'
import {
    TypeOfPayment,
    deleteTypeOfPayment,
} from '../../../store/typeOfPayments'
import { handleColumns } from './columns'
const TypeOfPayments = () => {
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [skip, setSkip] = useState(0)
    const [typeOfPayment, setTypeOfPayment] = useState<TypeOfPayment | null>(
        null
    )
    const typeOfPayments = useSelector(getTypeOfPayments)
    const totalElement = useSelector(getPaginations)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [filter, setFilter] = useState(false)
    const take = 10
    useEffect(() => {
        dispatch(
            fetchTypeOfPayments({
                skip: skip,
                take: take,
            })
        )
    }, [])
    const handleClick = () => {
        setOpen(!open)
    }
    const handleClickFilter = () => {
        setFilter(!filter)
    }
    const handleFormEditSkill = (object: TypeOfPayment) => {
        setOpenEdit(true)
        setTypeOfPayment(object)
    }
    const handleConfirmDelete = (object: TypeOfPayment) => {
        setOpenDelete(true)
        setTypeOfPayment(object)
    }

    const handleCloseDelete = async () => {
        setOpenDelete(false)
        await dispatch(
            fetchTypeOfPayments({
                skip: skip,
                take: take,
            })
        )
    }
    const handleDelete = async () => {
        await dispatch(deleteTypeOfPayment(typeOfPayment?.id))
    }
    useEffect(() => {
        dispatch(
            fetchTypeOfPayments({
                skip: skip,
                take: take,
            })
        )
    }, [skip])
    const handlePagination = (page: number) => {
        setSkip(page)
    }
    return (
        <Flex
            column="column"
            bgcolor="white"
            width={100}
            widthType="%"
            height={100}
            style={{ overflow: 'auto' }}
        >
            <Navbar label="Tipi di pagamento" />
            <div
                style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    marginTop: open ? '17px' : '55px',
                }}
            >
                <Flex bgcolor="white">
                    <Flex bgcolor="white">
                        <Li
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '167px',
                                color: 'white',
                            }}
                            onClick={handleClick}
                        >
                            <AddIcon />
                            <span>&nbsp; aggiungi nuovo</span>
                        </Li>
                    </Flex>
                    <Flex bgcolor="white" style={{ marginLeft: 'auto' }}>
                        <Li
                            style={{
                                backgroundColor: theme.colors.pink100,
                                display: open ? 'none' : 'block',
                                border: '0px',
                                padding: '10px',
                                width: '191px',
                                color: 'white',
                                marginRight: '0',
                            }}
                            onClick={handleClickFilter}
                        >
                            <span style={{ paddingLeft: '33%' }}>
                                &nbsp; Filtri
                            </span>
                        </Li>
                    </Flex>
                </Flex>

                <Text
                    style={{
                        color: theme.colors.pink100,
                        fontFamily: 'Lato',
                    }}
                    fontSize="3xl"
                    display={open ? 'block' : 'none'}
                >
                    Aggiungi nuovo Tipo di Pagamento
                </Text>
                <br />

                {open ? (
                    <FormTypeOfPayment
                        open={open}
                        take={take}
                        skip={skip}
                        setOpen={setOpen}
                    />
                ) : openEdit ? (
                    <FormTypeOfPayment
                        open={openEdit}
                        take={take}
                        skip={skip}
                        TypeOfPayment={typeOfPayment}
                        setOpen={setOpenEdit}
                    />
                ) : (
                    <Flex bgcolor="white" column="column">
                        <Flex bgcolor="white">
                            <Table
                                columns={handleColumns()}
                                data={typeOfPayments}
                                handleEdit={handleFormEditSkill}
                                handleDelete={handleConfirmDelete}
                            ></Table>
                            {/* {filter ? (
                                <div></div>
                                // <FormAddFilter
                                //     open={filter}
                                //     take={take}
                                //     skip={skip}
                                //     setOpen={setFilter}
                                // />
                            ) : null} */}
                        </Flex>
                        <Paginate
                            handlePagination={handlePagination}
                            skip={skip}
                            take={take}
                            totalElement={totalElement}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </Flex>
                )}
                <ModalConfirm
                    open={openDelete}
                    objectName={String(typeOfPayment?.name)}
                    handleClose={handleCloseDelete}
                    handleDelete={handleDelete}
                ></ModalConfirm>
            </div>
        </Flex>
    )
}
export default TypeOfPayments
