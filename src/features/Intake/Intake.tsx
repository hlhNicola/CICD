
import SearchInput from '../../components/SearchInput';
import FoodList from '../../components/FoodList';
import Card from '../../components/Card';
import { useSelector } from 'react-redux';
import { getSelectedItems } from './selectors';

export default function Intake() {
  const intake = useSelector(getSelectedItems)
  const cards = intake.length > 0 ? (intake.map((item: any, index: number) => {
    console.log(item)
      return <Card food={item} key={index}/>
    })):null
  
  return (
      <div style={{display: 'flex', justifyContent:'space-around'}}>
        {cards}
      </div>
 )
};