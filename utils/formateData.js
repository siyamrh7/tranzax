// utils/formatDate.js

/**
 * Formats a given ISO 8601 timestamp to "MON DAY{suffix}, YEAR AT HH:MM" format.
 * Example: "2024-10-24T03:50:35.000000Z" => "OCT 24TH, 2024 AT 03:50"
 *
 * @param {string} isoDate - ISO 8601 formatted date string.
 * @returns {string} - Formatted date string.
 */
function formatDate(isoDate) {
    const date = new Date(isoDate)

    // Array of month abbreviations
    const monthNames = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ]

    const day = date.getUTCDate()
    const month = monthNames[date.getUTCMonth()]
    const year = date.getUTCFullYear()

    // Determine the day suffix (st, nd, rd, th)
    const suffix =
        day % 10 === 1 && day !== 11
            ? "ST"
            : day % 10 === 2 && day !== 12
            ? "ND"
            : day % 10 === 3 && day !== 13
            ? "RD"
            : "TH"

    // Format the time
    const hours = String(date.getUTCHours()).padStart(2, "0")
    const minutes = String(date.getUTCMinutes()).padStart(2, "0")

    // Construct the final formatted date string
    return `${month} ${day}${suffix}, ${year} AT ${hours}:${minutes}`
}

export default formatDate
