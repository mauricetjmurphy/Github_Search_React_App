import React, { useEffect, Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/GithubContext';

function User({ match }) {
 const githubContext = useContext(GithubContext);

 console.log(githubContext);

 const { user, loading, getUser, getUserRepos, repos } = githubContext;

 useEffect(() => {
  getUser(match.params.login);
  getUserRepos(match.params.login);
  //eslint-disable-next-line
 }, []);

 const {
  name,
  avatar_url,
  location,
  bio,
  blog,
  company,
  login,
  html_url,
  followers,
  following,
  public_repos,
  public_gists,
  hirable,
 } = user;

 if (loading) return <Spinner />;

 return (
  <Fragment>
   <Link to='/' className='btn bnt-light'>
    Back to search
   </Link>
   Hirable:{' '}
   {hirable ? (
    <i className='fas fa-check text-success' />
   ) : (
    <i className='fas fa-times-circle text-danger' />
   )}
   <div className='card grid-2'>
    <div className='all-center'>
     <img
      src={avatar_url}
      className='round-img'
      style={{ width: '150px' }}
      alt=''
     />
     <h1>{name}</h1>
     <p>Location: {location}</p>
    </div>
    <div>
     {bio && (
      <Fragment>
       <h3>Bio</h3>
       <p>{bio}</p>
      </Fragment>
     )}
     <a href={html_url} className='btn btn-dark my-1'>
      Visit Github profile
     </a>
     <ul>
      <li>
       {login && (
        <Fragment>
         <strong>Username: </strong> {login}
        </Fragment>
       )}
      </li>
      <li>
       {company && (
        <Fragment>
         <strong>Company: </strong> {login}
        </Fragment>
       )}
      </li>
      <li>
       {blog && (
        <Fragment>
         <strong>Website: </strong> {login}
        </Fragment>
       )}
      </li>
     </ul>
    </div>
   </div>
   <div className='card text-center'>
    <div className='badge badge-primary'>Followers: {followers}</div>
    <div className='badge badge-success'>Following: {following}</div>
    <div className='badge badge-light'>Public Repos: {public_repos}</div>
    <div className='badge badge-dark'>Public Gists: {public_gists}</div>
   </div>
   <Repos repos={repos} />
  </Fragment>
 );
}

export default User;
