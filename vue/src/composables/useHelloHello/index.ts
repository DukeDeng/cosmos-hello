/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/vue-query";
import { useClient } from '../useClient';

export default function useHelloHello() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.HelloHello.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QuerySayHello = (name: string,  options: any) => {
    const key = { type: 'QuerySayHello',  name };    
    return useQuery([key], () => {
      const { name } = key
      return  client.HelloHello.query.querySayHello(name).then( res => res.data );
    }, options);
  }
  
  return {QueryParams,QuerySayHello,
  }
}
