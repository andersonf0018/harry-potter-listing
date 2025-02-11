export const NAVIGATION_LINKS = [
  {
    label: "Characters",
    href: "/",
  },
  {
    label: "Students",
    href: "/students",
  },
  {
    label: "Staff",
    href: "/staff",
  },
  {
    label: "Houses",
    href: "#",
    children: [
      {
        label: "Gryffindor",
        href: "/houses/gryffindor",
      },
      {
        label: "Slytherin",
        href: "/houses/slytherin",
      },
      {
        label: "Ravenclaw",
        href: "/houses/ravenclaw",
      },
      {
        label: "Hufflepuff",
        href: "/houses/hufflepuff",
      },
    ],
  },
  {
    label: "Spells",
    href: "/spells",
  },
  {
    label: "Favorites",
    href: "/favorites",
  },
];
