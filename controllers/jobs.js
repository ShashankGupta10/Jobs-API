const getAllJobs = (req, res) =>{
    res.send("All Jobs")
}

const getJob = (req, res) => {
  res.send("Single Job");
};

const createJob = (req, res) => {
  res.send("create Job");
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