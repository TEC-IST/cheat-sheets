//paste this into your console to extract all links and download them as a text file with one link on each line
// Collect all the URLs
const links = Array.from(document.querySelectorAll('a')).map(link => link.href).join('\n');

// Create a blob with the URLs as plain text
const blob = new Blob([links], { type: 'text/plain' });

// Create a link element to download the file
const downloadLink = document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = 'links.txt';  // Name of the downloaded file
document.body.appendChild(downloadLink);

// Trigger the download
downloadLink.click();

// Remove the link element from the document
document.body.removeChild(downloadLink);
