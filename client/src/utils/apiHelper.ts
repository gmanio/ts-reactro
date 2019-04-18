export enum ApiHeaderContentType {
  APPLICATION_JSON = 'application/json',
  APPLICATION_FORM_URLENCODED = 'application/x-www-form-urlencoded',
  MULTIPART_FORM_DATA = 'multipart/form-data'
}

export const apiFetcher = async (url: string, init?: RequestInit) => {
  const response = await fetch(url, { ...init, credentials: 'same-origin' });
  return response.json();
};

export const getApiPostBody = (body: string, contentType: ApiHeaderContentType) => {
  return {
    headers: {
      'Accept': contentType,
      'Content-Type': contentType
    },
    method: 'POST',
    body
  };
};
