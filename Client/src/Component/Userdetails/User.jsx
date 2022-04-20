import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Usertabel from './Usertabel.jsx'
import Pagination from './Pagination'
import Paper from '@mui/material/Paper';
import ErrorBoundry from '../ErrorBoundry'
export default function User() {

  const [posts, setPosts] = useState([]);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {

      const res = await axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/userdetails`);
      setPosts(res.data.data.user);
      
    };

    fetchPosts();
  }, [posts]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <Paper elevation={3}>
        <ErrorBoundry>
      <Usertabel post={currentPosts}/>
      </ErrorBoundry>
      <ErrorBoundry>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      </ErrorBoundry>
      </Paper>
    </div>
  )
}
