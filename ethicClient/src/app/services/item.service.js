import httpService from "./http.service";

const itemEndpoint = "item/";

const itemService = {
    get: async () => {
        const req = await httpService.get(itemEndpoint);
        return req.data;
    }
};
export default itemService;
