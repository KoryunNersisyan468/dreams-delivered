import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Մասնակիցներ',
  },
  {
    component: CNavItem,
    name: 'Ամբողջը',
    to: '/admin/dashboard',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  
  {
    component: CNavItem,
    name: 'Դեռ չունի Հրեշտակ',
    to: '/admin/passiveWish',
  },
  {
    component: CNavItem,
    name: 'Ունի հրեշտակ',
    to: '/admin/activeWish',
  },
  {
    component: CNavItem,
    name: 'Ավելացնել Մասնակից',
    to: '/admin/addWish',
  },
  {
    component: CNavItem,
    name: 'Գործունեության տվյալներ',
    to: '/admin/addactivity',
  },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/admin/login',
      },
   
    ],
  },
 
]

export default _nav
