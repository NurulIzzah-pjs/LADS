function downloadImage(url, filename) {
  fetch(url, { mode: 'cors' })
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.blob();
    })
    .then(blob => {
      const blobURL = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobURL;
      a.download = filename + '.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(blobURL);
    })
    .catch(error => {
      alert('Failed to download image.');
      console.error(error);
    });
}
