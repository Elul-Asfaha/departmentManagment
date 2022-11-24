import styled from "styled-components"
import { useTable } from "react-table"
import MOCK_DATA from "../data/MOCK_DATA.json"
import {COLUMNS} from "./columns.js"
import { useMemo } from "react"
import './table.css'
import { desktop } from "../Responsive"


const Container=styled.div`
width: 100vw;
display: flex;
align-items: center;
flex-direction: column;
${desktop({
    width: '100%'
})}
`

const Title=styled.h1`
font-size: 20px;
text-align: center;
margin: 2rem;

`

const Table=styled.table`
border: solid teal 2px;
`



// start of the function

const DisplayAll=()=>{
const columns=useMemo(()=>COLUMNS,[])
const data=useMemo(()=>MOCK_DATA,[])
const tableInstance=useTable({
        columns,
        data
    })

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
}=tableInstance
    return(
        <Container>
                <Title>
                    Hierarchy of the Departments
                </Title>
                
            <Table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup)=>(
                            
                    <tr {...headerGroup.getHeaderGroupProps()}>{
                        headerGroup.headers.map(column=>(
                            <th {...column.getHeaderProps()}> {column.render('Header')} </th>
                        ))
                    }
                    </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row=>{
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell)=>{
                                            return <td {...cell.getCellProps()}> {cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>


        </Container>
    )
}
export default DisplayAll