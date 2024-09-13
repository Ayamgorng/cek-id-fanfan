const axios = require('axios');
const express = require('express');
const cors = require('cors');
const { cekIdGameController } = require('./controllers/cekIdGameController');
const _ = require('lodash');
const path = require('path');
const { dataGame } = require('./lib/dataGame');
const getZoneController = require('./controllers/getZoneController');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));
//app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Route untuk mendapatkan status monitor dari UptimeRobot
app.get('/api/status', async (req, res) => {
   const apiKey = 'u2676864-dd8bebdddcf0bf35aaa98839';  // Ganti dengan API Key UptimeRobot

   try {
      const response = await axios.post('https://api.uptimerobot.com/v2/getMonitors', {
         api_key: apiKey,
         format: 'json',
      });

      // Mengirim data monitor ke frontend
      return res.json(response.data);
   } catch (error) {
      return res.status(500).json({ error: 'Gagal mendapatkan status monitor' });
   }
});

app.get('/api', (req, res) => {
   const newDataGame = dataGame.map((item) => {
      return {
         name: item.name,
         slug: item.slug,
         endpoint: `/api/game/${item.slug}`,
         query: `?id=xxxx${item.isZone ? '&zone=xxx' : ''}`,
         hasZoneId: item.isZone ? true : false,
         listZoneId: item.dropdown ? `/api/game/get-zone/${item.slug}` : null,
      };
   });

   return res.json({
      name: 'Cek Data Game',
      author: 'FANFANSTORE',
      data: _.orderBy(newDataGame, ['name'], ['asc']),
   });
});

app.get('/api/game/:game', cekIdGameController);
app.get('/api/game/get-zone/:game', getZoneController);

app.use(express.static(path.join(__dirname, 'public'))); // untuk melayani file statis dari folder 'public'

app.get('/*', (req, res) => {
   ;res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
