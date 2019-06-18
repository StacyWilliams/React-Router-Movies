import React from 'react';
import { Link, NavLink} from 'react-router-dom';


export default props => {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} 
          className="saved-movie"
          activeClassName="active-saved-movie">{movie.title}</NavLink>
        ))}
        <div className="home-button">
        <Link to ='/'>Home</Link>
      </div>
      </div>
    );
  }

