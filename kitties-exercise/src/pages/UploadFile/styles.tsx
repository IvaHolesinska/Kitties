import styled from 'styled-components'

export const FormContainer = styled.form`
  margin: 30px;
  min-width: 320px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
  padding-bottom: 40px;
`

export const Title = styled.h1`
  margin-right: 30px;
`

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  height: 35px;
  font-weight: 600;
  padding: 6px 12px;
  :hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: #0069d9;
  }
`

export const MainLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  font-weight: bold;
  padding-bottom: 8px;
`

export const MarginTop = styled.div`
  margin-top: 8px;
`

export const FilePicker = styled(MainLabel)`
  width: 30%;
  :hover {
    cursor: pointer;
  }
`

export const UploadButton = styled.div`
  background-color: #6c757d;
  height: 25px;
  font-weight: normal;
  text-align: center;
  width: 140px;
  border-radius: 5px;
  padding: 3px;
  color: #ffffff;
`

export const ContentContainer = styled.textarea`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: flex-end;
  text-align: start;
`
