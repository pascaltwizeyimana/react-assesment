import React from 'react';
function Exams() {
    return (
        <div className='bg-gray-200 h-screen flex items-center justify-center'>
            <h1>Exams</h1>
                 <input type="text" placeholder='enter your name'
                 className='border border-gray-300 rounded-md p-2 mb-4' />
            <button onsubmit="<input>" className='bg-blue-500 text-white p-2 rounded-md'>OK</button>
          <p>my name is:{onsubmit}</p>
        </div>
    );
}

export default Exams;