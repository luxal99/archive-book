async function addOrUpdateLocation() {
  const locationForm = document.getElementById("location-form");
  const body = {
    id: locationForm.id.value !== undefined ? locationForm.id.value : null,
    name: locationForm.name.value,
  };
  if (body.id === "") {
    delete body.id;
  }
  for (const [k, v] of Object.entries(body)) {
    if (!v) delete body[k];
  }
  if (body.name) {
    await httpRequest(API + "location", locationForm.id.value ? "PUT" : "POST", JSON.stringify(body), async () => {
      rememberTab();
      alert("Successfully");
      location.reload();
    });
  } else {
    alert("Fill required fields");
  }
}

async function deleteLocation(idLocation) {
  await fetch(API + `location/${idLocation}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
  await refreshData();
}
