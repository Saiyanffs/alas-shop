import './style.scss';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <main id="page-not-found">
      <div className="wrapper">
        <h1>Page Not Found</h1>
        <Link to='/home'>Return to safety</Link>
      </div>
    </main>
  );
}

export default PageNotFound;