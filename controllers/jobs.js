const User = require("../models/User");

const getAllJobs = async (req, res) =>{
    try {
      const jobs = await User.find({})
      res.send(jobs)
    } catch (error) {
      console.log(error)
    }
}

const getJob = (req, res) => {
  res.send("Single Job");
};

const createJob = async (req, res) => {
  try {

  } catch (error) {
    console.log(error)
  }
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