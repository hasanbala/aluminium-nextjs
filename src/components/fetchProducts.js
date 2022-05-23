const baseEndPointUrl = process.env.RAW_GITHUB_API;
export const FetchProducts = async (path) => {
  const response = await fetch(`${baseEndPointUrl}/${path}`);
  const data = await response.json();
  return data;
};
