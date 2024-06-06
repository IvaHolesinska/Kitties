import './styles.ts'
import { MainContent, Topnav, TopnavLink } from './styles.ts'
import React from 'react'

type Props = {
  name: string
  path: string
}

const Header = ({ menuItems }: { menuItems: Props[] }) => {
  return (
    <MainContent>
      <Topnav>
        {menuItems.map((item) => (
          <TopnavLink to={item.path} key={item.path}>
            {item.name}
          </TopnavLink>
        ))}
      </Topnav>
    </MainContent>
  )
}

export default Header
