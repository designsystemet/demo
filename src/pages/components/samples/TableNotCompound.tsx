import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@digdir/designsystemet-react';

function TableNotCompoundSample() {
  return (
    <Table>
      <caption>Table caption</caption>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Header 1</TableHeaderCell>
          <TableHeaderCell>Header 2</TableHeaderCell>
          <TableHeaderCell>Header 3</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 4</TableCell>
          <TableCell>Cell 5</TableCell>
          <TableCell>Cell 6</TableCell>
        </TableRow>
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableHeaderCell>Footer 1</TableHeaderCell>
          <TableHeaderCell>Footer 2</TableHeaderCell>
          <TableHeaderCell>Footer 3</TableHeaderCell>
        </TableRow>
      </TableFoot>
    </Table>
  );
}
export { TableNotCompoundSample };
