import { JSX, children, createComputed, on } from 'solid-js';
import { createStore } from 'solid-js/store';
import {
  MenuCheckboxItemProps,
  MenuItemProps,
  MenuRadioItemProps,
  MenuSeparatorProps,
} from './menu.types';

export const getMenuItems = (_children: JSX.Element) => {
  const parts = children(() => _children);
  const [items, setItems] = createStore<any>([]);
  createComputed(
    on(parts, () => {
      let elements = parts.toArray() as unknown as any;
      for (const elm of elements) {
        if (Object.keys(elm).includes('children')) {
          const subItems = getMenuItems(elm.children as JSX.Element);
          // @ts-ignore
          setItems((prev) => [
            ...prev,
            {
              ...elm,
              children: [...subItems],
            },
          ]);
        } else {
          if (elm.type === 'item') {
            // @ts-ignore
            setItems((prev) => [...prev, elm as MenuItemProps]);
          } else if (elm.type === 'item-radio') {
            // @ts-ignore
            setItems((prev) => [...prev, elm as MenuRadioItemProps]);
          } else if (elm.type === 'item-checkbox') {
            // @ts-ignore
            setItems((prev) => [...prev, elm as MenuCheckboxItemProps]);
          } else if (elm.type === 'separator') {
            // @ts-ignore
            setItems((prev) => [...prev, elm as MenuSeparatorProps]);
          }
        }
      }
    })
  );
  return items;
};
