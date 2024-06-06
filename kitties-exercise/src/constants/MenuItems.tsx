import { routes } from '../app/AppRoutes/constants'

export const menuItems = [
  {
    name: 'About',
    path: routes.about.index,
  },
  {
    name: 'Recent Articles',
    path: routes.articles.index,
  },
  {
    name: 'Create Article',
    path: routes.uploadFile.index,
  },
  {
    name: 'Log In',
    path: routes.login.index,
  },
]
