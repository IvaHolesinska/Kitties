import styled from 'styled-components'

export const AboutContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.boxShadow};
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;
  text-align: center;
`

export const Section = styled.div`
  margin-bottom: 20px;
`

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 10px;
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 5px;
`

export const Contact = styled.div`
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
`
