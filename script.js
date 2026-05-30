// Exercise Data
const exercises = [
    {
        id: 1,
        name: 'Neck Rolls',
        duration: 120,
        emoji: '🔄',
        instructions: 'Slowly roll your head in a complete circle. Start by dropping your chin to your chest, then roll to the right shoulder, back, left shoulder, and return to chest. Move smoothly and gently.',
        tips: 'Keep shoulders relaxed. Breathe deeply throughout. If you feel dizzy, slow down or move smaller circles.'
    },
    {
        id: 2,
        name: 'Chin Tucks',
        duration: 90,
        emoji: '↙️',
        instructions: 'Pull your chin straight back as if making a double chin. Hold for 2 seconds, then release. Repeat slowly and deliberately.',
        tips: 'This strengthens neck muscles and improves posture. Don\'t strain. Focus on controlled, gentle movements.'
    },
    {
        id: 3,
        name: 'Lateral Neck Stretches',
        duration: 120,
        emoji: '↔️',
        instructions: 'Tilt your head toward your right shoulder until you feel a stretch on the left side. Hold for 30 seconds. Repeat on the left side. Breathe slowly throughout.',
        tips: 'Gently increase the stretch, don\'t force it. Feel the blood flow returning to your head. This relieves tension significantly.'
    },
    {
        id: 4,
        name: 'Shoulder Shrugs',
        duration: 60,
        emoji: '⬆️',
        instructions: 'Raise both shoulders up toward your ears, hold for 2 seconds, then drop them down. Repeat 15 times. Feel the tension release with each shrug.',
        tips: 'Coordinate with deep breathing. Inhale on the shrug, exhale on the release. This improves upper body circulation.'
    },
    {
        id: 5,
        name: 'Neck Rotations',
        duration: 90,
        emoji: '🔁',
        instructions: 'Turn your head to look over your right shoulder, hold for 3 seconds. Return to center, then turn left. Alternate slowly and smoothly.',
        tips: 'Move only as far as feels comfortable. Don\'t force. This improves blood circulation to the brain significantly.'
    },
    {
        id: 6,
        name: 'Forward Neck Stretch',
        duration: 120,
        emoji: '⬇️',
        instructions: 'Drop your chin toward your chest, gently. You can place your hands behind your head for a deeper stretch. Hold and breathe deeply.',
        tips: 'This is the final relaxation stretch. Feel the full release of tension. Breathe deeply to maximize brain fog relief.'
    }
];

// State
let appState = {
    currentExerciseIndex: 0,
    totalTime: 600, // 10 minutes in seconds
    remainingTime: 600,
    isRunning: false,
    isPaused: false,
    timerInterval: null,
    sessionStarted: false
};

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const exerciseScreen = document.getElementById('exercise-screen');
const completionScreen = document.getElementById('completion-screen');
const habitScreen = document.getElementById('habit-screen');

const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const skipBtn = document.getElementById('skip-btn');
const restartBtn = document.getElementById('restart-btn');
const viewHabitsBtn = document.getElementById('view-habits-btn');
const backToExerciseBtn = document.getElementById('back-to-exercise-btn');
const resetDataBtn = document.getElementById('reset-data-btn');

// Tab buttons
const tabExerciseBtn = document.getElementById('tab-exercise');
const tabHabitsBtn = document.getElementById('tab-habits');

// Habit tracker elements
const streakCount = document.getElementById('streak-count');
const percentageCount = document.getElementById('percentage-count');
const totalCount = document.getElementById('total-count');
const calendarGrid = document.getElementById('calendar-grid');

const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
const progressBar = document.getElementById('progress-bar');
const exerciseName = document.getElementById('exercise-name');
const exerciseEmoji = document.getElementById('exercise-emoji');
const exerciseCount = document.getElementById('exercise-count');
const exerciseDuration = document.getElementById('exercise-duration');
const exerciseInstructions = document.getElementById('exercise-instructions');
const exerciseTips = document.getElementById('exercise-tips');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupEventListeners();
    if (appState.sessionStarted) {
        showExerciseScreen();
        updateDisplay();
    }
});

// Event Listeners
function setupEventListeners() {
    startBtn.addEventListener('click', startExercise);
    pauseBtn.addEventListener('click', togglePause);
    skipBtn.addEventListener('click', skipExercise);
    restartBtn.addEventListener('click', restartSession);
    viewHabitsBtn.addEventListener('click', () => showHabitScreen(true));
    backToExerciseBtn.addEventListener('click', () => showWelcomeScreen());
    resetDataBtn.addEventListener('click', resetHabitData);
    tabExerciseBtn.addEventListener('click', () => showWelcomeScreen());
    tabHabitsBtn.addEventListener('click', () => showHabitScreen(false));
}

// Start Exercise
function startExercise() {
    appState.sessionStarted = true;
    appState.isRunning = true;
    appState.isPaused = false;
    saveState();
    showExerciseScreen();
    updateDisplay();
    startTimer();
}

// Show Screens
function showWelcomeScreen() {
    welcomeScreen.classList.add('active');
    exerciseScreen.classList.remove('active');
    completionScreen.classList.remove('active');
    habitScreen.classList.remove('active');
    updateTabButtons('exercise');
}

function showExerciseScreen() {
    welcomeScreen.classList.remove('active');
    exerciseScreen.classList.add('active');
    completionScreen.classList.remove('active');
    habitScreen.classList.remove('active');
    updateTabButtons('exercise');
}

function showCompletionScreen() {
    welcomeScreen.classList.remove('active');
    exerciseScreen.classList.remove('active');
    completionScreen.classList.add('active');
    habitScreen.classList.remove('active');
    clearTimeout(appState.timerInterval);
    updateTabButtons('exercise');
}

function showHabitScreen(fromCompletion = false) {
    welcomeScreen.classList.remove('active');
    exerciseScreen.classList.remove('active');
    completionScreen.classList.remove('active');
    habitScreen.classList.add('active');
    updateTabButtons('habits');
    renderHabitTracker();
}

function updateTabButtons(active) {
    if (active === 'exercise') {
        tabExerciseBtn.classList.add('tab-active');
        tabHabitsBtn.classList.remove('tab-active');
    } else {
        tabExerciseBtn.classList.remove('tab-active');
        tabHabitsBtn.classList.add('tab-active');
    }
}

// Timer Logic
function startTimer() {
    if (appState.timerInterval) clearInterval(appState.timerInterval);

    appState.timerInterval = setInterval(() => {
        if (!appState.isPaused) {
            appState.remainingTime--;
            saveState();

            if (appState.remainingTime <= 0) {
                completeSession();
                return;
            }

            updateDisplay();
            checkExerciseComplete();
        }
    }, 1000);
}

function togglePause() {
    appState.isPaused = !appState.isPaused;
    pauseBtn.textContent = appState.isPaused ? 'Resume' : 'Pause';
    saveState();
}

function skipExercise() {
    const currentExercise = exercises[appState.currentExerciseIndex];
    appState.remainingTime -= currentExercise.duration;

    if (appState.remainingTime <= 0) {
        completeSession();
        return;
    }

    appState.currentExerciseIndex++;
    if (appState.currentExerciseIndex >= exercises.length) {
        completeSession();
        return;
    }

    saveState();
    updateDisplay();
}

// Calculate Current Exercise
function getCurrentExercise() {
    let timeSpent = 0;

    for (let i = 0; i < exercises.length; i++) {
        timeSpent += exercises[i].duration;
        if (appState.totalTime - appState.remainingTime < timeSpent) {
            appState.currentExerciseIndex = i;
            return exercises[i];
        }
    }

    return exercises[exercises.length - 1];
}

// Check if Exercise is Complete
function checkExerciseComplete() {
    const currentExercise = getCurrentExercise();
    if (exercises[appState.currentExerciseIndex].id !== currentExercise.id) {
        appState.currentExerciseIndex++;
    }
}

// Update Display
function updateDisplay() {
    updateTimer();
    updateProgressBar();
    updateExerciseInfo();
}

function updateTimer() {
    const minutes = Math.floor(appState.remainingTime / 60);
    const seconds = appState.remainingTime % 60;
    timerMinutes.textContent = String(minutes).padStart(2, '0');
    timerSeconds.textContent = String(seconds).padStart(2, '0');
}

function updateProgressBar() {
    const progress = ((appState.totalTime - appState.remainingTime) / appState.totalTime) * 100;
    progressBar.style.width = progress + '%';
}

function updateExerciseInfo() {
    const currentExercise = getCurrentExercise();

    exerciseEmoji.textContent = currentExercise.emoji;
    exerciseName.textContent = currentExercise.name;
    exerciseCount.textContent = currentExercise.id;

    const mins = Math.floor(currentExercise.duration / 60);
    const secs = currentExercise.duration % 60;
    exerciseDuration.textContent = `${mins}:${String(secs).padStart(2, '0')}`;

    exerciseInstructions.textContent = currentExercise.instructions;
    exerciseTips.textContent = currentExercise.tips;
}

// Complete Session
function completeSession() {
    appState.isRunning = false;
    appState.sessionStarted = false;
    appState.remainingTime = appState.totalTime;
    clearInterval(appState.timerInterval);
    recordCompletion();
    clearState();
    showCompletionScreen();
}

// Restart Session
function restartSession() {
    appState.currentExerciseIndex = 0;
    appState.remainingTime = appState.totalTime;
    appState.isRunning = true;
    appState.isPaused = false;
    appState.sessionStarted = true;
    saveState();
    showExerciseScreen();
    updateDisplay();
    startTimer();
}

// LocalStorage Management
function saveState() {
    const stateToSave = {
        currentExerciseIndex: appState.currentExerciseIndex,
        remainingTime: appState.remainingTime,
        isRunning: appState.isRunning,
        isPaused: appState.isPaused,
        sessionStarted: appState.sessionStarted,
        timestamp: Date.now()
    };
    localStorage.setItem('neckExerciseState', JSON.stringify(stateToSave));
}

function loadState() {
    const saved = localStorage.getItem('neckExerciseState');
    if (saved) {
        try {
            const state = JSON.parse(saved);
            const timePassed = (Date.now() - state.timestamp) / 1000;

            // If session was running, subtract time that passed
            if (state.isRunning && !state.isPaused) {
                state.remainingTime = Math.max(0, state.remainingTime - timePassed);
            }

            appState = {
                ...appState,
                ...state
            };

            // If time is up, complete the session
            if (appState.remainingTime <= 0) {
                appState.sessionStarted = false;
            }
        } catch (e) {
            console.error('Error loading state:', e);
        }
    }
}

function clearState() {
    localStorage.removeItem('neckExerciseState');
}

// Habit Tracking Functions
function recordCompletion() {
    const today = new Date().toISOString().split('T')[0];
    let history = loadHabitHistory();

    // Check if today is already recorded
    const todayExists = history.completions.some(c => c.date.split('T')[0] === today);

    if (!todayExists) {
        history.completions.push({
            date: new Date().toISOString(),
            completed: true,
            manual: false
        });
        localStorage.setItem('habitHistory', JSON.stringify(history));
    }
}

function loadHabitHistory() {
    const saved = localStorage.getItem('habitHistory');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Error loading habit history:', e);
            return { completions: [] };
        }
    }
    return { completions: [] };
}

function getCompletedDates() {
    const history = loadHabitHistory();
    const completed = new Set();
    history.completions.forEach(c => {
        const date = c.date.split('T')[0];
        completed.add(date);
    });
    return completed;
}

function calculateStreak() {
    const completed = getCompletedDates();
    let streak = 0;
    const today = new Date();

    for (let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        if (completed.has(dateStr)) {
            streak++;
        } else if (i > 0) {
            break;
        }
    }

    return streak;
}

function calculatePercentage() {
    const completed = getCompletedDates();
    return Math.round((completed.size / 365) * 100);
}

function toggleDay(dateStr) {
    let history = loadHabitHistory();
    const index = history.completions.findIndex(c => c.date.split('T')[0] === dateStr);

    if (index !== -1) {
        // Remove if exists
        history.completions.splice(index, 1);
    } else {
        // Add if doesn't exist
        history.completions.push({
            date: dateStr + 'T12:00:00.000Z',
            completed: true,
            manual: true
        });
    }

    localStorage.setItem('habitHistory', JSON.stringify(history));
    renderHabitTracker();
}

function renderHabitTracker() {
    const streak = calculateStreak();
    const percentage = calculatePercentage();
    const completed = getCompletedDates();
    const totalDays = completed.size;

    // Update stats
    streakCount.textContent = streak;
    percentageCount.textContent = percentage + '%';
    totalCount.textContent = totalDays;

    // Render calendar
    renderCalendar(completed);
}

function renderCalendar(completed) {
    calendarGrid.innerHTML = '';
    const today = new Date();

    for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';

        if (completed.has(dateStr)) {
            dayEl.classList.add('completed');
        }

        const todayStr = today.toISOString().split('T')[0];
        if (dateStr === todayStr) {
            dayEl.classList.add('today');
        }

        dayEl.addEventListener('click', () => toggleDay(dateStr));
        dayEl.setAttribute('data-date', dateStr);
        dayEl.setAttribute('title', formatDateForDisplay(dateStr));

        calendarGrid.appendChild(dayEl);
    }
}

function formatDateForDisplay(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function resetHabitData() {
    if (confirm('Are you sure you want to reset all habit tracking data? This cannot be undone.')) {
        localStorage.removeItem('habitHistory');
        renderHabitTracker();
    }
}

// Prevent accidental page exit during exercise
window.addEventListener('beforeunload', (e) => {
    if (appState.isRunning) {
        e.preventDefault();
        e.returnValue = '';
    }
});
