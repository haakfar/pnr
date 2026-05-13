document.getElementById("generateBtn").addEventListener("click", function () {
    const bookingRef = document.getElementById("bookingRef").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    // Basic validation
    if (bookingRef.length !== 6) {
        alert("Booking reference must be exactly 6 characters.");
        return;
    }

    if (lastName.length === 0) {
        alert("Please enter a last name.");
        return;
    }

    const refUpper = bookingRef.toUpperCase();
    const nameLower = lastName.toLowerCase();

    const url = `https://www.sas.no/reservation-service/reservation?bookingReference=${refUpper}&names=${nameLower}`;

    document.getElementById("result").innerHTML =
        `<a href="${url}" target="_blank">Click here</a>`;
});
