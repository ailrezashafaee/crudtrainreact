
import Input from '../../components/Ui/Input'
import Button from '../../components/Ui/Button'
import { ReactComponent as SVGIco } from '../../assets/addd.svg'
import Label from '../../components/Ui/Label'
import {Link} from 'react-router-dom'
import KhabarService from '../../services/Akhbar'
import useFilter from './hooks/useFilter'
export default function Filter() {
  const {data, setData , handleFilterSubmit} = useFilter();
  return (
    <div className='lg:flex items-center justify-between flex-row md:flex-wrap space-y-3'>
      <div className='flex items-center md:flex-wrap sm:flex-wrap space-y-3'>
        <span className='text-xs font-medium text-gray-900'>فیلتر براساس:</span>
        <Label>نام گروه :</Label>
        <div className='xl:w-[300px] lg:w-[200px]'><Input type='input' value={data.name} onChange={setData.setName} /></div>
        <Label>شناسه گروه:</Label>
        <div className='xl:w-[150px] lg:w-[100px]'><Input type='number' value={data.index} onChange={setData.setIndex}/></div>
        <Label>نام سامانه:</Label>
        <div className="xl:w-[150px] lg:w-[100px] ml-2"><Input type='string' value={data.system} onChange={setData.setSystem} /></div>
        <Button onClick={handleFilterSubmit} value='اعمال فیلتر' apply/>
      </div> 
      <div className='flex items-center flex-row'>
        <span className='text-sm text-gray-400 font-medium ml-3'>{KhabarService.lenght}  گروه</span>
        <Link to={'/newpost'}>
          <Button Icon={SVGIco} value={"افزودن گروه"}/>
        </Link>
      </div>
    </div>
  ) 
}
