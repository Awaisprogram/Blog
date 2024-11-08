'use client'

import { useState } from 'react';
import Button from './Button';

interface CommentItem {
  name: string;
  comment: string;
  date: string;  
}

const Comment = () => {
  const [commentsList, setCommentsList] = useState<CommentItem[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      const currentDate = new Date().toLocaleDateString();  
      const newComment: CommentItem = { name, comment, date: currentDate };  
      setCommentsList([...commentsList, newComment]); 
      setName('');  
      setComment(''); 
    }
  };

  return (
    <div className="lg:px-40 px-10 py-10">
      <h1 className="text-4xl font-semibold mb-4 text-color">Leave a Comment</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-full"
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-2xl h-32"
        ></textarea>
        <Button text="Submit" />
      </form>

      {/* Display List of Comments */}
      <div className="space-y-4 mt-10">
        <h1 className="text-2xl font-bold">Comments</h1>

        {commentsList.length > 0 ? (
          commentsList.map((commentItem, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded shadow-sm space-y-6">
              <div className='flex items-center justify-between'>
              <h3 className="font-bold text-2xl">
                {commentItem.name}
              </h3>
              <span className="text-gray-500 text-sm">{commentItem.date}</span>
              </div>
              <p className="font-semibold text-gray-700">{commentItem.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">
            <i>No comments yet. Be the first to comment!</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default Comment;
