import Layout from '../../layouts/Layout'
import { About, ArticleDetail, Articles, Login, UploadFile } from './LazyComponents'
import React, { type FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const AppRoutes: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: '/login',
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: '/articles',
      element: (
        <Layout>
          <Articles />
        </Layout>
      ),
    },
    {
      path: '/articles/:id',
      element: (
        <Layout>
          <ArticleDetail />
        </Layout>
      ),
    },
    {
      path: '/upload-file',
      element: (
        <Layout>
          <UploadFile />
        </Layout>
      ),
    },
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes
