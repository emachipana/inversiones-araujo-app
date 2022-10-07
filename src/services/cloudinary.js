export async function uploadImage (image) {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "inv-araujo-images");
  const response = await fetch("https://api.cloudinary.com/v1_1/enmanuel/image/upload", { method: "POST", body: data });
  const file = await response.json();
  
  return file.secure_url;
}
