const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/services',
    label: 'services',
    dropDownLinks: [
      {
        href: '/services/development',
        label: 'Software Development',
      },
      {
        href: '/services/design',
        label: 'Graphic Design',
      },
      {
        href: '/services/marketing',
        label: 'Digital Marketing',
      },
    ],
  },
  {
    href: '/testimonials',
    label: 'Testimonials',
  },
  {
    href: '/promotions',
    label: 'promotions',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export default links;
