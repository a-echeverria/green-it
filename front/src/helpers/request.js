import * as _ from 'lodash';
import Cache from './cache';
import axios from 'axios';
const request = function () {};

request.optionsConstructor = function (options) {
  const optionList = [];

  for (const optionName in options) {
    const option = options[ optionName ];
    if (typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean') {
      optionList.push(`${optionName}=${option}`);
    }
    else if (Array.isArray(option)) {
      optionList.push(..._.map(option, val => `${optionName}=${val}`));
    }
    else if (option && typeof option === 'object') {
      optionList.push(`${optionName}=${option.toJSON()}`);
    }
  }

  return optionList;
};

request.create = function (uri) {
  let _endPoint = 'http://127.0.0.1:80';

  return {
    uri: _endPoint + uri,

    createHeaders: function (headers) {
      const token = Cache.get('token');
      let header = {
        'content-type': 'application/json',
      };
      header = Object.assign(header, headers);
      if (token) {
        header.Authorization = token;
      }
      return header;
    },

    get: function (params, responseType) {
      return axios({
        method: 'GET',
        url: this.uri,
        params: params,
        headers: this.createHeaders(),
        catch: (err) => {console.log(err)},
        responseType: responseType ? responseType : 'json',
      });
    },

    post: function (payload, headers, responseType) {
      return axios({
        method: 'POST',
        url: this.uri,
        headers: this.createHeaders(headers),
        data: JSON.stringify(payload),
        processData: false,
        responseType: responseType ? responseType : 'json',
        catch: (err) => {console.log(err)},
      });
    },

    put: function (payload, headers) {
      return axios({
        method: 'PUT',
        url: this.uri,
        headers: this.createHeaders(headers),
        data: JSON.stringify(payload),
        processData: false,
        catch: (err) => {console.log(err);},
      });
    },

    delete: function () {
      return axios({
        method: 'DELETE',
        url: this.uri,
        headers: this.createHeaders(),
        catch: (err) => {console.log(err);},
      });
    },

    patch: function () {
      return axios({
        method: 'PATCH',
        url: this.uri,
        headers: this.createHeaders(),
        catch: (err) => {console.log(err);},
      });
    }
  };
};

export default request;
