function toggleCalendar() {
    const modal = document.getElementById("calendarModal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

function updateDateRange() {
    const checkInDate = document.getElementById("checkInDate").value;
    const checkOutDate = document.getElementById("checkOutDate").value;
    const dateRangeInput = document.getElementById("dateRange");

    // Format the date range
    if (checkInDate && checkOutDate) {
        dateRangeInput.value = `${formatDate(checkInDate)} - ${formatDate(checkOutDate)}`;
    } else if (checkInDate) {
        dateRangeInput.value = `${formatDate(checkInDate)} - `;
    } else if (checkOutDate) {
        dateRangeInput.value = ` - ${formatDate(checkOutDate)}`;
    } else {
        dateRangeInput.value = '';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('en-US', options).replace(/\//g, '/');
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("calendarModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}