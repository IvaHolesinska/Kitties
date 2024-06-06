import styled from 'styled-components'

export const ArticlesContainer = styled.div`
  margin: 24px;
`

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  cursor: pointer;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 20px;
  padding-right: 10px;

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }
`

export const Image = styled.img`
  width: 200px;
`
