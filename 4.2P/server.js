const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect('mongodb://localhost:27017/myprojectDB');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});


const ProjectSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    color: String,
    image: String,
    desc: String
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleProject1 = new Project({
    brand: "Ferrari",
    model: "812 Superfast",
    year: 2023,
    color: "Dark Red",
    image: "images/car1.jpg",
    desc: "A super fast Ferrari that is built for speed"
});
sampleProject1.save().then(() => console.log("Sample car 1 saved!"));

const sampleProject2 = new Project({
    brand: "Chevrolet",
    model: "Chevelle SS",
    year: 1970,
    color: "Light Red",
    image: "images/car2.jpg",
    desc: "Drive old school with this Classy Chevrolet"
});
sampleProject2.save().then(() => console.log("Sample car 2 saved!"));
    

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json({ statusCode: 200, data: projects, message: "Success" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ statusCode: 500, message: "Server Error" });
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App listening on port " + port);
});
