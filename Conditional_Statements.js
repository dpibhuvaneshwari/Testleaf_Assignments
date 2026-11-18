
 // Assignment 1: Launch Browser using if-else

function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Chrome browser is launched");
    } else {
        console.log("Other browser is launched");
    }
}

// Function calls
launchBrowser("chrome");
launchBrowser("firefox");


// Assignment 2: Run Tests using switch case

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Testing");
            break;

        case "sanity":
            console.log("Running Sanity Testing");
            break;

        case "regression":
            console.log("Running Regression Testing");
            break;

        default:
            console.log("Running Smoke Testing");
            break;
    }
}

// Function calls
runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("testing");
