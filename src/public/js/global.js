function show(elementId) {
  document.getElementById(elementId).style.display = "block";
}

function hide(elementId) {
  document.getElementById(elementId).style.display = "none";
}

function setValueToInput(elementId, models) {
  show(elementId);
  for (const model of models) {
    document.getElementById(model.name).value = model.value;
  }
}


