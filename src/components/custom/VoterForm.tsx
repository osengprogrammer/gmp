"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  NIK: string;
  Nama: string;
  TTL: string; // Tempat/Tgl Lahir
  Jenis_Kelamin: string; // Jenis Kelamin
  Darah: string; // Gol. Darah
  Alamat: string;
  RT_RW: string; // RT / RW
  Kel_Desa: string; // Kel / Desa
  Kecamatan: string;
  Agama: string;
  Status: string; // Status Perkawinan
  Pekerjaan: string;
  Kewarganegaraan: string;
  BerlakuHingga: string;
};

const VoterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Added to set default values
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  React.useEffect(() => {
    // Populate form with default values
    const defaultValues: Inputs = {
      NIK: '3171234567890123',
      Nama: 'MIRA SETIAWAN',
      TTL: 'JAKARTA, 18-02-1986',
      Jenis_Kelamin: 'PEREMPUAN Gol. Darah: B ~ —',
      Darah: '', // You can add the appropriate value here
      Alamat: 'JL. PASTI CEPAT A7/66 wie',
      RT_RW: '007/008 =',
      Kel_Desa: 'PEGADUNGAN 7',
      Kecamatan: 'KALIDERES',
      Agama: 'ISLAM oh',
      Status: 'KAWIN ?',
      Pekerjaan: 'PEGAWAI SWASTA',
      Kewarganegaraan: 'WNI JAKARTA BARAT',
      BerlakuHingga: '22-02-2017 02122012',
    };

    // Set default values for each input field
    Object.keys(defaultValues).forEach((key) => {
      setValue(key as keyof Inputs, defaultValues[key as keyof Inputs]);
    });
  }, [setValue]);


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

      {/* TTL input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TTL">Tempat/Tgl Lahir</label>
        <input
          {...register('TTL', { required: true })}
          id="TTL"
          type="text"
          placeholder="Tempat/Tgl Lahir"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.TTL && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      {/* Jenis Kelamin input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Jenis_Kelamin">Jenis Kelamin</label>
        <input
          {...register('Jenis_Kelamin', { required: true })}
          id="Jenis_Kelamin"
          type="text"
          placeholder="Jenis Kelamin"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Jenis_Kelamin && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      {/* Gol. Darah input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Darah">Gol. Darah</label>
        <input
          {...register('Darah', { required: true })}
          id="Darah"
          type="text"
          placeholder="Gol. Darah"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Darah && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>
      {/* Alamat input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Alamat">Alamat</label>
        <input
          {...register('Alamat', { required: true })}
          id="Alamat"
          type="text"
          placeholder="Alamat"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Alamat && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      {/* RT / RW input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="RT_RW">RT / RW</label>
        <input
          {...register('RT_RW', { required: true })}
          id="RT_RW"
          type="text"
          placeholder="RT / RW"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.RT_RW && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      {/* Kel / Desa input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Kel_Desa">Kel / Desa</label>
        <input
          {...register('Kel_Desa', { required: true })}
          id="Kel_Desa"
          type="text"
          placeholder="Kel / Desa"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Kel_Desa && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      {/* Other input fields go here */}
      
      {/* Kecamatan input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Kecamatan">Kecamatan</label>
        <input
          {...register('Kecamatan', { required: true })}
          id="Kecamatan"
          type="text"
          placeholder="Kecamatan"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Kecamatan && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      {/* Agama input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Agama">Agama</label>
        <input
          {...register('Agama', { required: true })}
          id="Agama"
          type="text"
          placeholder="Agama"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Agama && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      {/* Status Perkawinan input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Status">Status</label>
        <input
          {...register('Status', { required: true })}
          id="Status"
          type="text"
          placeholder="Status"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Status && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      {/* Pekerjaan input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Pekerjaan">Pekerjaan</label>
        <input
          {...register('Pekerjaan', { required: true })}
          id="Pekerjaan"
          type="text"
          placeholder="Pekerjaan"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Pekerjaan && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      {/* Kewarganegaraan input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Kewarganegaraan">Kewarganegaraan</label>
        <input
          {...register('Kewarganegaraan', { required: true })}
          id="Kewarganegaraan"
          type="text"
          placeholder="Kewarganegaraan"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.Kewarganegaraan && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      
      {/* Berlaku Hingga input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="BerlakuHingga">Berlaku Hingga</label>
        <input
          {...register('BerlakuHingga', { required: true })}
          id="BerlakuHingga"
          type="text"
          placeholder="Berlaku Hingga"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.BerlakuHingga && <span className="text-red-500 text-xs italic">This field is required</span>}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default VoterForm;
