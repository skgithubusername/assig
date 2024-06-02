import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <form className=" flex items-center justify-center flex-col">
        <div className="  bg-slate-200 mt-44 rounded border-2 border-gray-500">
          <label className=" p-2 dark:text-black">
            Username:
            <input
              className="bg-slate-200  p-2 outline-none   w-auto"
              type="text"
              placeholder="username"
            />
          </label>
        </div>
        <div className="  bg-slate-200 mt-4 rounded border-2 border-gray-500">
          <label className="dark:text-black p-2">
            Password:
            <input
              className="bg-slate-200  p-2 outline-none   w-auto"
              type="text"
              placeholder="password"
            />
          </label>
        </div>
        <Link to='/sale'  className=' mt-4   w-[288px] rounded text-center bg-blue-400 p-2'>Login</Link>
      </form>
    </div>
  );
};

export default Login;














// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'dummy' && password === 'password') {
//       onLogin();
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-slate-200 p-6 rounded shadow-md">
//         <div className="mb-4">
//           <label className="block text-black mb-2">Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="bg-slate-200 p-2 border border-gray-500 w-full"
//             placeholder="username"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-black mb-2">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="bg-slate-200 p-2 border border-gray-500 w-full"
//             placeholder="password"
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-400 p-2 rounded text-white">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
