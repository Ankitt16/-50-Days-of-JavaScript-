const colorPicker = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");
const copyBtn = document.getElementById("copyBtn");

// Update color code display when color changes
colorPicker.addEventListener("input", () => {
    colorCode.textContent = colorPicker.value;
});

// Copy color code to clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode.textContent)
        .then(() => alert("Color code copied!"))
        .catch(() => alert("Failed to copy color code."));
});
