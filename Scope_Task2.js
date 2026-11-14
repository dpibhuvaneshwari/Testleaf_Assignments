
const browserVersion = "Chrome";

function getBrowserVersion() {

    if (browserVersion === "Chrome") {
        let browserVersion = "Firefox"; // block scoped chrome is displayed as output , if var is used it returns undefined due to hoisting 
    }

    console.log(browserVersion);
}

getBrowserVersion();