const numDiv = document.getElementById("numdiv");
const entries = document.getElementById("entries");



let count = 0

let savedEntries = [];

// Load saved entries from localStorage if available
const storedEntries = localStorage.getItem("savedEntries");
if (storedEntries) {
  savedEntries = JSON.parse(storedEntries);
  // Optional: display previous entries on load
//   entries.textContent = "Entries: " + savedEntries.join(", ");
}

function save() {
  // Add current count to savedEntries array
  savedEntries.push(count);
  // Save updated array to localStorage
  localStorage.setItem("savedEntries", JSON.stringify(savedEntries));
  // Update display to show all saved entries
  entries.textContent = "Entries: " + savedEntries.join(", ");
  // Reset counter
  numDiv.textContent = 0;
  count = 0; // reset count to 0 if you want to start fresh after saving
}

// function save(){
//    entries.textContent =  "Entries: " +count + ", ";
//    numDiv.textContent = 0
   
   
// };

function increase(){
   count += 1
   numDiv.textContent = count;
  

};


function decrease(){
   count -= 1
   numDiv.textContent = count;
  

};








