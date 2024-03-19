import { createWorker } from "tesseract.js";

const convertor = async (img: string) => {
  console.log(img)
  const worker = await createWorker("eng");
  const ret = await worker.recognize(img);
  const text = ret.data.text;
//   console.log(text)
// const lines = text.split("\n").filter(line => line.trim() !== "");

// type Data = {
//   [key: string]: string; // Define the object type with string keys
// };

// const dataObject:Data = {};

// // Process each line to extract key-value pairs
// lines.forEach(line => {
//   const separatorIndex = line.search(/[:+]/); // Find the index of ":" or "+"
//   if (separatorIndex !== -1) {
//     const key = line.substring(0, separatorIndex).trim();
//     const value = line.substring(separatorIndex + 1).trim();
//     dataObject[key] = value;
//   }
// });

// // Output the resulting object
// console.log(dataObject);


  await worker.terminate();
  return text;
};

export default convertor;