
import SearchInput from '../../components/SearchInput';
import FoodList from '../../components/FoodList';
import InforTable from '../../components/InfoTable';
import { getFoodInfo } from './selectors';
import { useSelector } from 'react-redux';

export default function Food() {
  const foodData = useSelector(getFoodInfo)
  
  return (
      <div>
        <div style={{display: 'flex', justifyContent:'center', margin: '50px'}}>
        <FoodList/>
        </div>
        {foodData.length > 0 ? <InforTable /> : null}
      </div>
 )
};