import fs from "fs";

export const writeToFile = (file, content) => {
    fs.writeFile(file, content, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log(`File "${file}" written successfully`);
        }
    });
};
