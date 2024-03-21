import prisma from "@/lib/db";
import { supabase } from "@/lib/supabase";

export async function createGMP({ userId, nama, desa, gender, usia, rt, rw }: any) {
  try {
    // Check if GMP data already exists for the user
    const existingData = await prisma.home.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!existingData) {
      // Create new GMP data if it doesn't exist
      const newData = await prisma.home.create({
        data: {
       
          nama: nama,
          desa: desa,
          gender: gender,
          usia: usia,
          rt: rt,
          rw: rw,
        },
      });

      // Handle any additional logic or return the created data
      return newData;
    } else {
      // Handle case where GMP data already exists
      console.log("GMP data already exists for this user.");
      return existingData;
    }
  } catch (error) {
    // Handle errors gracefully
    console.error("Error creating GMP data:", error);
    throw new Error("Failed to create GMP data");
  }
}
