import axios from 'react-native-axios';
import urls from './urls';

export function getWorkShops() {
  return new Promise((resolve, reject) => {
    axios
      .get(urls.getWorkSpace)
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
}

export function addWorkShop({ ProjectName, ProjectFrequency  }) {
  const params = {
    ProjectName: ProjectName,
    ProjectFrequency: ProjectFrequency
  }
  return new Promise((resolve, reject) => {
    axios
      .post(urls.getWorkSpace, params)
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
}
