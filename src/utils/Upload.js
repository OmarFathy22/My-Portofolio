import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function uploadImage(imageFile) {
  if(!imageFile) return "https://res.cloudinary.com/dqhdokahr/image/upload/v1691835172/my-portfolio/anoni_pdh2qo.png";
  const storageRef = ref(storage, "images/" + generateUniqueId());
  await uploadBytes(storageRef, imageFile);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
}

export function generateUniqueId() {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  return `${timestamp}_${randomString}`;
}
export default uploadImage;
