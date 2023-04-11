import httpService from "./http.service";

const uploadEndpoint = "upload/";
const uploadService = {
    upload: async (payload) => {
        const { data } = await httpService.post(uploadEndpoint, payload);
        return data;
    }
};
export default uploadService;
