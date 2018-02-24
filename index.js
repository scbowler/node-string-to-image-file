const express = require('express');
const { resolve } = require('path');
const app = express();
const PORT = process.env.PORT || 9000;
const logoStrings = require('./data/logos');
const stringToImage = require('./helpers/string_to_image');

app.use(express.static(resolve(__dirname, 'client')));

app.get('/test', async (req, res) => {
    
    const responses = logoStrings.map((string, index) => {
        return stringToImage(string, `logo${index + 1}`);
    });

    try{
        const resolved = await Promise.all(responses);
        res.send(resolved);
    } catch(error) {
        res.send({message: 'Error creating files', error});
    }
});

app.listen(PORT, (error) => {
    if(error) return console.log('Server Error:', error.message);

    console.log('Server running on PORT:%s', PORT);
});
