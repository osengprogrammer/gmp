// ImageUploadPreview.tsx
"use client";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import convertor from "@/lib/converter";
import { CameraIcon, ImagePlus } from "lucide-react";
import { Button } from "../ui/button";
import { useString } from "@/providers/textContex";
import VoterForm from "./VoterForm";
import { storage } from "@/lib/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uUid";

const ImageUploadPreview: React.FC = () => {
  const [fileImage, setFileImage] = useState<any | null>(null);

  const [urlText, setUrlText] = useState<string | null>(null);
  const [previewURL, setPreviewURL] = useState<string | "">("");
  const [downloadURL1, setDownloadURL] = useState<string | "">("");
  const [texts, setTexts] = useState<Array<string>>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  const [path, setPath] = useState("");
  const { setStringValue } = useString();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewURL(url);
      setUrlText(url);
      setFileImage(file);
      await convert(url);
    }
  };

  const convert = async (url: string) => {
    if (url.length) {
      setProcessing(true);
      try {
        const text = await convertor(url); // Destructure the returned object to extract the 'text' property
        setStringValue(text);
        setTexts((prevTexts) => [...prevTexts, text]); // Append the new text to the texts array
        setProcessing(false);
      } catch (error) {
        console.error("Error converting image:", error);
      } finally {
        setProcessing(false);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const uploadKtp = async () => {
    if (!fileImage) return;
    const storageRef = await ref(storage, `some-child/${fileImage.name}`);

    // 'file' comes from the Blob or File API
    const snapshot = await uploadBytes(storageRef, fileImage);

    console.log("Uploaded a blob or file!");

    // Get the download URL for the uploaded file
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log("Download URL:", downloadURL);
    setDownloadURL(downloadURL);
  };

  return (
    <div className="p-8  flex flex-col items-center">
      <h1 className="font-bold mb-4 text-green-800">Pilih KTP</h1>
      <div>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className="flex items-center px-2 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
          onClick={handleButtonClick}
        >
          <CameraIcon className="w-5 h-5 mr-2" aria-hidden="true" />
          Pilih KTP
        </button>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div>
          <Image
            src={previewURL}
            alt="Preview"
            className="max-w-full h-auto rounded-lg"
            width={500}
            height={50}
          />

          {fileImage && <Button onClick={uploadKtp}>Upload KTP</Button>}

          {downloadURL1&&(
            <VoterForm downloadURL={downloadURL1} />
          )}

          
        </div>
      </div>
    </div>
  );
};

export default ImageUploadPreview;
