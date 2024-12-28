'use client';  // Add this line at the top to mark this as a Client Component

import { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  comment: string;
}

export default function CommentSection() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !comment) {
      alert('Please fill out both fields!');
      return;
    }

    const newComment: Comment = {
      name,
      comment,
      id: Date.now(),
    };

    setComments([newComment, ...comments]);
    setName('');
    setComment('');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full text-left mb-6  mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Leave a Comment</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 text-sm font-semibold mb-2">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            rows={5}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Comment
        </button>
      </form>

      {comments.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments:</h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border-t pt-4">
                <p className="text-gray-700 font-semibold">{comment.name}</p>
                <p className="text-gray-600">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}