import styled from "styled-components"
import { useTable } from "react-table"
import { useContext } from "react"
import {COLUMNS} from "./columns.js"
import { useMemo } from "react"
import './table.css'
import { desktop } from "../Responsive"
import {ProvideData} from '../pages/Home.js'


const Container=styled.div`
width: 100%;
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
margin: 1.5rem;

`

const Table=styled.table`
border: solid teal 2px;
width: 100%;
`



// start of the function

const DisplayAll=()=>{
const provided=useContext(ProvideData)
const columns=useMemo(()=>COLUMNS,[])
const data=useMemo(()=>provided.data,[provided.data])
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