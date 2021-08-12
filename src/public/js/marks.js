async function addOrUpdateMark() {
  const markForm = document.getElementById("mark-form");
  const body = {
    id: markForm.id.value !== undefined ? markForm.id.value : null,
    name: markForm.name.value,
    idLocation: { id: markForm.idLocation.value },
  };

  for (const [k, v] of Object.entries(body)) {
    if (!v) delete body[k];
  }
  if (markForm.name && markForm.idLocation.value) {
    await httpRequest(API + "mark", markForm.id.value ? "PUT" : "POST", JSON.stringify(body), async () => {
      rememberTab();
      alert("Successfully created");
      location.reload();
    });
  }
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
  rememberTab();
  location.reload();
}
