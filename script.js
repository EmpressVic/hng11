function updateTimeAndDay() {
    const currentTimeUTC = new Date().toISOString().slice(11, 19);
    const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

document.addEventListener('DOMContentLoaded', updateTimeAndDay);
