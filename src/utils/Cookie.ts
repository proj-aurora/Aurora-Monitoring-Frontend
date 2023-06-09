import axiosInstance from "./AxiosInstance";

export const tokenValidity = async (): Promise<boolean> => {
  try {
    const response = await axiosInstance.get("/user/id")
    return response.data.success;
  } catch (error) {
    return false;
  }
};


export const fetchUserInfo = async () => {
  try {
    const response = await axiosInstance.get("/user/id")
    return response.data;
  } catch (error) {
    return null;
  }
}

export const fetchTeamInfo = async (teamId: string | undefined) => {
  if (teamId !== undefined) {
    try {
      const response = await axiosInstance.post('/team/info', {'teamId': teamId})
      return response.data
    } catch (error) {
      return null
    }
  } else return null
}

export const fetchAgentList = async (teamId: string | undefined) => {
  if (teamId !== undefined) {
    try {
      const response = await axiosInstance.post('/agent/agent/list', {'teamId': teamId})
      return response.data
    } catch (error) {
      return null
    }
  } else return null
}