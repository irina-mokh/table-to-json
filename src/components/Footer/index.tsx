import GithubIcon from '../../assets/icons/gh.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <a className='gh' href='https://github.com/irina-mokh' target='_blank' rel='noreferrer'>
          <img src={GithubIcon} width={26} className='gh__icon'></img>
          <span className='gh__text'>irina-mokh</span>
        </a>
        <span className='footer__text'>2023</span>
      </div>
    </footer>
  );
};
