import { axiosMainUser } from '../../../src/constants/urls'
import Spinner from '../../components/Spinner'
import { Article } from '../../types'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ArticleDetail = () => {
  const { id } = useParams()
  const [article, setArticle] = useState<Article>({} as Article)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

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
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  if (!article || loading) {
    return <Spinner />
  }
  return (
    <div className="article-detail">
      {imageUrl && <img className="image" alt="img" src={imageUrl} />}
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}

export default ArticleDetail
