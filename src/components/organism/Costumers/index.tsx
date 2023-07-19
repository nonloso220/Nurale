import { Flex, Table } from '../..'
import Navbar from '../../molecules/Navbar'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store/applicationStore'
import { fetchUsers, getPaginations, getUsers } from '../../../store'
import { AddIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import { theme } from '../../../theme'
import Li from '../../atoms/Li'
import { User } from '../../../store/users/user'
import { deleteUser } from '../../../store/users/user/actions/delete'
import ModalConfirm from '../../molecules/ModalConfirm'
import Paginate from '../../organism/Pagination'
import { useTranslation } from 'react-i18next'
import { handleColumns } from './columns'
import FormUser from '../Utenti/form'
import Filter from '../../molecules/Filter'
import FormTypeOfPayment from '../Type-of-payments/form'
import {
    TypeOfPayment,
    deleteTypeOfPayment,
    fetchTypeOfPayments,
    getTypeOfPayments,
} from '../../../store/typeOfPayments'
const Costumers = () => {
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
    const [elementFilter, setElementFilter] = useState<boolean>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [filter, setFilter] = useState(false)
    const [coloredButton, setColoredButton] = useState(false)
    const [coloredButton2, setColoredButton2] = useState(false)
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
    const handleFilter = (element: boolean) => {
        setColoredButton(element ? true : false)
        setColoredButton2(element ? false : true)
        setElementFilter(element)
    }
    const fetchTypeOfPaymentsFiltered = async () => {
        await dispatch(
            fetchTypeOfPayments({
                hasEndOfMonth: elementFilter,
                skip: skip,
                take: take,
            })
        )
    }
    const handleResetFilter = async () => {
        setColoredButton(false)
        setColoredButton2(false)
        setElementFilter(undefined)
        await dispatch(
            fetchTypeOfPayments({
                skip: skip,
                take: take,
            })
        )
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
                            {filter ? (
                                <Filter
                                    handleSave={fetchTypeOfPaymentsFiltered}
                                    handleResetFilter={handleResetFilter}
                                    open={filter}
                                    setOpen={setFilter}
                                >
                                    <Flex bgcolor="white">
                                        <span>
                                            Pagamenti alla fine del mese
                                        </span>
                                    </Flex>
                                    <Flex bgcolor="white">
                                        <Li
                                            style={{
                                                backgroundColor:
                                                    theme.colors.pink100,
                                                display: open
                                                    ? 'none'
                                                    : 'block',
                                                border: '0px',
                                                padding: '10px',
                                                width: '65px',
                                                color: 'white',
                                                textAlign: 'center',
                                            }}
                                            onClick={handleResetFilter}
                                        >
                                            Tutti
                                        </Li>
                                        <Li
                                            style={{
                                                backgroundColor: coloredButton
                                                    ? theme.colors.purple
                                                    : theme.colors.pink100,
                                                display: open
                                                    ? 'none'
                                                    : 'block',
                                                border: '0px',
                                                padding: '10px',
                                                width: '65px',
                                                color: 'white',
                                                textAlign: 'center',
                                            }}
                                            onClick={() => handleFilter(true)}
                                        >
                                            Si
                                        </Li>
                                        <Li
                                            style={{
                                                backgroundColor: coloredButton2
                                                    ? theme.colors.purple
                                                    : theme.colors.pink100,
                                                display: open
                                                    ? 'none'
                                                    : 'block',
                                                border: '0px',
                                                padding: '10px',
                                                width: '65px',
                                                color: 'white',
                                                textAlign: 'center',
                                            }}
                                            onClick={() => {
                                                handleFilter(false)
                                            }}
                                        >
                                            No
                                        </Li>
                                    </Flex>
                                </Filter>
                            ) : null}
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
export default Costumers
