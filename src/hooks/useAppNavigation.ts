import { useNavigation } from '@react-navigation/native';
import { IRouteBody } from './useAppRoute';

interface IAppNavigation {
  navigate: (value: string, options?: IRouteBody['params']) => void;
}

const useAppNavigation = () => useNavigation<IAppNavigation>().navigate;
export default useAppNavigation;
