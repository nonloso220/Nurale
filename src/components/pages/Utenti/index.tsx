import { createColumnHelper } from '@tanstack/react-table'
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
import FormNewUser from './formNewUser'
import FormEditUser from './formEditUser'
import Paginate from '../../organism/Pagination'
const Users = () => {
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const users = useSelector(getUsers)
    const totalElement = useSelector(getPaginations)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const take = 100
    const [skip, setSkip] = useState(0)
    useEffect(() => {
        dispatch(
            fetchUsers({
                search: '',
                skip: skip,
                take: take,
            })
        )
    }, [])
    useEffect(() => {
        dispatch(
            fetchUsers({
                search: '',
                skip: skip,
                take: take,
            })
        )
    }, [skip])
    const handlePagination = (page: number) => {
        setSkip(page)
    }
    const handleClick = () => {
        setOpen(!open)
    }
    const createColumHelper: any = createColumnHelper<any>()
    const cols = [
        createColumHelper.accessor('firstName', {
            cell: (Props: any) => Props.getValue(),
            header: 'Nome',
        }),
        createColumHelper.accessor('lastName', {
            cell: (Props: any) => Props.getValue(),
            header: 'Cognome',
        }),
        createColumHelper.accessor('email', {
            cell: (Props: any) => Props.getValue(),
            header: 'Email',
        }),
    ]
    const handleConfirmDelete = (object: User) => {
        setOpenDelete(true)
        setUser(object)
    }
    const handleFormEditUser = (object: User) => {
        setOpenEdit(true)
        setUser(object)
    }
    const handleCloseDelete = async () => {
        setOpenDelete(false)
        await dispatch(
            fetchUsers({
                search: '',
                skip: skip,
                take: take,
            })
        )
    }
    const handleDelete = async () => {
        await dispatch(deleteUser(user?.id))
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
            <Navbar label="utenti" />
            <div
                style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    marginTop: open ? '17px' : '55px',
                }}
            >
                <Flex bgcolor="white">
                    <Li
                        style={{
                            backgroundColor: theme.colors.pink100,
                            display: open || openEdit ? 'none' : 'block',
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
                <Text
                    style={{
                        color: theme.colors.pink100,
                        fontFamily: 'Lato',
                    }}
                    fontSize="3xl"
                    display={open ? 'block' : 'none'}
                >
                    Aggiungi nuovo utente
                </Text>
                <br />
                {open ? (
                    <FormNewUser open={open} setOpen={setOpen} />
                ) : openEdit ? (
                    <FormEditUser
                        open={openEdit}
                        user={user}
                        setOpen={setOpenEdit}
                    />
                ) : (
                    <Flex bgcolor="white" column="column">
                        <Flex bgcolor="white">
                            <Table
                                columns={cols}
                                data={users}
                                handleEdit={handleFormEditUser}
                                handleDelete={handleConfirmDelete}
                            ></Table>
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
                    objectName={String(user?.email)}
                    handleClose={handleCloseDelete}
                    handleDelete={handleDelete}
                ></ModalConfirm>
            </div>
        </Flex>
    )
}
export default Users
