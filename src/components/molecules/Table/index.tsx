import {
    Flex,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

import './index.css'
import { theme } from '../../../theme'
import Icons from '../../atoms/icons'
import { useTranslation } from 'react-i18next'
interface Props {
    data: any
    columns: any
    handleEdit: (item: any) => void
    handleDelete: (item: any) => void
}
const TableComponent = ({ data, columns, handleDelete, handleEdit }: Props) => {
    const { t } = useTranslation()
    const COLUMNHELPER: any = createColumnHelper<any>()
    const columnsHelpers = columns.map((col: any) => {
        return COLUMNHELPER.accessor(col.id, {
            cell: (props: any) => {
                return col.transform
                    ? col.transform(props.row.original[col.id])
                    : props.getValue()
            },
            header: col.name,
        })
    })
    const tableInstance = useReactTable({
        data: data,
        columns: columnsHelpers,
        getCoreRowModel: getCoreRowModel(),
    })
    const ColumnModel = tableInstance.getHeaderGroups()
    const RowModel = tableInstance.getRowModel()
    return (
        <TableContainer
            width="100%"
            borderRadius="10px"
            border="1px solid #857DAC"
        >
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    {ColumnModel.map((headerGroup) => (
                        <Tr
                            key={headerGroup.id}
                            style={{ whiteSpace: 'normal' }}
                        >
                            {headerGroup.headers.map((header) => (
                                <Th
                                    key={header.index}
                                    color="black"
                                    fontSize={theme.fontSizes.xxs}
                                    textTransform="none"
                                    fontFamily="Lato"
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </Th>
                            ))}
                            <Th
                                color="black"
                                fontSize={theme.fontSizes.xxs}
                                textTransform="none"
                                fontFamily="Lato"
                                textAlign={'end'}
                                paddingRight={'50px'}
                            >
                                Azioni
                            </Th>
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {RowModel.rows.map((row) => (
                        <Tr key={row.index} fontFamily="Lato">
                            {row.getVisibleCells().map((cell) => (
                                <Td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </Td>
                            ))}
                            <Td>
                                <Flex
                                    style={{
                                        justifyContent: 'flex-end',
                                        marginRight: '20px',
                                    }}
                                >
                                    <Flex
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleEdit(row.original)}
                                    >
                                        <Icons name={'editIcon'} size={1.7} />
                                    </Flex>
                                    <Flex
                                        style={{
                                            marginLeft: '10px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            handleDelete(row.original)
                                        }
                                    >
                                        <Icons name={'deleteIcon'} size={1.7} />
                                    </Flex>
                                </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
export default TableComponent
