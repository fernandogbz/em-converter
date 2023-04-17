// Getting variables for each input field
let inpBase = document.getElementById("inp-base-px");
let inpPX = document.getElementById("inp-px");
let inpEM = document.getElementById("inp-em");

// Function to convert PX to EM
let pxToEm = () => {
  let inpBaseValue = inpBase.value;
  let pxValue = inpPX.value;
  console.log(inpBaseValue,pxValue)
}

// Adding oninput event to each input field
inpPX.oninput = pxToEm;