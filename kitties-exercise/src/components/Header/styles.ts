import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainContent = styled.div`
  height: 56px;
  background-color: rgb(152 177 201);
  display: flex;
  position: relative;
`

export const Topnav = styled.div`
  overflow: hidden;
  & :last-child {
    position: absolute;
    right: 20px;
    bottom: 0;
  }
`

export const TopnavLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  margin: 2px 20px;
  padding-top: 10px;
  line-height: 55px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    text-shadow: ${({ theme }) => theme.shadow.textShadow};
    cursor: pointer;
  }

  &.active {
    color: #373c41;
  }
`
