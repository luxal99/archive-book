async function addOrUpdateMark() {
  const markForm = document.getElementById("mark-form");
  const body = {
    id: markForm.id.value !== undefined ? markForm.id.value : null,
    name: markForm.name.value,
    idLocation: { id: markForm.idLocation.value },
  };

  if (body.id === "") {
    delete body.id;
  }
  await httpRequest(API + "mark", markForm.id.value ? "PUT" : "POST", JSON.stringify(body), async () => {
    rememberTab();
    alert("Successfully created");
    location.reload();
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
  rememberTab();
  location.reload();
}
