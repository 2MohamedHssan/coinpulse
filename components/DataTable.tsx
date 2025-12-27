import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

const DataTable=<T,>({
  columns,
  data,
  rowKey,
  tableClassName,
  headerClassName,
  bodyRowClassName,
  headerRowClassName,
}:DataTableProps<T>)=> {
  return (
    <Table className={cn('custom-scrollbar', tableClassName)}>
      <TableHeader className={headerClassName}>
        <TableRow className={cn('hover:bg-transparent!', headerRowClassName)}>
        {columns.map((column,i)=>(
          <TableHead key={i} className={cn('bg-dark-400 text-purple-100 py-4 first:pl-5 last:pr-5')}>
            {column.header}
          </TableHead>
        ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row,i)=>(
        <TableRow key={rowKey(row,i)} className={cn(' overflow-hidden rounded-lg border border-purple-100/5 hover:bg-darck-400/30!',bodyRowClassName)}>
          {columns.map((column,index)=>(
            <TableCell key={index} className={cn('py-4 first:pl-5 last:pr-5')}>
              {column.cell(row,index)}
            </TableCell>
          ))}
        </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default DataTable