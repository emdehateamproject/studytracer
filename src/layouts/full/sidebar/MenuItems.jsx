import {
  IconLayoutDashboard,
  IconUser,
  IconSchool,
  IconBriefcase,
  IconAward,
  IconBinaryTree,
  IconLayoutKanban,
  IconRoute,
  IconFile,
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'Biodata',
  },
  {
    id: uniqueId(),
    title: 'Data Diri',
    icon: IconUser,
    href: '/dashboard/biodata/data-diri',
  },
  {
    id: uniqueId(),
    title: 'Akademik',
    icon: IconSchool,
    href: '/dashboard/biodata/akademik',
  },
  {
    id: uniqueId(),
    title: 'Pekerjaan',
    icon: IconBriefcase,
    href: '/dashboard/biodata/pekerjaan',
  },
  {
    navlabel: true,
    subheader: 'Rekam Jejak',
  },
  {
    id: uniqueId(),
    title: 'Prestasi',
    icon: IconAward,
    href: '/dashboard/rekam-jejak/prestasi',
  },
  {
    id: uniqueId(),
    title: 'Organisasi',
    icon: IconBinaryTree,
    href: '/dashboard/rekam-jejak/organisasi',
  },
  {
    id: uniqueId(),
    title: 'Pelatihan',
    icon: IconLayoutKanban,
    href: '/dashboard/rekam-jejak/pelatihan',
  },
  {
    navlabel: true,
    subheader: 'Lain-lain',
  },
  {
    id: uniqueId(),
    title: 'Tracer Instansi',
    icon: IconRoute,
    href: '/dashboard/tracer-instansi',
  },
  {
    id: uniqueId(),
    title: 'Kuisioner Alumni',
    icon: IconFile,
    href: '/dashboard',
  },
];

export default Menuitems;
