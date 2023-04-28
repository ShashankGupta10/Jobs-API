const express = require('express');
const router = express.Router();
const { getAllJobs, getJob, createJob, updateJob, deleteJob } = require('../controllers/jobs')
const authenticationMiddleware = require('../middleware/authentication')

router.route("/").post(createJob).get(getAllJobs);
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)


module.exports = router;