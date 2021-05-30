
import SearchInput from '../../components/SearchInput';
import FoodList from '../../components/FoodList';
import InforTable from '../../components/InfoTable';
import { getFoodInfo } from './selectors';
import { useSelector } from 'react-redux';

export default function Food() {
  const foodData = useSelector(getFoodInfo)
  
  return (
      <div>
        <SearchInput/>
        <FoodList />
        {foodData.length > 0 ? <InforTable /> : null}
      </div>
 )
};