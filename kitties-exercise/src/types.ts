export type RegisterResponse = {
  apiKey: string
}

export type LoginResponse = {
  access_token: string
  expires_in: number
}

export type UploadImageResponse = {
  imageId: string
}

export type Article = {
  id?: string
  articleId?: string
  title?: string
  content?: string
  imageUrl?: string
  createdAt?: string
  perex?: string
}
