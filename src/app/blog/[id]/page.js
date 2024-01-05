'use client'

import { useEffect, useState } from 'react';
import Article from '../../../components/pages/blog/Article';


export default function SinglePost({params}) {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  const [post, setPost] = useState(null);

  const fetchPost = async (id) => {
    const url = `${origin}/api/postsData/${id}`;
    
    try {
      const res = await fetch(url);
      const { post } = await res.json();
      post && setPost(post);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  useEffect(() => {
    fetchPost(params.id);
  }, [fetchPost, params.id]);
  
  
  return (
    post && <Article data={post}></Article>
  )
}