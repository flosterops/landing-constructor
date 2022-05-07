import { request } from 'helpers/axios.helper';
import { urls } from 'helpers/urls.helper';

export const commonRequest = async () => {
  try {
    const { data } = await request.get(urls.common());
    if (!data) {
      return null;
    }
    return data;
  } catch (e) {
    console.error(e, 'commonRequest');
  }
};
