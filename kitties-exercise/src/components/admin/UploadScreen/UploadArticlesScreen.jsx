import { useState } from 'react';
import { axiosMainUser } from '../../../constants/urls';

export const UploadArticlesScreen = () => {
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
    <form>
      <div style={{ display: 'flex', height: 48, alignItems: 'center' }}>
        <h1 style={{ marginRight: 32 }}>Create new article</h1>
        <button
          type="submit"
          style={{ backgroundColor: '#007BFF' }}
          onClick={() => uploadFile()}
        >
          Publish article
        </button>
      </div>

      <label>
        Article Title
        <input type="text" name="name" placeholder="My First Article" />
      </label>
      <br />

      <label htmlFor="filePicker">
        Featured image
        <div
          style={{
            backgroundColor: '#6C757D',
            width: 147,
            height: 36,
            borderRadius: 3,
          }}
        >
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
        {fileUploaded ? <span>Image: {file.name}</span> : <></>}
      </label>
      <br />

      <label>
        Content
        <input type="text" name="name" placeholder="Supports markdown. Yay!" />
      </label>
    </form>
  );
};
