
import { useQuery } from '@tanstack/react-query';
 import { useContext } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import useAxiosSecure from './useAxiosSecure';


const useTanstrackQuery = () => {
  const { user } = useContext(AuthContext);
 const axiosSecure = useAxiosSecure()
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {

      const res = await axiosSecure.get(`/carts?email=${user?.email}`)
      return res.data;

    }
  })
  return [cart, refetch]
};

export default useTanstrackQuery;