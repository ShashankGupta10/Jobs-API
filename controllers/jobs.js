const User = require("../models/User");

const getAllJobs = (req, res) =>{
    res.send("all jobs")
}

const getJob = (req, res) => {
  res.send("Single Job");
};

const createJob = async (req, res) => {
  res.send("create job")
};

const updateJob = (req, res) => {
  res.send("update job");
};

const deleteJob = (req, res) => {
  res.send("delete job");
};

module.exports = {
    getAllJobs, 
    getJob,
    createJob,
    updateJob,
    deleteJob
}