import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [sentiment, setSentiment] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSentiment('');

        try {
            const response = await axios.post('http://localhost:5000/api/feedback/submit', {
                name,
                email,
                feedback,
            });
            console.log('Feedback submitted:', response.data);
            setSentiment(response.data.sentiment);
            setLoading(false);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            setError('There was an error submitting your feedback.');
            setLoading(false);
        }
    };

    if (error) {
        return (
            <div className="mt-4 p-2 bg-red-500 text-white rounded-md">
                {error}
            </div>
        )
    }

    else if (sentiment) {
        return (
            <div
                className={`font-medium text-xl mt-4 p-2 rounded-md flex-1 text-white text-center flex items-center justify-center  ${sentiment.toLowerCase() === 'positive'
                    ? 'bg-green-500'
                    : sentiment.toLowerCase() === 'neutral'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
            >
                Sentiment : {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
            </div>
        )
    }

    else return (



        <div className="flex-1 p-8 shadow-lg rounded-xl text-left mt-8 md:mt-0">
            <form onSubmit={handleSubmit}>

                <div className='flex gap-5 mb-5'>
                    <div className="">
                        <label className="font-medium text-black">Name</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 font-light text-sm rounded-full mt-3 shadow-md border border-gray-300 text-start   focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className="">
                        <label className="font-medium text-black">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 font-light text-sm rounded-full mt-3 shadow-md border border-gray-300 text-start focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            required
                        />
                    </div>
                </div>


                <div className="mb-4">
                    <label className="text-black font-medium">Feedback</label>
                    <textarea
                        className="w-full px-3 py-2 font-light text-sm rounded-md min-h-24 mt-3 shadow-md border border-gray-300 text-start focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Enter your feedback"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </form>
        </div>
    );

};

export default FeedbackForm;
