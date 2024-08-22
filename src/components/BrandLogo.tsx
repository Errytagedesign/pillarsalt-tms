import { Link } from 'react-router-dom';
import Logo from '@/assets/pillarsalt_logo.png';

function BrandLogo({ className }: { className?: string }) {
  return (
    <Link to='/' className={className}>
      <figure>
        {' '}
        <img src={Logo} alt='Pillarsalt Logo' />
      </figure>
    </Link>
  );
}

export default BrandLogo;
