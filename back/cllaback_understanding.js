// Function to simulate downloading data
function downloadData(url, callback) {
    console.log(`Starting to download data from ${url}...`);
    
    // Simulate a delay (e.g., downloading time) with setTimeout
    setTimeout(() => {
        const data = "Downloaded data";  // Simulated data
        console.log("Download complete.");
        
        // Invoke the callback function once the download is complete
        callback(5,data);  // Pass the downloaded data to the callback
    }, 2000);  // 2 seconds delay
}

// Function to process data (this will be the callback function)
function processData(x,data) {
    console.log("Processing data...");
    console.log(`Data: ${data}`);
    console.log(`No: ${x}`);
}



//               ||
//               ||
//               ||
//              _||_
//              \  /
//               \/
// Calling the function with a callback
downloadData("https://example.com/file", processData);



