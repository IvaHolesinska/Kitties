import { axiosMainUser } from '../../../constants/urls'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ArticleDetail = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    const fetchArticle = async () => {
      const apiKey = localStorage.getItem('apiKey')
      const token = localStorage.getItem('token')

      try {
        const articleResponse = await axiosMainUser.get(`/articles/${id}`, {
          headers: {
            'X-API-KEY': apiKey,
            Authorization: `Bearer ${token}`,
          },
        })
        const fetchedArticle = articleResponse.data
        setArticle(fetchedArticle)

        if (fetchedArticle.imageId) {
          const imageResponse = await axiosMainUser.get(`/images/${fetchedArticle.imageId}`, {
            headers: {
              'X-API-KEY': apiKey,
              Authorization: `Bearer ${token}`,
            },
            responseType: 'blob', // Important to fetch binary data as blob
          })

          const imageUrl = URL.createObjectURL(imageResponse.data)
          setImageUrl(imageUrl)
        }
      } catch (error) {
        console.error('Error fetching article content:', error)
      }
    }

    fetchArticle()
  }, [id])

  if (!article) {
    return <div>Loading...</div>
  }
  console.log('article  ', article)
  return (
    <div className="article-detail">
      <img className="image" alt="img" src={imageUrl} />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}

export default ArticleDetail
