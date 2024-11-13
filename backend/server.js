import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { error } from 'console';

const app = express();
app.use(cors());
app.use(express.json());

app.get('./', (req,res) =>{
    return res.status(400).json({error: 'URL do vídeo é necessária'})
})

app.post('/download', (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL do vídeo é necessária' });
  }

  const outputPath = path.resolve('./', 'video.mp4');
  const command = `yt-dlp -f "bestvideo[height>=1080]+bestaudio[ext!=opus]/best[height>=1080]" -o "${outputPath}" --merge-output-format mp4 ${url}`;

  exec(command, (error) => {
    if (error) {
      console.error('Erro durante o download:', error);
      return res.status(500).json({ error: 'Erro durante o download do vídeo' });
    }
    res.download(outputPath, 'video.mp4', (err) => {
      if (err) {
        console.error('Erro ao enviar o arquivo:', err);
      }
      fs.unlink(outputPath, (unlinkErr) => {
        if (unlinkErr) {
          console.error('Erro ao remover o arquivo:', unlinkErr);
        }
      });
    });
  });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
