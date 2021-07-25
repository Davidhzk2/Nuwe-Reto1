const mongoose = require('mongoose');
const moment = require('moment');

const projectSchema= new mongoose.Schema({
    userId: String,
    name: String,
    stack: String, 
    github_url: String,
    url: String 
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;