import { axiosMainUser } from '../../constants/urls'
import { ArticleContainer, ArticlesContainer, Image, TextContainer } from './styles'
import { DateTime } from 'luxon'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchArticles = async () => {
      const apiKey = localStorage.getItem('apiKey')
      const token = localStorage.getItem('token')
      const url = '/articles'

      try {
        const response = await axiosMainUser.get(url, {
          headers: {
            'X-API-KEY': apiKey,
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.items.length > 0) {
          const articlesWithImages = await Promise.all(
            response.data.items.map(async (article) => {
              if (article.imageId) {
                const imageResponse = await axiosMainUser.get(`/images/${article.imageId}`, {
                  headers: {
                    'X-API-KEY': apiKey,
                    Authorization: `Bearer ${token}`,
                  },
                  responseType: 'blob', // Important to fetch binary data as blob
                })

                const imageUrl = URL.createObjectURL(imageResponse.data)
                return { ...article, imageUrl }
              }
              return article
            }),
          )

          setArticles(articlesWithImages)
        } else {
          setArticles(response.data.items)
        }
      } catch (error) {
        console.error('Error fetching articles:', error)
        setArticles([]) // Set to an empty array in case of error
      }
    }

    fetchArticles()
  }, []) // Empty dependency array to run once on mount

  const handleArticleClick = (articleId) => {
    navigate(`/recent-articles/${articleId}`)
  }

  const getFormattedDate = (date) => {
    return DateTime.fromISO(date, {
      setZone: true,
    }).toFormat('dd. MM. yyyy HH:mm')
  }

  return (
    <ArticlesContainer>
      <h1>Articles</h1>

      {articles.length > 0 ? (
        articles.map((article) => {
          return (
            <ArticleContainer key={article.id} onClick={() => handleArticleClick(article.articleId)}>
              <Image alt="img" src={article.imageUrl} />
              <TextContainer>
                <h4>{article.title}</h4>
                <p>{getFormattedDate(article?.createdAt)}</p>
                <p>{article.perex}</p>
              </TextContainer>
            </ArticleContainer>
          )
        })
      ) : (
        <p>No articles found.</p>
      )}
    </ArticlesContainer>
  )
}

export default Articles
