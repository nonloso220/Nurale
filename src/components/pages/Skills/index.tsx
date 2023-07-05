import { createColumnHelper } from '@tanstack/react-table'
import { Flex, Table } from '../..'
import Navbar from '../../molecules/Navbar'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store/applicationStore'
import { AddIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import { theme } from '../../../theme'
import Li from '../../atoms/Li'
import { fetchSkills } from '../../../store/skills/skills'
import {
    getPaginations,
    getSkills,
} from '../../../store/skills/skills/selectors'
import FormNewSkill from './formNewSkill'
import Paginate from '../../organism/Pagination'
import FormEditSkill from './formEditSkill'
import { Skill } from '../../../store/skills/skill'

const Skills = () => {
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    // const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [skip, setSkip] = useState(0)
    const [skill, setSkill] = useState<Skill | null>(null)
    const skills = useSelector(getSkills)
    const totalElement = useSelector(getPaginations)
    const take = 10

    useEffect(() => {
        dispatch(
            fetchSkills({
                search: '',
                skip: skip,
                take: take,
            })
        )
    }, [])
    const handleClick = () => {
        setOpen(!open)
    }
    const createColumHelper: any = createColumnHelper<any>()
    const cols = [
        createColumHelper.accessor('name', {
            cell: (Props: any) => Props.getValue(),
            header: 'Nome',
        }),
        createColumHelper.accessor('skillType', {
            cell: (Props: any) => Props.getValue(),
            header: 'Tipo di skill',
        }),
        createColumHelper.accessor('note', {
            cell: (Props: any) => Props.getValue(),
            header: 'Note',
        }),
    ]
    const handleFormEditSkill = (object: Skill) => {
        setOpenEdit(true)
        setSkill(object)
    }
    // const handleConfirmDelete = (object: User) => {
    //     setOpenDelete(true)
    //     setUser(object)
    // }

    // const handleCloseDelete = async () => {
    //     setOpenDelete(false)
    //     await dispatch(
    //         fetchUsers({
    //             search: '',
    //             skip: skip,
    //             take: take,
    //         })
    //     )
    // }
    // const handleDelete = async () => {
    //     await dispatch(deleteUser(user?.id))
    // }
    useEffect(() => {
        dispatch(
            fetchSkills({
                search: '',
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
            <Navbar label="Skills" />
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
                    Aggiungi nuova Skill
                </Text>
                <br />
                {open ? (
                    <FormNewSkill
                        open={open}
                        take={take}
                        skip={skip}
                        setOpen={setOpen}
                    />
                ) : openEdit ? (
                    <FormEditSkill
                        open={openEdit}
                        setOpen={setOpen}
                        take={take}
                        skip={skip}
                        skill={skill}
                    />
                ) : (
                    <Flex bgcolor="white" column="column">
                        <Flex bgcolor="white">
                            <Table
                                columns={cols}
                                data={skills}
                                handleEdit={handleFormEditSkill}
                                handleDelete={() => null}
                            ></Table>
                        </Flex>
                        <Paginate
                            handlePagination={handlePagination}
                            skip={skip}
                            take={take}
                            totalElement={totalElement}
                        />
                    </Flex>
                )}
                {/* <ModalConfirm
                    open={openDelete}
                    objectName={String(user?.email)}
                    handleClose={handleCloseDelete}
                    handleDelete={handleDelete}
                ></ModalConfirm> */}
            </div>
        </Flex>
    )
}
export default Skills
