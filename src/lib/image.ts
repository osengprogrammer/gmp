import { supabase } from "@/lib/supabase";
import { uid } from 'uid';

export const uploadImage = async (file:any) => {
    try {
     
      const fileExt = file.name.split('.').pop()
      const filePath = `${uid}-${Math.random()}.${fileExt}`
      const imageUrl = await supabase.storage.from('images').upload(filePath, file)
      return imageUrl
    } catch (error) {
      alert('Error uploading avatar!')
    } 
  }