const User = require("../models/User");
const Job = require('../models/Job')

const getAllJobs = async (req, res) =>{
    try {
      const jobs = await Job.find({})
      if(jobs.length === 0){
        res.status(200).json({msg: "You have not applied to any job yet"})
      }
      else{
        res.status(200).json({jobs})
      }
    } catch (error) {
      res.status(500).json({error})
    }
}

const getJob = async (req, res) => {
  try {
    const { id } = req.params;
    const singleJob = await Job.findOne({_id: id})
    if(!singleJob){
      res.status(401).json({msg: "This job does not exist"})
    }

    else{
      res.status(200).json({singleJob})
    }
    
  } catch (error) {
    res.status(500).json({error})
  }
  
};

const createJob = async (req, res) => {
  try {
  const { company, position, status } = req.body;
  const createdBy = req.user.payload.userid
  const newJob = await Job.create({
    company: company,
    position, position,
    status: status, 
    createdBy: createdBy
  })
  res.status(200).json({ newJob });
  } catch (error) {
    res.status(500).json({error})
  }
  
};

const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { company, position, status } = req.body;
    const updateJob = await Job.findOneAndUpdate({_id: id}, {company: company, position: position, status: status})
    res.status(200).json({updateJob})
  } catch (error) {
    res.status(500).json({error})
  }
};

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteJob = await Job.findOneAndDelete({_id: id})
    console.log(deleteJob)
    res.status(200).json({deleteJob})
  }
   catch (error) {
    res.status(500).json({error})
  }
}

module.exports = {
    getAllJobs, 
    getJob,
    createJob,
    updateJob,
    deleteJob
}