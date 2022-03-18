import request from "../helpers/request";

const uri = "/api/indice/";
const uriId = (id) => `${uri}/${id}`;

export default {
  get(query) {
    return request.create(uri).get(query);
  },
  post(data) {
    return request.create(uri).post(data);
  },
  put(id, data) {
    return request.create(uriId(id)).put(data);
  },
  patch(id, data) {
    return request.create(uriId(id)).patch(data);
  },
  delete(id) {
    return request.create(uriId(id)).delete();
  },
};
