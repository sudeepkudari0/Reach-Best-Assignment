const { Router } = require('express');
const bookController = require('../controller/bookController');

const router = Router();

router.get('/', bookController.getBooks);

router.get('/:book_id', bookController.getbookId);

router.post('/', bookController.addbook);

module.exports = router;