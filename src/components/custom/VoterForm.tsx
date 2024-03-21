"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useString } from "@/providers/textContex";
import cleanText from "@/lib/cleanOcr";
import { Button } from "../ui/button";
import { createGMP } from "@/lib/actions";
type Inputs = {

  Nama: string;
  Gender: string;
  Usia: string;
  Desa: string;
  Rt: string;
  Rw: string;
  UserId:string
};

type NilaiDefaultState = null | string[];


const VoterForm =  ({downloadURL}:any) => {
  const { stringValue, setStringValue } = useString();
  const [nilaiDefault, setNilaiDefault] = useState<string[]>([]);

  console.log(nilaiDefault);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let ASA = await cleanText(stringValue);

        setNilaiDefault(ASA);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (stringValue) {
      fetchData();
    }
  }, [stringValue]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Added to set default values
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    console.log({...data, downloadURL});
    let dataQ = {...data, downloadURL}
    await createGMP ( dataQ)
  };

  useEffect(() => {
    if (nilaiDefault.length >= 2) {
    
      setValue("Nama", nilaiDefault[1]); // Set default value for Nama input
      setValue("Desa", nilaiDefault[6]); // Set default value for Nama input
    }
  }, [nilaiDefault, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      {/* Nama input */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Nama"
        >
          Nama
        </label>
        <input
          {...register("Nama", { required: true })}
          id="Nama"
          type="text"
          placeholder="Nama"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Nama && (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>

      {/* Jenis Kelamin input */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Gender"
        >
          JENIS KELAMIN
        </label>
        <input
          {...register("Gender", { required: true })}
          id="Gender"
          type="text"
          placeholder="JENIS KELAMIN"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Gender&& (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>
      {/* Jenis Usia input */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Usia"
        >
          USIA
        </label>
        <input
          {...register("Usia", { required: true })}
          id="Usia"
          type="text"
          placeholder="USIA"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Usia && (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>

      {/* Desa input */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Desa"
        >
          DESA
        </label>
        <input
          {...register("Desa", { required: true })}
          id="Desa"
          type="text"
          placeholder="DESA"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Desa && (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>

      {/* Jenis RT input */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Rt"
        >
          RT
        </label>
        <input
          {...register("Rt", { required: true })}
          id="Rt"
          type="text"
          placeholder="RT"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Rt && (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>
      {/* Jenis RW input */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Rw"
        >
          RW
        </label>
        <input
          {...register("Rw", { required: true })}
          id="Rw"
          type="text"
          placeholder="RW"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Rw && (
          <span className="text-red-500 text-xs italic">
            This field is required
          </span>
        )}
      </div>
      <Button type="submit">Upload</Button>
    </form>
  );
};

export default VoterForm;
