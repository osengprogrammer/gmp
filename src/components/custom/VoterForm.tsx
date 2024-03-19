"use client"

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useString } from "@/providers/textContex";
import cleanText from '@/lib/cleanOcr';

type Inputs = {
  NIK: string;
  Nama: string;
};

type NilaiDefaultState = null | string[];




const VoterForm = () => {


  const { stringValue, setStringValue } = useString(); 
  const [nilaiDefault, setNilaiDefault] = useState<string[]>([]);


 console.log(nilaiDefault)
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        let ASA = await cleanText(stringValue);
      
        setNilaiDefault(ASA);
      } catch (error) {
        console.error('Error fetching data:', error);
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

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  
  useEffect(() => {
    if (nilaiDefault.length >= 2) {
      setValue('NIK', nilaiDefault[0]); // Set default value for NIK input
      setValue('Nama', nilaiDefault[1]); // Set default value for Nama input
    }
  }, [nilaiDefault, setValue]);





  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    {/* NIK input */}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NIK">NIK</label>
      <input
        {...register('NIK', { required: true })}
        id="NIK"
        type="text"
        placeholder="NIK"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors.NIK && <span className="text-red-500 text-xs italic">This field is required</span>}
    </div>
  
    {/* Nama input */}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nama">Nama</label>
      <input
        {...register('Nama', { required: true })}
        id="Nama"
        type="text"
        placeholder="Nama"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {errors.Nama && <span className="text-red-500 text-xs italic">This field is required</span>}
    </div>
  
  

    </form>
  );
};

export default VoterForm;

