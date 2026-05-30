// ============================================================
// ROUTINE DEFINITIONS - All 3 wellness routines
// ============================================================

const routines = {
    neck: {
        id: 'neck',
        name: 'Neck Exercise',
        emoji: '🧠',
        subtitle: 'Brain Fog Relief',
        description: 'Relieve tension and improve circulation to reduce brain fog',
        totalTime: 600,
        exercises: [
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
        ]
    },
    backpain: {
        id: 'backpain',
        name: 'Lower Back Pain Relief',
        emoji: '🔙',
        subtitle: 'Back Tension Relief',
        description: 'Strengthen and stretch your lower back to relieve pain and improve mobility',
        totalTime: 600,
        exercises: [
            {
                id: 1,
                name: 'Cat-Cow Stretch',
                duration: 120,
                emoji: '🐱',
                instructions: 'On hands and knees, alternate between arching your back (cow) and rounding it (cat). Move slowly and controlled, syncing with your breath.',
                tips: 'This mobilizes your spine gently. Keep shoulders relaxed. Breathe in on cow, out on cat.'
            },
            {
                id: 2,
                name: 'Knee-to-Chest Stretch',
                duration: 120,
                emoji: '🧘',
                instructions: 'Lying on your back, pull one knee toward your chest. Hold for 30 seconds, then switch legs. Keep your lower back pressed to the floor.',
                tips: 'Great for lower back relief. Don\'t force the stretch. This eases tension in the lower back and glutes.'
            },
            {
                id: 3,
                name: 'Pelvic Tilts',
                duration: 90,
                emoji: '↕️',
                instructions: 'Lying on your back with knees bent, tilt your pelvis to engage your core. Rock gently between anterior and posterior tilts.',
                tips: 'Strengthen your core to support your back. Controlled movement is key. Move only as much as feels natural.'
            },
            {
                id: 4,
                name: 'Lower Back Rotation',
                duration: 90,
                emoji: '🔄',
                instructions: 'Lying on your back with knees bent, gently drop both knees to one side. Hold for 30 seconds, then switch sides.',
                tips: 'Gentle rotation promotes mobility and eases stiffness. Keep your shoulders flat on the ground.'
            },
            {
                id: 5,
                name: 'Glute Bridge',
                duration: 90,
                emoji: '🌉',
                instructions: 'Lying on your back with knees bent, lift your hips to create a straight line from knees to shoulders. Hold and squeeze for 2-3 seconds.',
                tips: 'Strengthens glutes which support the back. Control the movement. Do 15-20 reps.'
            },
            {
                id: 6,
                name: 'Child\'s Pose',
                duration: 90,
                emoji: '🙏',
                instructions: 'Kneel and sink hips back to heels, extending arms forward. Rest your forehead on the mat and breathe deeply.',
                tips: 'Final relaxation stretch. This gently decompresses the lower back. Stay as long as needed.'
            }
        ]
    },
    brushing: {
        id: 'brushing',
        name: 'Night Brushing',
        emoji: '🪥',
        subtitle: 'Evening Oral Health',
        description: 'Complete evening dental routine to maintain healthy teeth and gums',
        totalTime: 300,
        exercises: [
            {
                id: 1,
                name: 'Rinse & Prepare',
                duration: 30,
                emoji: '💧',
                instructions: 'Rinse your mouth with water to loosen any food debris. Get your toothbrush and toothpaste ready.',
                tips: 'Use lukewarm water. Make sure your toothbrush bristles are soft.'
            },
            {
                id: 2,
                name: 'Brush Teeth',
                duration: 120,
                emoji: '🪥',
                instructions: 'Brush all surfaces of your teeth in gentle circular motions. Spend time on the outer surfaces, inner surfaces, and chewing surfaces.',
                tips: 'Brush for full 2 minutes. Don\'t press too hard. Include gum line in your brushing.'
            },
            {
                id: 3,
                name: 'Floss',
                duration: 90,
                emoji: '🧵',
                instructions: 'Use about 18 inches of floss. Gently slide it between each tooth with a sawing motion. Curve around each tooth and go below the gum line.',
                tips: 'Be gentle to avoid injuring gums. Use fresh floss for each tooth. This removes plaque between teeth.'
            },
            {
                id: 4,
                name: 'Final Rinse',
                duration: 30,
                emoji: '✨',
                instructions: 'Rinse your mouth thoroughly with water. You can use mouthwash if desired. Spit out and enjoy fresh breath.',
                tips: 'Final rinse removes any remaining debris. Your teeth should feel clean and smooth.'
            }
        ]
    }
};

// ============================================================
// STATE MANAGEMENT
// ============================================================

let appState = {
    currentRoutineId: 'neck',
    isRunning: false,
    isPaused: false,
    timerInterval: null,
    routines: {
        neck: {
            currentExerciseIndex: 0,
            remainingTime: 600,
            sessionStarted: false
        },
        backpain: {
            currentExerciseIndex: 0,
            remainingTime: 600,
            sessionStarted: false
        },
        brushing: {
            currentExerciseIndex: 0,
            remainingTime: 300,
            sessionStarted: false
        }
    }
};

// ============================================================
// DOM ELEMENTS
// ============================================================

const menuScreen = document.getElementById('menu-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const exerciseScreen = document.getElementById('exercise-screen');
const completionScreen = document.getElementById('completion-screen');
const habitScreen = document.getElementById('habit-screen');

const menuBtns = document.querySelectorAll('.routine-card');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const skipBtn = document.getElementById('skip-btn');
const restartBtn = document.getElementById('restart-btn');
const viewHabitsBtn = document.getElementById('view-habits-btn');
const backToMenuBtns = document.querySelectorAll('.back-to-menu-btn');
const resetDataBtn = document.getElementById('reset-data-btn');

const tabExerciseBtn = document.getElementById('tab-exercise');
const tabHabitsBtn = document.getElementById('tab-habits');

const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
const progressBar = document.getElementById('progress-bar');
const exerciseName = document.getElementById('exercise-name');
const exerciseEmoji = document.getElementById('exercise-emoji');
const exerciseCount = document.getElementById('exercise-count');
const exerciseDuration = document.getElementById('exercise-duration');
const exerciseInstructions = document.getElementById('exercise-instructions');
const exerciseTips = document.getElementById('exercise-tips');
const welcomeTitle = document.getElementById('welcome-title');
const welcomeDescription = document.getElementById('welcome-description');

const streakCount = document.getElementById('streak-count');
const percentageCount = document.getElementById('percentage-count');
const totalCount = document.getElementById('total-count');
const calendarGrid = document.getElementById('calendar-grid');
const habitRoutineTabs = document.querySelectorAll('.habit-routine-tab');

// ============================================================
// ROUTINE HELPER FUNCTIONS
// ============================================================

function getRoutine(routineId) {
    return routines[routineId] || routines.neck;
}

function getRoutineExercises(routineId) {
    return getRoutine(routineId).exercises;
}

function getRoutineTotalTime(routineId) {
    return getRoutine(routineId).totalTime;
}

function getRoutineState(routineId) {
    return appState.routines[routineId];
}

function switchRoutine(routineId) {
    if (routines[routineId]) {
        appState.currentRoutineId = routineId;
        saveState();
    }
}

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    migrateOldData();
    loadState();
    setupEventListeners();
    initializeMenuScreen();
    showMenuScreen();
});

function migrateOldData() {
    const oldState = localStorage.getItem('neckExerciseState');
    const oldHabitHistory = localStorage.getItem('habitHistory');

    if (oldState && !localStorage.getItem('routineState_neck')) {
        localStorage.setItem('routineState_neck', oldState);
        localStorage.removeItem('neckExerciseState');
    }

    if (oldHabitHistory && !localStorage.getItem('habitHistory_neck')) {
        localStorage.setItem('habitHistory_neck', oldHabitHistory);
        localStorage.removeItem('habitHistory');
    }

    localStorage.setItem('routineMetadata', JSON.stringify({
        migrated: true,
        version: '2.0'
    }));
}

// ============================================================
// EVENT LISTENERS
// ============================================================

function setupEventListeners() {
    startBtn.addEventListener('click', startExercise);
    pauseBtn.addEventListener('click', togglePause);
    skipBtn.addEventListener('click', skipExercise);
    restartBtn.addEventListener('click', restartSession);
    viewHabitsBtn.addEventListener('click', () => showHabitScreen());
    resetDataBtn.addEventListener('click', resetHabitData);

    tabExerciseBtn.addEventListener('click', () => showMenuScreen());
    tabHabitsBtn.addEventListener('click', () => showHabitScreen());

    menuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const routineId = btn.getAttribute('data-routine');
            startRoutine(routineId);
        });
    });

    backToMenuBtns.forEach(btn => {
        btn.addEventListener('click', showMenuScreen);
    });

    habitRoutineTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const routineId = tab.getAttribute('data-routine');
            habitRoutineTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderHabitTracker(routineId);
        });
    });
}

// ============================================================
// SCREEN NAVIGATION
// ============================================================

function showMenuScreen() {
    menuScreen.classList.add('active');
    welcomeScreen.classList.remove('active');
    exerciseScreen.classList.remove('active');
    completionScreen.classList.remove('active');
    habitScreen.classList.remove('active');
    updateTabButtons('exercise');
    initializeMenuScreen();
}

function showWelcomeScreen(routineId) {
    menuScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    exerciseScreen.classList.remove('active');
    completionScreen.classList.remove('active');
    habitScreen.classList.remove('active');
    updateTabButtons('exercise');
    updateWelcomeScreen(routineId);
}

function showExerciseScreen() {
    menuScreen.classList.remove('active');
    welcomeScreen.classList.remove('active');
    exerciseScreen.classList.add('active');
    completionScreen.classList.remove('active');
    habitScreen.classList.remove('active');
    updateTabButtons('exercise');
}

function showCompletionScreen() {
    menuScreen.classList.remove('active');
    welcomeScreen.classList.remove('active');
    exerciseScreen.classList.remove('active');
    completionScreen.classList.add('active');
    habitScreen.classList.remove('active');
    clearInterval(appState.timerInterval);
    updateTabButtons('exercise');
}

function showHabitScreen(routineId = 'neck') {
    menuScreen.classList.remove('active');
    welcomeScreen.classList.remove('active');
    exerciseScreen.classList.remove('active');
    completionScreen.classList.remove('active');
    habitScreen.classList.add('active');
    updateTabButtons('habits');
    habitRoutineTabs.forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-routine="${routineId}"]`)?.classList.add('active');
    renderHabitTracker(routineId);
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

// ============================================================
// MENU SCREEN
// ============================================================

function initializeMenuScreen() {
    const menuCards = document.querySelectorAll('.routine-card');
    menuCards.forEach(card => {
        const routineId = card.getAttribute('data-routine');
        const streak = calculateStreak(routineId);
        const percentage = calculatePercentage(routineId);
        const streakEl = card.querySelector('.routine-streak');
        const percentEl = card.querySelector('.routine-percent');

        if (streakEl) streakEl.textContent = `${streak} day streak 🔥`;
        if (percentEl) percentEl.textContent = `${percentage}% complete`;
    });
}

// ============================================================
// WELCOME SCREEN
// ============================================================

function updateWelcomeScreen(routineId) {
    const routine = getRoutine(routineId);
    welcomeTitle.textContent = `${routine.emoji} ${routine.name}`;
    welcomeDescription.textContent = routine.description;
}

// ============================================================
// EXERCISE FLOW
// ============================================================

function startRoutine(routineId) {
    switchRoutine(routineId);
    showWelcomeScreen(routineId);
}

function startExercise() {
    const routineId = appState.currentRoutineId;
    const routineState = getRoutineState(routineId);

    routineState.sessionStarted = true;
    routineState.currentExerciseIndex = 0;
    appState.isRunning = true;
    appState.isPaused = false;

    saveState();
    showExerciseScreen();
    updateDisplay();
    startTimer();
}

function togglePause() {
    appState.isPaused = !appState.isPaused;
    pauseBtn.textContent = appState.isPaused ? 'Resume' : 'Pause';
    saveState();
}

function skipExercise() {
    const routineId = appState.currentRoutineId;
    const routine = getRoutine(routineId);
    const routineState = getRoutineState(routineId);
    const currentExercise = routine.exercises[routineState.currentExerciseIndex];

    routineState.remainingTime -= currentExercise.duration;

    if (routineState.remainingTime <= 0) {
        completeSession();
        return;
    }

    routineState.currentExerciseIndex++;
    if (routineState.currentExerciseIndex >= routine.exercises.length) {
        completeSession();
        return;
    }

    saveState();
    updateDisplay();
}

// ============================================================
// TIMER
// ============================================================

function startTimer() {
    if (appState.timerInterval) clearInterval(appState.timerInterval);

    appState.timerInterval = setInterval(() => {
        if (!appState.isPaused) {
            const routineId = appState.currentRoutineId;
            const routineState = getRoutineState(routineId);

            routineState.remainingTime--;
            saveState();

            if (routineState.remainingTime <= 0) {
                completeSession();
                return;
            }

            updateDisplay();
            checkExerciseComplete();
        }
    }, 1000);
}

function completeSession() {
    const routineId = appState.currentRoutineId;
    const routineState = getRoutineState(routineId);
    const routine = getRoutine(routineId);

    appState.isRunning = false;
    routineState.sessionStarted = false;
    routineState.remainingTime = routine.totalTime;
    clearInterval(appState.timerInterval);

    recordCompletion(routineId);
    clearSessionState(routineId);
    showCompletionScreen();
}

function restartSession() {
    const routineId = appState.currentRoutineId;
    const routineState = getRoutineState(routineId);
    const routine = getRoutine(routineId);

    routineState.currentExerciseIndex = 0;
    routineState.remainingTime = routine.totalTime;
    appState.isRunning = true;
    appState.isPaused = false;

    saveState();
    showExerciseScreen();
    updateDisplay();
    startTimer();
}

// ============================================================
// DISPLAY UPDATE
// ============================================================

function getCurrentExercise() {
    const routineId = appState.currentRoutineId;
    const routine = getRoutine(routineId);
    const routineState = getRoutineState(routineId);
    let timeSpent = 0;

    for (let i = 0; i < routine.exercises.length; i++) {
        timeSpent += routine.exercises[i].duration;
        if (routine.totalTime - routineState.remainingTime < timeSpent) {
            routineState.currentExerciseIndex = i;
            return routine.exercises[i];
        }
    }

    return routine.exercises[routine.exercises.length - 1];
}

function checkExerciseComplete() {
    const routineId = appState.currentRoutineId;
    const routine = getRoutine(routineId);
    const routineState = getRoutineState(routineId);
    const currentExercise = getCurrentExercise();

    if (routine.exercises[routineState.currentExerciseIndex].id !== currentExercise.id) {
        routineState.currentExerciseIndex++;
    }
}

function updateDisplay() {
    updateTimer();
    updateProgressBar();
    updateExerciseInfo();
}

function updateTimer() {
    const routineId = appState.currentRoutineId;
    const routineState = getRoutineState(routineId);
    const minutes = Math.floor(routineState.remainingTime / 60);
    const seconds = routineState.remainingTime % 60;

    timerMinutes.textContent = String(minutes).padStart(2, '0');
    timerSeconds.textContent = String(seconds).padStart(2, '0');
}

function updateProgressBar() {
    const routineId = appState.currentRoutineId;
    const routine = getRoutine(routineId);
    const routineState = getRoutineState(routineId);
    const progress = ((routine.totalTime - routineState.remainingTime) / routine.totalTime) * 100;

    progressBar.style.width = progress + '%';
}

function updateExerciseInfo() {
    const routine = getRoutine(appState.currentRoutineId);
    const routineState = getRoutineState(appState.currentRoutineId);
    const currentExercise = routine.exercises[routineState.currentExerciseIndex];

    exerciseEmoji.textContent = currentExercise.emoji;
    exerciseName.textContent = currentExercise.name;
    exerciseCount.textContent = currentExercise.id;

    const mins = Math.floor(currentExercise.duration / 60);
    const secs = currentExercise.duration % 60;
    exerciseDuration.textContent = `${mins}:${String(secs).padStart(2, '0')}`;

    exerciseInstructions.textContent = currentExercise.instructions;
    exerciseTips.textContent = currentExercise.tips;
}

// ============================================================
// LOCAL STORAGE
// ============================================================

function saveState() {
    const routineId = appState.currentRoutineId;
    const routineState = getRoutineState(routineId);
    const stateToSave = {
        currentExerciseIndex: routineState.currentExerciseIndex,
        remainingTime: routineState.remainingTime,
        isRunning: appState.isRunning,
        isPaused: appState.isPaused,
        sessionStarted: routineState.sessionStarted,
        timestamp: Date.now()
    };
    localStorage.setItem(`routineState_${routineId}`, JSON.stringify(stateToSave));
}

function loadState() {
    const routineId = appState.currentRoutineId;
    const saved = localStorage.getItem(`routineState_${routineId}`);

    if (saved) {
        try {
            const state = JSON.parse(saved);
            const timePassed = (Date.now() - state.timestamp) / 1000;
            const routineState = getRoutineState(routineId);

            if (state.isRunning && !state.isPaused) {
                state.remainingTime = Math.max(0, state.remainingTime - timePassed);
            }

            routineState.currentExerciseIndex = state.currentExerciseIndex;
            routineState.remainingTime = state.remainingTime;
            routineState.sessionStarted = state.sessionStarted;
            appState.isRunning = state.isRunning;
            appState.isPaused = state.isPaused;

            if (routineState.remainingTime <= 0) {
                routineState.sessionStarted = false;
            }
        } catch (e) {
            console.error('Error loading state:', e);
        }
    }
}

function clearSessionState(routineId) {
    localStorage.removeItem(`routineState_${routineId}`);
}

// ============================================================
// HABIT TRACKING
// ============================================================

function recordCompletion(routineId) {
    const today = new Date().toISOString().split('T')[0];
    let history = loadHabitHistory(routineId);

    const todayExists = history.completions.some(c => c.date.split('T')[0] === today);

    if (!todayExists) {
        history.completions.push({
            date: new Date().toISOString(),
            completed: true,
            manual: false
        });
        localStorage.setItem(`habitHistory_${routineId}`, JSON.stringify(history));
    }
}

function loadHabitHistory(routineId) {
    const saved = localStorage.getItem(`habitHistory_${routineId}`);
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

function getCompletedDates(routineId) {
    const history = loadHabitHistory(routineId);
    const completed = new Set();
    history.completions.forEach(c => {
        const date = c.date.split('T')[0];
        completed.add(date);
    });
    return completed;
}

function calculateStreak(routineId) {
    const completed = getCompletedDates(routineId);
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

function calculatePercentage(routineId) {
    const completed = getCompletedDates(routineId);
    return Math.round((completed.size / 365) * 100);
}

function toggleDay(routineId, dateStr) {
    let history = loadHabitHistory(routineId);
    const index = history.completions.findIndex(c => c.date.split('T')[0] === dateStr);

    if (index !== -1) {
        history.completions.splice(index, 1);
    } else {
        history.completions.push({
            date: dateStr + 'T12:00:00.000Z',
            completed: true,
            manual: true
        });
    }

    localStorage.setItem(`habitHistory_${routineId}`, JSON.stringify(history));
    renderHabitTracker(routineId);
}

function renderHabitTracker(routineId) {
    const streak = calculateStreak(routineId);
    const percentage = calculatePercentage(routineId);
    const completed = getCompletedDates(routineId);
    const totalDays = completed.size;

    streakCount.textContent = streak;
    percentageCount.textContent = percentage + '%';
    totalCount.textContent = totalDays;

    renderCalendar(routineId, completed);
}

function renderCalendar(routineId, completed) {
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

        dayEl.addEventListener('click', () => toggleDay(routineId, dateStr));
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
    const routineId = appState.currentRoutineId;
    if (confirm(`Reset all habit tracking data for ${getRoutine(routineId).name}? This cannot be undone.`)) {
        localStorage.removeItem(`habitHistory_${routineId}`);
        renderHabitTracker(routineId);
    }
}

// ============================================================
// SAFETY
// ============================================================

window.addEventListener('beforeunload', (e) => {
    if (appState.isRunning) {
        e.preventDefault();
        e.returnValue = '';
    }
});
