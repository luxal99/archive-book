function create() {
  const archiveBookForm = document.getElementById("archive-book-form").elements;
  const body = {
    title: archiveBookForm.title,
    idLocation: archiveBookForm.idLocation,
    idMark: archiveBookForm.idMark,
    note: archiveBookForm.note,
  };
}

async function archiveBook(idArchiveBook) {
  const files = document.getElementById("document-archiveBook").files;
  for (const file of files) {
    const formData = new FormData();
    formData.append("document", file);

    await fetch(API + `document/${idArchiveBook}`, {
      method: "POST",
      body: formData,
    });
  }
}
