import loadable from '@loadable/component'

export const About = loadable(async () => await import('../../pages/About'))
export const Login = loadable(async () => await import('../../pages/Login'))
export const Articles = loadable(async () => await import('../../pages/Articles'))
export const ArticleDetail = loadable(async () => await import('../../pages/ArticleDetail'))
export const UploadFile = loadable(async () => await import('../../pages/UploadFile'))
