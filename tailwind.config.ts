import type { Config } from 'tailwindcss';
const {
  GcuiTwAccordion,
  GcuiTwAlert,
  GcuiTwAvatar,
  GcuiTwBreadcrumb,
  GcuiTwButton,
  GcuiTwCollapsable,
  GcuiTwCore,
  GcuiTwDialog,
  GcuiTwFormInput,
  GcuiTwLink,
  GcuiTwMenuDropdown,
  GcuiTwPagination,
  GcuiTwPopover,
  GcuiTwProgress,
  GcuiTwSeparator,
  GcuiTwTabs,
  GcuiTwToast,
} = require('@getcommunity/gcui-tailwind');

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './dev/**/*.{js,ts,jsx,tsx}',
    './node_modules/@getcommunity/gcui/dist/**/*.{html,js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Base TW Addons
    require('@tailwindcss/typography'),
    // GC Client Styles
    require('@getcommunity/client-styleguides'),
    // GCUI Kobalte
    require('@kobalte/tailwindcss'),
    // GCUI Core
    GcuiTwCore,
    // Components
    GcuiTwAccordion,
    GcuiTwAlert,
    GcuiTwAvatar,
    GcuiTwBreadcrumb,
    GcuiTwButton,
    GcuiTwCollapsable,
    GcuiTwDialog,
    GcuiTwFormInput,
    GcuiTwLink,
    GcuiTwMenuDropdown,
    GcuiTwPagination,
    GcuiTwPopover,
    GcuiTwProgress,
    GcuiTwSeparator,
    GcuiTwTabs,
    GcuiTwToast,
  ],
} satisfies Config;
