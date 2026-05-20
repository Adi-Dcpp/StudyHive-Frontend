import API from "./api";

export const getNotifications = async () => {

  const response = await API.get(
    "/notifications"
  );

  return response.data.data;

};

export const deleteNotification =
  async (id) => {

    const response = await API.delete(
      `/notifications/${id}`
    );

    return response.data;

};

export const clearAllNotifications =
  async () => {

    const response = await API.delete(
      "/notifications/clear-all"
    );

    return response.data;

};