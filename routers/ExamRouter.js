const express = require('express');
const router = express.Router();

// import apis
const {
    createExam,
    getAllExams,
    getExamById,
    updateExam,
    deleteExam
} = require('../apis/ExamAPI');
const { route } = require('./ExamRouter');

// view all exams
router.get('/', async (req, res) =>{
    let exams = await getAllExams();
    res.render('exams', { exams });
});

// view a specific exam
router.get('/exam/:id', async (req, res) =>{
    let exam = await getExamById(req.params.id);
    if (exam) {
        res.render('examDetail', { exam });
    } else {
        res.status(404).send('Exam not found');
    }
});

// create a new session
router.post('/exam/create-session', (req, res) => {
    // on this route, create a new exam session
});

// update the answer key for each question in the exam
router.post('/exam/:id/update-answers', (req, res) => {
    // update the answer key for the exam with id req.params.id
});

// view all answers for a specific question in the exam
router.get('/exam/:examId/question/:questionId/answers', (req, res) => {
    // view all answers for question with id req.params.questionId in exam with id req.params.examId
});

module.exports = router;