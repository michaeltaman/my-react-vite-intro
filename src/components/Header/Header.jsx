import { useState , useEffect} from 'react'
import logo from '/vite.svg'
import { styled } from 'styled-components'
//import './Header.css'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #61dafbaa;
  `

function Header() {
    const [currentTime, setCurrentTime] = useState(new Date());

    //setInterval(() => {setCurrentTime(new Date());}, 1000);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, []);

    const name = 'React Logo';

    return (
      <HeaderContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt={name} style={{ marginRight: '20px' }} />
          <h3 style={{paddingTop: '15px'}}>by Michael Trembler</h3>
        </div>
        <span>TIME NOW : {currentTime.toLocaleTimeString()}</span>
      </HeaderContainer>
    )
}

export default Header