import httpService from "./http.service";

const itemEndpoint = "item/";

const itemService = {
    get: async () => {
        const req = await httpService.get(itemEndpoint);
        return req.data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(
          itemEndpoint + "create",
          payload
        );
        return data;
    },
    delete: async (payload) => {
        const { data } = await httpService.delete(itemEndpoint + payload);
        return data;
    }
};
export default itemService;
