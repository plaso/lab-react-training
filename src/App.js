import './App.css';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Dice from './components/Dice/Dice';
import FaceBook from './components/FaceBook/FaceBook';
import Greetings from './components/Greetings/Greetings';
import LikeButton from './components/LikeButton/LikeButton';
import Random from './components/Random/Random';
import Ratings from './components/Ratings/Ratings';

function App() {
  return (
    <div className="App">
      <h1>Greetings</h1>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>Credit card</h1>

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />

      <h1>Ratings</h1>

      <Ratings>0</Ratings>
      <Ratings>1.49</Ratings>
      <Ratings>1.5</Ratings>
      <Ratings>3</Ratings>
      <Ratings>4</Ratings>
      <Ratings>5</Ratings>

      <h1>LikeButton</h1>

      <LikeButton />

      <h1>
        Dice
      </h1>

      <Dice />

      <h1>Facebook</h1>

      <FaceBook />
    </div>
  );
}

export default App;
