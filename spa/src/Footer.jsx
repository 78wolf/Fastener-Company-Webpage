import './Footer.css';
import './footerMenu'
import footerMenu from './footerMenu';

function Footer({setPage}) {

  const list = footerMenu.map(item => {
    return (
      <li className="footer__item" key={item.name}>
        <a className='footer__link' href={item.path} onClick={
          (e) => {
            e.preventDefault();
            setPage(item.name);
          }
        }>{item.name}
        </a>
      </li>
    );
  });

  return (
    
    <footer className="footer">
      <ul className='footer__list'>
        {list}
      </ul>
      <p className='footer__text'>2023 Universal-L Fastener Co. Ltd All Right Reserved</p>
    </footer>
  )
}

export default Footer;

