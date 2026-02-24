import React from 'react'

const Dashboard = React.lazy(()=>import('./Admin/views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./Admin/views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./Admin/views/theme/typography/Typography'))
const AddWish = React.lazy(()=> import('./Admin/views/theme/AddAdmin/AddData'))
const AddActivity = React.lazy(()=> import('./Admin/views/AddActivity/AddActivity'))

const routes = [
  
  { path: '/', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/admin/passiveWish', name: 'Colors', element: Colors },
  { path: '/admin/activeWish', name: 'Typography', element: Typography },
  { path: '/admin/addWish', name: 'addWish', element: AddWish },
  { path: '/admin/addactivity', name: 'addactivity', element: AddActivity },
]

export default routes
