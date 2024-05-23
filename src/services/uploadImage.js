import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../firebase"

export const uploadImage = async (file, id) => {
  const storageRef = ref(storage, `images/${id}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}
