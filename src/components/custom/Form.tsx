// ImageUploadPreview.tsx
"use client";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import convertor from "@/lib/converter";
import { CameraIcon, ImagePlus } from "lucide-react";
import { Button } from "../ui/button";
import { useString } from "@/providers/textContex";
import VoterForm from "./Form";


const ImageUploadPreview: React.FC = () => {
  const [fileImage, setFileImage] = useState<any|null>(null);
  const [urlText, setUrlText] = useState<string | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [texts, setTexts] = useState<Array<string>>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  const {setStringValue } = useString();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewURL(url);
      setUrlText(url);
      setFileImage(file)
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

 


 
  return (
    <div className="p-8  flex flex-col items-center">
      <h1 className="font-bold mb-4 text-green-800">Pilih KTP</h1>
      <div>
         <input
        type="file"
        accept="image/*"
        style={{display:'none'}}
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
    
      <div>
     
      </div>
      <div className=" flex flex-col justify-center items-center">
        {previewURL && (
          <div>
            <Image
              src={previewURL}
              alt="Preview"
              className="max-w-full h-auto rounded-lg"
              width={500}
              height={50}
            />
           
            </div>)}
       
          <VoterForm/>
    
    </div>
    </div>
  );
};

export default ImageUploadPreview;
