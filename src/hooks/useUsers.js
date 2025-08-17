import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../services/userService';

export const useUsers = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, 
    retry: 2,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  return {
    users: users || [],
    isLoading,
    isError,
    error,
    refetch,
    isRefreshing: isRefetching,
  };
};

