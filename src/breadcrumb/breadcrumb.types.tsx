import { JSX } from 'solid-js';

export type CrumbItemProps = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export type BreadcrumbsProps = {
  children: JSX.Element;
  separator?: JSX.Element | Element | string;
};
