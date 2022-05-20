const baseEndPointUrl =
  "https://api.github.com/repositories/493851314/contents/aluminium-nextjs/products";

export const FetchProducts = async (path) => {
  const response = await fetch(`${baseEndPointUrl}/${path}`);
  const data = await response.json();
  return data;
};
