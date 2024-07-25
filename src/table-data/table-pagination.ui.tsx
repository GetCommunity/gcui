import { Button } from '@kobalte/core/button';
import { Component, For, Show, createEffect, createSignal } from 'solid-js';
import {
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
  KeyboardDoubleArrowLeftIcon,
  KeyboardDoubleArrowRightIcon
} from '../icon';
import { ITablePaginationProps } from './table.types';
import { getNextHighestPageInterval } from './table-pagination.utils';

/**
 * @summary Filter component for table columns.
 */
export const TablePagination: Component<ITablePaginationProps> = (props) => {
  const displayPageSizeInterval = [10, 20, 30, 40, 50, 100, 1000];
  const [pageInterval, setPageInterval] = createSignal<number>(10);
  const [displayInterval, setPageDisplayInterval] = createSignal<number[]>([10]);
  const handleChangePageSize = (
    e: Event & {
      currentTarget: HTMLSelectElement;
      target: HTMLSelectElement;
    }
  ) => {
    props.table.setPageSize(Number(e.target.value));
  };
  const handleChangePageNumber = (
    e: Event & {
      currentTarget: HTMLInputElement | HTMLTextAreaElement;
      target: HTMLInputElement | HTMLTextAreaElement;
    }
  ) => {
    const page = e.target.value ? Number(e.target.value) - 1 : 0;
    props.table.setPageIndex(page);
  };
  createEffect(() =>
    setPageInterval(
      getNextHighestPageInterval(displayPageSizeInterval, props.maximum())
    )
  );
  createEffect(() =>
    setPageDisplayInterval(displayPageSizeInterval.filter((v) => v <= pageInterval()))
  );
  return (
    <Show when={props.maximum() > displayPageSizeInterval[0]}>
      <div class="justify-content-between align-items-center flex flex-row flex-nowrap">
        <div class="inline-block w-1/5">
          <Button
            class={'outline-light outline-dark'}
            onClick={() => props.table.setPageIndex(0)}
            disabled={!props.table.getCanPreviousPage()}
          >
            <KeyboardDoubleArrowLeftIcon />
          </Button>
          <Button
            class={'outline-light outline-dark'}
            onClick={() => props.table.previousPage()}
            disabled={!props.table.getCanPreviousPage()}
          >
            <KeyboardArrowLeftIcon />
          </Button>
          <Button
            class={'outline-light outline-dark'}
            onClick={() => props.table.nextPage()}
            disabled={!props.table.getCanNextPage()}
          >
            <KeyboardArrowRightIcon />
          </Button>
          <Button
            class={'outline-light outline-dark'}
            onClick={() => props.table.setPageIndex(props.table.getPageCount() - 1)}
            disabled={!props.table.getCanNextPage()}
          >
            <KeyboardDoubleArrowRightIcon />
          </Button>
        </div>
        <div class="inline-block w-2/5 text-center">
          Page {props.table.getState().pagination.pageIndex + 1} of{' '}
          {props.table.getPageCount()} &mdash; {props.table.getRowModel().rows.length}{' '}
          Rows
        </div>
        <div class="justify-content-end align-items-center inline-flex w-2/5">
          <label
            id="users-table-pagination-go-to-page-label"
            for="users-table-pagination-go-to-page-input"
            class="d-flex justify-content-end align-items-center mb-0 px-1"
          >
            Go To
          </label>
          <input
            id="users-table-pagination-go-to-page-input"
            type="number"
            size="sm"
            style={{ 'max-width': '50px' }}
            value={props.table.getState().pagination.pageIndex + 1}
            onChange={handleChangePageNumber}
          />
          <label
            id="users-table-pagination-size-label"
            form="users-table-pagination-size-select"
            class="d-flex justify-content-end align-items-center mb-0 px-1"
          >
            Page Size
          </label>
          <select
            id="users-table-pagination-size-select"
            size="sm"
            style={{ 'max-width': '100px' }}
            value={props.table.getState().pagination.pageSize}
            onChange={handleChangePageSize}
          >
            <For each={displayInterval()}>
              {(pageSize) => <option value={pageSize}>Show {pageSize}</option>}
            </For>
          </select>
        </div>
      </div>
    </Show>
  );
};
