import { Link } from 'react-router-dom';
import './menu.css'

const Menu = () => {

  

    return(
        <div className='containerMenu'>
            
            <ul>
            <img src="https://cdn-icons-png.flaticon.com/512/6889/6889345.png" style={{ width: "50px" }}/>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/estados'>Cotações</Link></li>
                <li><Link to='/cidades'>Minha Conta</Link></li>
                <li><Link to='/pessoas'>Serviços Disponíveis</Link></li>
            </ul>

        </div>
    );

}
 
export default Menu;