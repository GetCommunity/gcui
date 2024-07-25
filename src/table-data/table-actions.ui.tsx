import { Button } from '@kobalte/core/button';
import { Component, Show } from 'solid-js';
import { ITableFooterActionsProps } from './table.types';

/**
 * @summary Filter component for table columns.
 */
export const TableFooterActions: Component<ITableFooterActionsProps> = (props) => {
  return (
    <div class="d-flex justify-content-start align-items-center my-2 flex-row flex-nowrap">
      <Show when={props.isFiltering()}>
        <Button
          class={'outline-light, outline-dark'}
          onClick={() => props.resetFilter()}
        >
          Reset Filters
        </Button>
      </Show>
    </div>
  );
};
