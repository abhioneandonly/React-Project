import React from 'react';
import './Blog.css'; // External CSS import

function Blog() {
  const blogStyle = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '600px',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: '24px',
      color: '#333',
    },
    author: {
      fontStyle: 'italic',
      color: '#555',
    },
    description: {
      marginTop: '10px',
      lineHeight: '1.5',
      color: '#666',
    }
  };

  const title = "Gitanjali";
  const author = "Rabindranath Tagore";
  const description = "Gitanjali, meaning Song Offerings, is a collection of 103 poems by Rabindranath Tagore, initially written in Bengali and later translated into English, which earned Tagore the Nobel Prize in Literature in 1913. ";
  const image = "https://bookwormsdenn.com/cdn/shop/files/cropped1_page-0033.jpg?v=1726919510";

  return (
    <div style={blogStyle.container} className="blog-container">
      <h2 style={blogStyle.title}>{title}</h2>
      <p style={blogStyle.author}>By {author}</p>
      <img src={image} alt="Blog Thumbnail" className="blog-image" />
      <p style={blogStyle.description}>{description}</p>
    </div>
  );
}

export default Blog;
