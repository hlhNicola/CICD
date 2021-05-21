
import SearchInput from '../../components/SearchInput';
import FoodList from '../../components/FoodList';
import ImgCard from '../../components/Card';
import InforTable from '../../components/InfoTable';

export default function Food() {
  
  return (
      <div className="display: flex">
        <div>
        <SearchInput/>
        <FoodList />
        </div>
        <div>
        <ImgCard />
        <InforTable />
        </div>
      </div>
 )
};