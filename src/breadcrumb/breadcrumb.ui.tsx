import { Breadcrumbs as KBBreadcrumbs } from '@kobalte/core/breadcrumbs';
import { Component, For, JSX, Show } from 'solid-js';
import { BreadcrumbsProps, CrumbItemProps } from './breadcrumb.types';
import { getCrumbs } from './breadcrumb.utils';

export const CrumbItem: Component<CrumbItemProps> = (props) => {
  return props as unknown as JSX.Element;
};

export default function Breadcrumbs(props: BreadcrumbsProps) {
  const crumbs = getCrumbs(props.children);
  const totalItems = () => crumbs.length;
  return (
    <KBBreadcrumbs class='breadcrumbs' separator={props.separator ?? '/'}>
      <ol class='breadcrumbs__list'>
        <For each={crumbs}>
          {(crumb, index) => (
            <li class='breadcrumbs__item'>
              <KBBreadcrumbs.Link
                class='breadcrumbs__link ui-disabled:text-gray-600 ui-current:font-medium text-gray-800 hover:text-blue-600'
                href={crumb.href}
                onClick={crumb.onClick}
                current={index() === totalItems() - 1}
              >
                {crumb.label}
              </KBBreadcrumbs.Link>
              <Show when={index() < totalItems() - 1}>
                <KBBreadcrumbs.Separator class='breadcrumbs__separator' />
              </Show>
            </li>
          )}
        </For>
      </ol>
    </KBBreadcrumbs>
  );
}
