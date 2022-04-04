import { Route, Routes } from 'react-router-dom';
import Bron from './Components/BandQilish/Bron';
import FoodOrder from './Components/FoodOrder/FoodOrder';
import Footer from './Components/Footer/Footer';
import Order from "../src/Components/Order/Order";
import './style.scss';
import Bizhaqimizda from './Components/Bizhaqimizda/Bizhaqimizda';
import Hamkor from './Components/Hamkorlar/Hamkor';
import Foydalanish from './Components/Foydalanish/Foydalanish';
import Boglanish from './Components/Bog\'lanish/Bog\'lanish';
import Prducts from './Components/Prducts/Prducts';
import MenyuRestorand from './Components/MenyuRestorant/MenyuRestorand';

function App() {
  return (
    <div className="App">
      <div>
        <div>
           <Routes>
              <Route path='/' element={< Order />} />
              <Route path='/bizhaqimizda' element={<Bizhaqimizda/ >} />
              <Route path='/FoodOrder' element={<FoodOrder data={{title:"MY RESTORANT", text:"Joylarni Hoziroq Band Qilish", text2:" Mazali Taomlarni Yetkazib Berish", text3:"Our popular Category"}} />} />
              <Route path='/bron' element={<Bron />} />
              <Route path='/hamkor' element={<Hamkor />} />
              <Route path='/foydalanish' element={< Foydalanish />} />
              <Route path='/boglanish' element={<Boglanish />} />
              <Route path='/prducts' element={<Prducts />} />
              <Route path='/menyuRes' element={<MenyuRestorand />} />
           </Routes>
        </div>
        <Footer title="Sayt JAFTN IT- kompaniyasi tomonidan ishlab chiqilgan." text="MYRESTORANT" text2="Mazali Taomlarni yetkazib berish" />
      </div>
    </div>
  );
}

export default App;
