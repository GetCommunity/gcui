import { JSX, children, createComputed, on } from 'solid-js';
import { createStore } from 'solid-js/store';
import { CrumbItemProps } from './breadcrumb.types';

export const getCrumbs = (_children: JSX.Element) => {
  const parts = children(() => _children);
  const [crumbs, setCrumbs] = createStore<CrumbItemProps[]>([]);
  createComputed(
    on(parts, () => {
      for (const part of parts.toArray() as unknown as CrumbItemProps[]) {
        if (!part.label) {
          continue;
        }
        setCrumbs((prev) => [...prev, part]);
      }
    })
  );
  return crumbs;
};
