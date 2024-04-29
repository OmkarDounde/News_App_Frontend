// import { MenuItem } from '../models/menu.model';

// export class Menu {
//   public static pages: MenuItem[] = [
//     {
//       group: 'Base',
//       separator: false,
//       items: [
//         {
//           icon: 'assets/icons/heroicons/outline/chart-pie.svg',
//           label: 'Dashboard',
//           route: '/dashboard',
//           children: [
//             { label: 'Nfts', route: '/dashboard/nfts' },
//             { label: 'Podcast', route: '/dashboard/podcast' },
//           ],
//         },
//         {
//           icon: 'assets/icons/heroicons/outline/lock-closed.svg',
//           label: 'Auth',
//           route: '/auth',
//           children: [
//             { label: 'Sign up', route: '/auth/sign-up' },
//             { label: 'Sign in', route: '/auth/sign-in' },
//             { label: 'Forgot Password', route: '/auth/forgot-password' },
//             { label: 'New Password', route: '/auth/new-password' },
//             { label: 'Two Steps', route: '/auth/two-steps' },
//           ],
//         },
//       ],
//     },
//     {
//       group: 'Collaboration',
//       separator: true,
//       items: [
//         {
//           icon: 'assets/icons/heroicons/outline/download.svg',
//           label: 'Download',
//           route: '/download',
//         },
//         {
//           icon: 'assets/icons/heroicons/outline/gift.svg',
//           label: 'Gift Card',
//           route: '/gift',
//         },
//         {
//           icon: 'assets/icons/heroicons/outline/users.svg',
//           label: 'Users',
//           route: '/users',
//         },
//       ],
//     },
//     {
//       group: 'Config',
//       separator: false,
//       items: [
//         {
//           icon: 'assets/icons/heroicons/outline/cog.svg',
//           label: 'Settings',
//           route: '/settings',
//         },
//         {
//           icon: 'assets/icons/heroicons/outline/bell.svg',
//           label: 'Notifications',
//           route: '/gift',
//         },
//         {
//           icon: 'assets/icons/heroicons/outline/folder.svg',
//           label: 'Folders',
//           route: '/folders',
//           children: [
//             { label: 'Current Files', route: '/folders/current-files' },
//             { label: 'Downloads', route: '/folders/download' },
//             { label: 'Trash', route: '/folders/trash' },
//           ],
//         },
//       ],
//     },
//   ];
// }

import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Menu',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Categories',
          route: '/categories',
          children: [
            { label: 'Bussiness', route: '/categories/bussiness' },
            { label: 'Entertainment', route: '/categories/entertainment' },
            { label: 'General', route: '/categories/general' },
            { label: 'Health', route: '/categories/health' },
            { label: 'Science', route: '/categories/science' },
            { label: 'Sports', route: '/categories/sports' },
            { label: 'Technology', route: '/dashboard/technology' },
          ],
        },
      ],
    },

    {
      group: 'Collaboration',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'About Us',
          route: '/about-us',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Privacy Policy',
          route: '/privacy',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'TermsAndCondition',
          route: '/terms',
        },
      ],
    },
    // {
    //   group: 'Config',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/cog.svg',
    //       label: 'Settings',
    //       route: '/settings',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/bell.svg',
    //       label: 'Notifications',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/folder.svg',
    //       label: 'Folders',
    //       route: '/folders',
    //       children: [
    //         { label: 'Current Files', route: '/folders/current-files' },
    //         { label: 'Downloads', route: '/folders/download' },
    //         { label: 'Trash', route: '/folders/trash' },
    //       ],
    //     },
    //   ],
    // },
  ];
}
