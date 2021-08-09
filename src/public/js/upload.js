async function upload() {
  const files = document.getElementById("document-upload").files;
  for (const file of files) {
    const formData = new FormData();
    formData.append("document", file);

    await fetch(API + "document", {
      method: "POST",
      body: formData,
    });
  }
}
