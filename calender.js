document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    const calendarTypeSelect = document.getElementById("calendarType");
    const monthSelector = document.getElementById("monthSelector");
    const periodStartDateInput = document.getElementById("periodStartDate");
    const menstruationSpanInput = document.getElementById("menstruationSpan");
    const daysBetweenCyclesInput = document.getElementById("daysBetweenCycles");
    const markButton = document.getElementById("markButton");

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    // Function to create a monthly calendar
    function createMonthlyCalendar(year, month) {
        const date = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Clear previous calendar
        calendar.innerHTML = "";

        // Create day labels
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        days.forEach(day => {
            const div = document.createElement("div");
            div.textContent = day;
            div.classList.add("day");
            calendar.appendChild(div);
        });

        // Fill in the calendar
        for (let i = 0; i < date.getDay(); i++) {
            const emptyDiv = document.createElement("div");
            calendar.appendChild(emptyDiv);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = i;
            dayDiv.classList.add("day");
            calendar.appendChild(dayDiv);
        }
    }

    // Function to create a weekly calendar
    function createWeeklyCalendar(year, month, day) {
        const startDate = new Date(year, month, day);
        const endDate = new Date(year, month, day + 6);
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Clear previous calendar
        calendar.innerHTML = "";

        // Create day labels
        days.forEach(day => {
            const div = document.createElement("div");
            div.textContent = day;
            div.classList.add("day");
            calendar.appendChild(div);
        });

        // Fill in the calendar
        for (let i = 0; i < 7; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = startDate.getDate() + i;
            dayDiv.classList.add("day");
            calendar.appendChild(dayDiv);
        }
    }

    // Handle calendar type change
    calendarTypeSelect.addEventListener("change", function() {
        if (calendarTypeSelect.value === "monthly") {
            createMonthlyCalendar(currentYear, currentMonth);
        } else if (calendarTypeSelect.value === "weekly") {
            createWeeklyCalendar(currentYear, currentMonth, 1);
        }
    });

    // Handle month change
    monthSelector.addEventListener("change", function() {
        const selectedDate = new Date(monthSelector.value);
        currentYear = selectedDate.getFullYear();
        currentMonth = selectedDate.getMonth();
        if (calendarTypeSelect.value === "monthly") {
            createMonthlyCalendar(currentYear, currentMonth);
        } else if (calendarTypeSelect.value === "weekly") {
            createWeeklyCalendar(currentYear, currentMonth, 1);
        }
    });

    // Mark button click event
    // Mark button click event
markButton.addEventListener("click", function() {
    const periodStartDate = new Date(periodStartDateInput.value);
    const menstruationSpan = parseInt(menstruationSpanInput.value);
    const daysBetweenCycles = parseInt(daysBetweenCyclesInput.value);

    if (isNaN(menstruationSpan) || menstruationSpan <= 0 ||
        isNaN(daysBetweenCycles) || daysBetweenCycles <= 0) {
        alert("Please enter valid values for menstruation span and days between cycles.");
        return;
    }

    const currentMonthStartDate = new Date(currentYear, currentMonth, 1);
    let markingDate = new Date(periodStartDate);
    const ovulationDay = new Date(periodStartDate);
    ovulationDay.setDate(ovulationDay.getDate() + Math.floor(daysBetweenCycles / 2)); // Ovulation day is half of the cycle length after the start date

    while (markingDate < currentMonthStartDate) {
        markingDate.setDate(markingDate.getDate() + daysBetweenCycles);
    }

    for (let i = 0; i < menstruationSpan; i++) {
        const day = markingDate.getDate();
        const dayDiv = getDayDivByDate(day);
        if (dayDiv) {
            dayDiv.classList.add("selected");
            dayDiv.setAttribute("data-day", "Day " + (day - periodStartDate.getDate() + 1));
        }
        markingDate.setDate(day + 1);
    }

    const ovulationDayDiv = getDayDivByDate(ovulationDay.getDate());
    if (ovulationDayDiv) {
        ovulationDayDiv.classList.add("ovulation");
        ovulationDayDiv.setAttribute("data-ovulation", "Ovulation Starts");
    }

    function getDayDivByDate(day) {
        const dayDivs = calendar.querySelectorAll(".day");
        for (const dayDiv of dayDivs) {
            if (parseInt(dayDiv.textContent) === day) {
                return dayDiv;
            }
        }
        return null;
    }

    const dayDivs = calendar.querySelectorAll(".day");
    dayDivs.forEach(dayDiv => {
        dayDiv.addEventListener("mouseenter", function() {
            const label = document.createElement("div");
            label.classList.add("label");
            label.textContent = dayDiv.getAttribute("data-day") || dayDiv.getAttribute("data-ovulation");
            dayDiv.appendChild(label);
        });
        dayDiv.addEventListener("mouseleave", function() {
            const label = dayDiv.querySelector(".label");
            if (label) {
                label.remove();
            }
        });
    });
});
// Create calendar for current month and type
createMonthlyCalendar(currentYear, currentMonth);
});
