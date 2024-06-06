import { useRegisterTenantMutation, useLoginMutation, useUploadImageMutation, usePostArticleMutation } from '../../api/apiSlice'
import {
  ContentContainer,
  FilePicker,
  FormContainer,
  MainLabel,
  MarginTop,
  SubmitButton,
  Title,
  TitleContainer,
  UploadButton,
} from './styles.tsx'
import React, { useState } from 'react'

const UploadFile = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState(null)
  const [registerTenant] = useRegisterTenantMutation()
  const [login] = useLoginMutation()
  const [uploadImage] = useUploadImageMutation()
  const [postArticle] = usePostArticleMutation()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!file || !title || !content) {
      alert('All fields are required!')
      return
    }

    try {
      let apiKey = localStorage.getItem('apiKey')
      if (!apiKey) {
        const registerResponse = await registerTenant().unwrap()
        apiKey = registerResponse.apiKey
        localStorage.setItem('apiKey', apiKey)
      }

      const loginResponse = await login(apiKey).unwrap()
      const token = loginResponse.access_token
      localStorage.setItem('token', token)
      localStorage.setItem('tokenExpiry', Date.now() + loginResponse.expires_in * 1000)

      const imageId = await uploadImage({ file, apiKey, token }).unwrap()

      if (imageId) {
        const articleData = {
          title,
          content,
          imageId,
        }

        await postArticle({ articleData, apiKey, token }).unwrap()
        alert('Article published successfully!')
        setTitle('')
        setContent('')
        setFile(null)
      } else {
        alert('Failed to upload image or imageId not obtained')
      }
    } catch (error) {
      alert('Failed to publish article')
      console.error('Error:', error)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TitleContainer>
        <Title>Create new article</Title>
        <SubmitButton type="submit">Publish Article</SubmitButton>
      </TitleContainer>
      <MainLabel>
        Article Title
        <MarginTop
          as="input"
          type="text"
          placeholder="My First Article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </MainLabel>
      <FilePicker htmlFor="filePicker">
        Featured image
        <UploadButton>
          <label htmlFor="filePicker">
            Upload an image
            <input
              id="filePicker"
              style={{ visibility: 'hidden' }}
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </label>
        </UploadButton>
        {file && <div style={{ padding: 8, fontWeight: 400 }}>Image: {file.name}</div>}
      </FilePicker>
      <MainLabel>
        Content
        <ContentContainer
          as="textarea"
          className="margin-top"
          placeholder="Supports markdown. Yay!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </MainLabel>
    </FormContainer>
  )
}

export default UploadFile
