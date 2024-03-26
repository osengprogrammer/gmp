"use client";

import React,{useState,useEffect} from 'react'
import { db } from "@/lib/firebase"
import { collection, query, where, getDocs } from "firebase/firestore";
import Image from 'next/image';


interface User {
  id: string;
  desa: string;
  jeniskelamin: string;
  nama: string;
  rt: string;
  rw: string;
  url: string;
  usia: string;
}
function MapFilterItems() {
  const [users, setUsers] = useState<User[]>([]); // Specify User[] as the type for users state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const votersCollection = collection(db, 'voters');
        const q = query(votersCollection);
        const querySnapshot = await getDocs(q);

        const userData: User[] = []; // Specify User[] as the type for userData

        querySnapshot.forEach(doc => {
          const user: User = {
            id: doc.id,
            desa: doc.data().desa || '',
            jeniskelamin: doc.data().jeniskelamin || '',
            nama: doc.data().nama || '',
            rt: doc.data().rt || '',
            rw: doc.data().rw || '',
            url: doc.data().url || '',
            usia: doc.data().usia || '',
          };
          userData.push(user);
        });

        setUsers(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white rounded-lg shadow-md p-4">
            <Image src={user.url} alt="User Image" className="w-full h-auto mb-4"  width={100}
      height={50} />
            <p className="text-lg font-semibold">{user.nama}</p>
            <p className="text-gray-600 mb-2">{user.desa}</p>
            <p className="text-gray-600 mb-2">{user.jeniskelamin}</p>
            <p className="text-gray-600 mb-2">RT: {user.rt} | RW: {user.rw}</p>
            <p className="text-gray-600">Usia: {user.usia}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default MapFilterItems