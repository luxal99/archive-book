async function addOrUpdateLocation() {
  const locationForm = document.getElementById("location-form");
  const body = {
    id: locationForm.id.value !== undefined ? locationForm.id.value : null,
    name: locationForm.name.value,
  };
  if (body.id === "") {
    delete body.id;
  }
  await httpRequest(API + "location", locationForm.id.value ? "PUT" : "POST", JSON.stringify(body), async () => {
    rememberTab();
    alert("Successfully");
    location.reload();
  });

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
