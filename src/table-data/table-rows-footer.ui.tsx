import { Component } from 'solid-js';
import { ITableFooterProps } from './table.types';
import { TableFooterActions } from './table-actions.ui';
import { TablePagination } from './table-pagination.ui';

export const TableFooter: Component<ITableFooterProps> = (props) => {
  return (
    <tfoot class="border-0 border-solid border-inherit">
      <tr class="border-0 border-solid border-inherit">
        <td colSpan={'100%'} class={`border-b-1 bg-white p-2 dark:bg-gray-900`}>
          <TablePagination table={props.table} maximum={props.fetchTotal} />
          <TableFooterActions
            table={props.table}
            isFiltering={props.isFiltering}
            resetFilter={props.resetFilter}
          />
        </td>
      </tr>
    </tfoot>
  );
};
