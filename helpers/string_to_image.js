const fs = require('fs');

module.exports = function imageStringToImage(imageStr, fileName, fileFolder = './client/images') {
    return new Promise((resolve, reject) => {
        const fileType = imageStr.match(/(jpe?g|png)/)[0];
        imageStr = imageStr.replace(/^data:image\/(jpe?g|png)+;base64,/, "").replace(/ /g, '+');

        const filePath = `${fileFolder}/${fileName}.${fileType}`;
        fs.writeFile(filePath, imageStr, 'base64', err => {
            if (err) {
                return reject({ success: true, message: 'There was an ERROR', error: err.message });
            }
            resolve({ success: true, message: `File "${fileName}.${fileType}" created`, fileName: `${fileName}.${fileType}`});
        });
    });
}