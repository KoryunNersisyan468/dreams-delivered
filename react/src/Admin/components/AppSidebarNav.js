import React from 'react'
import { NavLink, } from 'react-router-dom'
import { CBadge } from '@coreui/react'

export const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon
          ? icon
          : indent && (
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>
            )}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index, indent = false) => {
      const { component, name, badge, icon, ...rest } = item
      const Component = component
      return (
        <Component
          {...(rest.to &&
            !rest.items && {
              component: NavLink,
            })}
          key={index}
          {...rest}
        >
          {navLink(name, icon, badge, indent)}
        </Component>
      )
  }

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) => ( navItem(item, index)))}
    </React.Fragment>
  )
}


