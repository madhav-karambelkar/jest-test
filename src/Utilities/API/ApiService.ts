import axios from 'axios';

interface ErrorModel {
  message: string
  response: {
    data: string | Record<string, string>
  }
}

const mainApiService = async <T = any, R = any>({
  url,
  method,
  data,
}: {
  url: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  data?: T;
}) => {
  try {
    let apiURL = url;
    const result: {data: R}= await axios({
      url: apiURL,
      method,
      data,
    });
    return {data: result?.data};
  } catch (axiosError) {
    console.log(axiosError, 'axiosError')
    let error = axiosError as ErrorModel 
    let err = error?.response?.data ?? error?.message
    return {error: err}
  }
};

export default mainApiService;