const express = require('express');
const path = require("path");
const app = express();
const upload = require("express-fileupload");
app.use(upload());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log(`Listening on port 3000...`));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post("/upload", (req, res) => {
    if(req.files){
        var file = req.files.filename;
        var filename = file.name;
        file.mv("./upload/"+filename, (err) => {
            if(err){
                res.send('<script>alert("Error Occurred")</script>'); 
            }
            else{
                res.send('<script>alert("Successfully Done!")</script>'); 
            }
        })
    }
})