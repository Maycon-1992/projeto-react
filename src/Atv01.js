import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';

export default function Atv01() {
    return (
        <>
          <h1> Atv 1</h1>
          <Relogio />
          <Letreiro />

          <br/>
          <Link to="/">HOME </Link>
        
        </>
    );
}