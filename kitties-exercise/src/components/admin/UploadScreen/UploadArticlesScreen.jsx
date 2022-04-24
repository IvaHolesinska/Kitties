import { useState } from 'react';
import { axiosMainUser } from '../../../constants/urls';
import './style.css';

export const UploadArticleScreen = () => {
  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  // upload file/image
  const uploadFile = async () => {
    const url = '/images';
    const { data } = await axiosMainUser.post(url);
  };

  //  upload title + content
  const uploadArticle = async () => {
    const url = '/articles';
    const { data } = await axiosMainUser.post(url);
  };

  //  choose the file/image
  const changeFile = async (event) => {
    const file = event.target.files[0];
    if (file === undefined) return;
    setFile(file);
    setFileUploaded(true);
    console.log(file.name);
  };
  return (
    <form className="form-container">
      <div className="title-container">
        <h1>Create new article</h1>
        <button type="submit" onClick={() => uploadFile()}>
          Publish article
        </button>
      </div>

      {/* first input - Article title */}
      <label className="main-label">
        Article Title
        <input
          className="margin-top"
          type="text"
          name="name"
          placeholder="My First Article"
        />
      </label>
      <br />

      {/* second input - Upload file/image */}
      <label htmlFor="filePicker" className="main-label file-picker">
        Featured image
        <div className="upload-btn margin-top">
          <label htmlFor="filePicker">
            Upload an image
            <input
              id="filePicker"
              style={{ visibility: 'hidden' }}
              type="file"
              onChange={changeFile}
            />{' '}
          </label>
        </div>
        {/* display name of choosen file */}
        {fileUploaded ? (
          <div style={{ padding: 8 }}>Image: {file.name}</div>
        ) : (
          <></>
        )}
      </label>
      <br />

      {/* third input - Article content */}
      <label className="main-label">
        Content
        <textarea
          className="content-container margin-top"
          type="text"
          name="name"
          placeholder="Supports markdown. Yay!"
        />
      </label>
    </form>
  );
};
