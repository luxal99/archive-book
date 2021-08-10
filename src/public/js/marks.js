async function updateMark() {
  await httpRequest(API + "mark", "PUT", JSON.stringify({
    id: getValueByID("idMark"),
    name: getValueByID("editMarkName"),
    idLocation: { id: getValueByID("editIdLocation") },
  }), async () => {
    alert("Successfully updated");
    await refreshData();
  });

}

async function addMark() {
  await httpRequest(API + "mark", "POST", JSON.stringify(
    {
      name: document.getElementById("markName").value,
      idLocation: { id: getValueByID("idLocation") },
    },
  ), async () => {
    alert("Successfully created");
    await refreshData();
  });
}

async function deleteMark(idMark) {
  await fetch(API + `mark/${idMark}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
  await refreshData();
}


function getValueByID(id) {
  return document.getElementById(id).value;
}
