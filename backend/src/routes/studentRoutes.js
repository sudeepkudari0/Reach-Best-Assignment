const { Router } = require('express');
const studentController = require('../controller/studentController');

const router = Router();

router.get('/', studentController.getStudents);

router.get('/:student_id', studentController.getstudentId);

router.post('/', studentController.addStudent);

module.exports = router;