// Getting variables for each input field
let inpBase = document.getElementById("inp-base-px");
let inpPX = document.getElementById("inp-px");
let inpEM = document.getElementById("inp-em");

// Function to convert PX to EM
let pxToEm = () => {
  let inpBaseValue = inpBase.value;
  let pxValue = inpPX.value;
  //Checking if input field isn't empty
  //If not empty then calculate the EM value
  if(pxValue.length != 0) {
    inpEM.value = pxValue / inpBaseValue;
  }
  // If empty then clear EM field
  else {
    inpEM.value = "";
  }
}

// Adding oninput event to each input field
inpPX.oninput = pxToEm;