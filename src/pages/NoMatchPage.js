import {Link} from "react-router-dom";
import noMatchStyles from './NoMatchPage.module.scss'

const NoMatchPage = () => {
  return (
    <div>
      <h1 className={noMatchStyles.title}>
        404
      </h1>
      <h2 className={noMatchStyles.subtitle}>
        Whoops! <br/>
        We can't find the page you're looking for.
        <div>
          <Link to='/'>
            Try our homepage.
          </Link>
        </div>
      </h2>
    </div>
  );
};

export default NoMatchPage;
