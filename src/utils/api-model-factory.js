import * as models from '../models';

export default (data = {type: undefined, id: undefined, attributes: {}}) => {

  if (models[data.type]) {
    return new models[data.type]({...data.attributes, id: data.id});
  }

  return data;
}