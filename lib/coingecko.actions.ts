'use server';

import qs from 'query-string';

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if(!BASE_URL) throw new Error('COINGECKO_BASE_URL is not defined');
if(!API_KEY)  throw new Error('COINGECKO_API_KEY is not defined');

export async function fetcher<T>(endpoint:string,
  params?:QueryParams,
  revalidate=600
):Promise<T>{
  const url = qs.stringifyUrl({
    url:`${BASE_URL}${endpoint}`,
    query:params,
  },
  {
    skipNull: true,
    skipEmptyString: true,
  },
);
  const response =await fetch(url,{
    headers: {
      'x-cg-demo-api-key': API_KEY,
      'Content-Type': 'application/json',
    } as Record<string, string>,
    next:{revalidate},
  }) 

  if(!response.ok){
    console.log('responseError',response)
    throw new Error(`Error fetching data from CoinGecko: ${response.status} ${response.statusText}`);
  }

  const data = await response.json() as T;
  return data;
}