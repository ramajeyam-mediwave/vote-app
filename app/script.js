const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");
const result = document.getElementById("check");
checkBtn.addEventListener("click", checkEligibility);
clearBtn.addEventListener("click", clearResults);
function checkEligibility() {
  let age = (document.getElementById("age").value);
  if (!isNaN(age)) {
    if (age >= 18) {
      result.textContent = "eligible";
      result.style.color = "green";
    } else {
      result.textContent = "Not eligible";
      result.style.color = "red";
    }
  } else {
    result.textContent = "Please enter a valid age";
    
  }
}
function clearResults() {
  document.getElementById("age").value = "";
  result.textContent = "";
}
