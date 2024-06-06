import { createApi } from '@reduxjs/toolkit/query/react'
import axios, { AxiosRequestConfig } from 'axios'

interface RegisterResponse {
  apiKey: string
}

interface LoginResponse {
  access_token: string
  expires_in: number
}

interface UploadImageResponse {
  imageId: string
}

interface PostArticleResponse {
  id: string
  title: string
  content: string
  imageId: string
  perex: string
}

interface ArticleData {
  title: string
  content: string
  imageId: string
}

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ url, method, data, params, headers }: AxiosRequestConfig) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as any
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://fullstack.exercise.applifting.cz',
  }),
  endpoints: (builder) => ({
    registerTenant: builder.mutation<RegisterResponse, void>({
      query: () => ({
        url: '/tenants',
        method: 'POST',
        data: {
          name: 'ivca',
          password: 'holes',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    login: builder.mutation<LoginResponse, string>({
      query: (apiKey) => ({
        url: '/login',
        method: 'POST',
        data: {
          Username: 'ivca',
          password: 'holes',
        },
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey,
        },
      }),
    }),
    uploadImage: builder.mutation<UploadImageResponse[], { file: File; apiKey: string; token: string }>({
      query: ({ file, apiKey, token }) => {
        const formData = new FormData()
        formData.append('image', file)
        return {
          url: '/images',
          method: 'POST',
          data: formData,
          headers: {
            'X-API-KEY': apiKey,
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      },
      transformResponse: (response: UploadImageResponse[]) => response[0].imageId,
    }),
    postArticle: builder.mutation<PostArticleResponse, { articleData: ArticleData; apiKey: string; token: string }>({
      query: ({ articleData, apiKey, token }) => ({
        url: '/articles',
        method: 'POST',
        data: {
          ...articleData,
          perex: articleData.content.substring(0, 100),
        },
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey,
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
})

export const { useRegisterTenantMutation, useLoginMutation, useUploadImageMutation, usePostArticleMutation } = apiSlice
