import { Link, NavLink } from 'react-router-dom';
import { navbar } from '../../helpers/navbar';
import * as C from './styles';

const NavigationBar = () => {
  return (
    <C.Container>
      <C.NavBar>
        <C.Ul>
          {
            navbar.map(item => {
              return (
                <C.Li
                  key={item.id}
                  id={item.id}
                >
                  <Link to={item.to}>
                    <C.Item>
                      <C.Icon>{<item.icon />}</C.Icon>
                      <C.Title>{item.name}</C.Title>
                    </C.Item>
                  </Link>
                </C.Li>
              );               
            })
          }
        </C.Ul>
      </C.NavBar>
    </C.Container>
  );
};

export default NavigationBar;
