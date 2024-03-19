// ImageUploadPreview.tsx
"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import convertor from "@/lib/converter";
import { ImagePlus } from "lucide-react";

import TextCard from "./TextCard";
import { Button } from "../ui/button";
import Link from "next/link";
import cleanText from "@/lib/cleanOcr";
import { useString } from "@/providers/textContex";

const ImageUploadPreview: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [urlText, setUrlText] = useState<string | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [texts, setTexts] = useState<Array<string>>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  const { stringValue, setStringValue } = useString(); 


  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewURL(url);
      setUrlText(url);
     
    }
  };

  const convert = async (url: string) => {
    if (url.length) {
      setProcessing(true);
      try {
        const text = await convertor(url); // Destructure the returned object to extract the 'text' property
        // console.log(text)
        // cleanText(text)
        setStringValue(text)
        setTexts((prevTexts) => [...prevTexts, text]); // Append the new text to the texts array
    
      } catch (error) {
        console.error('Error converting image:', error);
      } finally {
        setProcessing(false);
      }
    }
  };

 
  const handleProcessImage = async () => {
    if (urlText) {
      await convert(urlText);
      
      
    }
  };

  return (
    <div className="bg-green-50 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-green-800">
        Image Upload & Preview
      </h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-2 p-2 border border-green-400 rounded-lg"
      />
      {previewURL && (
        <div className=" flex flex-col justify-center items-center">
          <Image
            src={previewURL}
            alt="Preview"
            className="max-w-full h-auto rounded-lg"
            width={500}
            height={50}
          />

          <button
            onClick={handleProcessImage}
            disabled={!urlText}
            className={`bg-green-500 text-white py-2 px-4 rounded-lg mt-2${
              !urlText ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Extract Text
          </button>

          {urlText && (
            <div className=" md:bottom-10 w-full bg-green-50 rounded-lg shadow-lg">
              <div className="flex flex-col gap-10 items-center justify-center p-5 md:p-20">
                {texts.map((t, i) => (
                  <TextCard key={i} t={t} i={i} />
                ))}
              </div>
            </div>
          )}


      <div className="flex items-center justify-center">
        {texts && <Link
          href={{
            pathname: "/voter",
          
          }}
        >
       <Button>Continue</Button>
        </Link>}
       
        
      </div>
        
        </div>
      )}
    </div>
  );
};

export default ImageUploadPreview;
