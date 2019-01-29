import get from 'lodash/get';
import configData from './config-data.json';

// Central configuration object
class Config {
  static get(key) {
    return get(configData, key);
  }
}

export default Config;
