document.addEventListener('DOMContentLoaded', () => {

    const questions = document.querySelectorAll('.question-top');

    questions.forEach(question => {

        question.addEventListener('click', () => {

            const currentItem = question.parentElement;

            document.querySelectorAll('.question-item').forEach(item => {

                if (item !== currentItem) {
                    item.classList.remove('active');
                }

            });

            currentItem.classList.toggle('active');

        });

    });

});