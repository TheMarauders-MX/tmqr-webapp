import Client from "../lib/axios/Client";

export const postClient = async (client: any): Promise <any> => {
    await Client.post(`/register`, client);
}