const showRules = document.getElementById('rules-modal-btn');
const showRulesModal = document.getElementById('modal-game-rules');
const closeRulesModal = document.getElementById('close-modal');

showRules.addEventListener('click', () => {
    showRulesModal.classList.add('show');
});

closeRulesModal.addEventListener('click', () => {
    showRulesModal.classList.remove('show');
});
