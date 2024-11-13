// App.js (React)
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState('');

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setDownloadLink('');

    try {
      // Chamada para a API que fará o download do vídeo
      const response = await axios.post('http://localhost:5000/download', { url: videoUrl }, { responseType: 'blob' });
      
      // Criando um link para download do vídeo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadLink(url);
    } catch (error) {
      console.error('Erro durante o download:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Download de Vídeo do YouTube</h1>
      <form onSubmit={handleDownload}>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Digite a URL do vídeo do YouTube"
          required
          style={{ padding: '10px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Download</button>
      </form>

      {loading && (
        <div style={{ marginTop: '20px' }}>
          <p>Fazendo o download...</p>
          <img src="https://i.imgur.com/llF5iyg.gif" alt="Loading..." />
        </div>
      )}

      {downloadLink && (
        <div style={{ marginTop: '20px' }}>
          <a href={downloadLink} download="video.mp4">
            Clique aqui para baixar o vídeo
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
