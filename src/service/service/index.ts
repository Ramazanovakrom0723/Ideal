import { toast } from "react-toastify";
import http from '../config';
import { Reques } from "../../interface/service";

interface SearchPayload {
  page: number;
  limit: number;
  name: string;
  owner_email?: string; // Optional if it's not always required
}

  

const serviceStore: Reques = {
    delete: async (id: string) => {
        try {
            const response = await http.delete(`/service?id=${id}`);
            return response;
        } catch (err) {
            toast.error('Xatolik bor !');
        }
    },
    post: async (payload: any) => {
        try {
            const response = await http.post("/service", payload);
            return response;
        } catch (err) {
            toast.error('Xatolik bor !');
        }
    },
    get: async (payload: { page: number, limit: number, owner_id: string }) => {
        try {
            const response = await http.get(`/service/all?page=${payload.page}&limit=${payload.limit}&owner_id=${payload.owner_id}`);
            return response;
        } catch (err) {
            console.log(err);
            toast.error('Xatolik bor !');
        }
    },
    search: async (payload: SearchPayload) => {
        try {
            const response = await http.get(`/service/search?page=${payload.page}&limit=${payload.limit}&name=${payload.name}&owner_email=${payload.owner_email}`);
            return response;
        } catch (err) {
            toast.error('Xatolik bor !');
        }
    },
    put: async (payload: any) => {
        try {
            const response = await http.put(`/service`, payload);
            return response;
        } catch (err) {
            toast.error('Xatolik bor !');
        }
    }
};

export default serviceStore;
