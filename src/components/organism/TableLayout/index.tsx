import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store'
import { Skill } from '../../../store/skills/skill/types'
import { User } from '../../../store/users/user/types'
import { Flex, Table } from '../..'
import Navbar from '../../molecules/Navbar'
import Li from '../../atoms/Li'
import { AddIcon } from '@chakra-ui/icons'
import { theme } from '../../../theme'
import Filter from '../../molecules/Filter'
import Paginate from '../Pagination'
import ModalConfirm from '../../molecules/ModalConfirm'
import { Text } from '@chakra-ui/react'
import { QueryParams } from '../../../utils/models'
import { TypeOfPayment } from '../../../store/typeOfPayments'
import { typePage } from '../../../utils/costants'
import { Customer } from '../../../store/customers'

interface Props {
    labelNavbar: string
    lablel: string
    totalElement: number //getPaginations  useSelector(getPaginations)
    objects: Customer[]| TypeOfPayment[] | User[] | Skill[] //getobject  useSelector(getTypeOfPayments)
    typePage: typePage
    elementFilter: boolean | string | undefined
    children: React.ReactNode
    childrenFilter: React.ReactNode
    open: boolean
    handleColumns: () => void
    fetchElement: ({}) => void
    form: (item: any) => void
    setOpen: (item: boolean) => void
    deleteFunction: (item: any) => void
    setElementFilter: (item: boolean | string | undefined) => void
}
const TableLayout = ({
    labelNavbar,
    lablel,
    totalElement,
    objects,
    elementFilter,
    children,
    childrenFilter,
    open = false,
    typePage,
    handleColumns,
    fetchElement,
    form,
    setOpen,
    deleteFunction,
    setElementFilter,
}: Props) => {
    const dispatch = useAppDispatch()
    const [openDelete, setOpenDelete] = useState(false)
    const [skip, setSkip] = useState(0)
    const [object, setObject] = useState<TypeOfPayment | User | Skill | null>(
        null
    )
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [filter, setFilter] = useState(false)
    // const [coloredButton, setColoredButton] = useState(false)
    // const [coloredButton2, setColoredButton2] = useState(false)
    let take = 10
    const params: QueryParams = {
        skip: skip,
        take: take,
    }
    useEffect(() => {
        dispatch(
            fetchElement({
                skip: skip,
                take: take,
            })
        )
    }, [])
    const handleClick = () => {
        setOpen(!open)
        setObject(null)
    }
    const handleClickFilter = () => {
        setFilter(!filter)
    }
    const handleFormEdit = (object: TypeOfPayment | User | Skill) => {
        setOpen(true)
        setObject(object)
    }
    const handleConfirmDelete = (object: TypeOfPayment | User | Skill) => {
        setOpenDelete(true)
        setObject(object)
    }
    const handleCloseDelete = async () => {
        setOpenDelete(false)
        await dispatch(
            fetchElement({
                skip: skip,
                take: take,
            })
        )
    }
    const handleDelete = async () => {
        await dispatch(deleteFunction(object?.id))
    }
    useEffect(() => {
        dispatch(
            fetchElement({
                skip: skip,
                take: take,
            })
        )
    }, [skip])
    const handlePagination = (page: number) => {
        setSkip(page)
    }
    const fetchFiltered = async () => {
        switch (typePage) {
            case 'user':
                console.log('null1')
                break
            case 'skill':
                await dispatch(
                    fetchElement({
                        skillType: elementFilter,
                        skip: skip,
                        take: take,
                    })
                )
                break
            case 'typeOfPayment':
                await dispatch(
                    fetchElement({
                        hasEndOfMonth: elementFilter,
                        skip: skip,
                        take: take,
                    })
                )
                break
        }
    }
    const deleteName = () => {
        if (object) {
            if ('email' in object) {
                return String(object?.email)
            }
            if ('name' in object) {
                return String(object?.name)
            }
        }
        return ''
    }
    const handleResetFilter = async () => {
        console.log(elementFilter)
        setElementFilter(undefined)
        await dispatch(
            fetchElement({
                skip: skip,
                take: take,
            })
        )
    }

    const objectForm: any = {
        object,
        open,
        setOpen,
        params,
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
            <Navbar label={labelNavbar} />
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
                    {lablel}
                </Text>
                <br />
                {open ? (
                    (form(objectForm), children)
                ) : (
                    <Flex bgcolor="white" column="column">
                        <Flex bgcolor="white">
                            <Table
                                columns={handleColumns()}
                                data={objects}
                                handleEdit={handleFormEdit}
                                handleDelete={handleConfirmDelete}
                            ></Table>
                            {filter ? (
                                <Filter
                                    handleSave={fetchFiltered}
                                    handleResetFilter={handleResetFilter}
                                    open={filter}
                                    setOpen={setFilter}
                                >
                                    {childrenFilter}
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
                    objectName={deleteName()}
                    handleClose={handleCloseDelete}
                    handleDelete={handleDelete}
                ></ModalConfirm>
            </div>
        </Flex>
    )
}
export default TableLayout
