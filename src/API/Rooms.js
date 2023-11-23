import axiosSecure from "./Index";


/// Get All Data In Rooms
export const getALLRoms = async () => {
  const { data } = await axiosSecure.get("/rooms");
  return data;
};

/// Get One Data In Rooms
export const getRoom = async (id) => {
  const { data } = await axiosSecure.get(`/rooms/${id}`);
  console.log(data);
  return data;
};
