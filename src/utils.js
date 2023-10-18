// Function to download the CV
export function downloadCV() {
    // Define the path to the CV file
    const filePath = '/files/cv.pdf'; // Adjust the path as needed
  
    // Fetch the CV file
    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a Blob object containing the file data
        const blobURL = URL.createObjectURL(blob);
  
        // Create an invisible <a> element to trigger the download
        const a = document.createElement('a');
        a.href = blobURL;
        a.download = 'resume.pdf'; // Specify the desired file name
        document.body.appendChild(a);
  
        // Trigger the click event on the <a> element to start the download
        a.click();
  
        // Remove the <a> element from the DOM
        document.body.removeChild(a);
  
        // Release the allocated object URL
        URL.revokeObjectURL(blobURL);
      })
      .catch((error) => {
        console.error('Error downloading Resume:', error);
      });
  }
  
