// Import necessary modules
import { promises as fsPromises } from 'fs';
import { join, parse } from 'path';
import grayMatter from 'gray-matter';
import { NextResponse } from 'next/server';

// Function to get all posts
async function getAllPosts() {
  const postsDirectory = join(process.cwd(), 'src', 'posts');
  const fileNames = await fsPromises.readdir(postsDirectory);

  const posts = await Promise.all(fileNames.map(async (fileName) => {
    const filePath = join(postsDirectory, fileName);
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    const { data, content } = grayMatter(fileContent);

    const postId = parse(fileName).name;

    return {
      id: postId,
      ...data,
      content,
    };
  }));

  return posts;
}

// Function to get a specific post by ID
async function getPostById(id) {
  const allPosts = await getAllPosts();
  return allPosts.find(post => post.id === id);
}

// Main GET request handler

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (id) {
      // If 'id' parameter is provided, fetch a specific post
      const post = await getPostById(id);

      if (post) {
        return NextResponse.json({ post });
      } else {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
    } else {
      // If 'id' parameter is not provided, fetch all posts
      const posts = await getAllPosts();
      return NextResponse.json({ posts });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error processing the request' }, { status: 500 });
  }
}
