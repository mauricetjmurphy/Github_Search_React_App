import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
 return (
  <div>
   <h3>
    <a href={repo.htl_url}>{repo.name}</a>
   </h3>
  </div>
 );
};

RepoItem.propTypes = {
 repo: PropTypes.object.isRequired,
};

export default RepoItem;
