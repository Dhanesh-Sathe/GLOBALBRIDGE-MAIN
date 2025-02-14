import React from 'react';
import '../css/Home.css';

const UserDashboard = () => {
  return (
    <div>
      {/* <div class="bg-white shadow-md rounded-lg p-6">
        <img class="w-24 h-24 rounded-full mx-auto" src="./images/user-profile.png" alt="Profile" />
        <h2 class="text-2xl font-bold text-center mt-4">John Doe</h2>
        <p class="text-center text-gray-500">john.doe@example.com</p>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 block mx-auto hover:bg-blue-700">Edit Profile</button>
      </div>
      <div class="mt-8">
  <h3 class="text-xl font-semibold mb-4">Your Registered Companies</h3>
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h4 class="text-lg font-bold">Company Name</h4>
      <p class="text-sm">Country: USA</p>
      <p class="text-sm">Business Type: Tech</p>
      <p class="text-sm">Registered: Jan 2023</p>
      <a href="/company/1/dashboard" class="text-blue-500 hover:text-blue-700">Go to Company Dashboard</a>
    </div>
  </div>
</div>
<div class="bg-white mt-6 p-4 rounded-lg shadow-md">
  <h3 class="text-xl font-semibold">Recent Activity</h3>
  <ul class="mt-4 space-y-2">
    <li class="flex justify-between text-sm">
      <span>Updated profile picture</span>
      <span class="text-gray-400">2 hours ago</span>
    </li>
  </ul>
</div>

<div class="bg-gray-100 mt-8 p-4 rounded-lg shadow-md">
  <h3 class="text-xl font-semibold">Settings</h3>
  <button class="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">Delete Account</button>
</div> */}


<div class="flex h-full">
    {/* <!-- Sidebar --> */}
    <div class="w-64 bg-gray-900 text-white flex flex-col h-screen">
        {/* <!-- Profile Section --> */}
        <div class="p-6 bg-gray-600 flex flex-col items-center">
            <img src="./images/user-profile.png" alt="Profile" class="w-30 h-24 rounded-full mb-4" />
            <h2 class="text-xl font-semibold">Dhanesh Sathe</h2>
            <p class="text-gray-400 text-sm">dds.satana@gmail.com</p>
        </div>
        
        {/* <!-- Menu Options --> */}
        <nav class="flex flex-col p-4 space-y-4">
            <a href="/" class="flex items-center text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md">
                Profile
            </a>
            <a href="/" class="flex items-center text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md">
                Edit Profile
            </a>
            <a href="/" class="flex items-center text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md">
                Change Password
            </a>
            <a href="/" class="flex items-center text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md">
                Settings
            </a>
            <a href="/" class="flex items-center text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md">
                Notifications
            </a>
            <a href="/" class="flex items-center text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md">
                Messages
            </a>
            <a href="/" class="flex items-center text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md">
                Logout
            </a>
        </nav>
    </div>

    {/* <!-- Main Content --> */}
    <div class="flex-grow p-6 bg-gray-100 h-screen overflow-y-auto">
        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-xl font-bold mb-2">Welcome back, Dhanesh!</h2>
            <p class="text-gray-700">Here's an overview of your activity on the platform:</p>
            <div class="grid grid-cols-3 gap-4 mt-4">
                <div class="p-4 bg-blue-100 text-center rounded-md">
                    <p class="text-lg font-bold">3</p>
                    <p class="text-gray-600">Companies Registered</p>
                </div>
                <div class="p-4 bg-green-100 text-center rounded-md">
                    <p class="text-lg font-bold">5</p>
                    <p class="text-gray-600">New Inquiries</p>
                </div>
                <div class="p-4 bg-yellow-100 text-center rounded-md">
                    <p class="text-lg font-bold">2</p>
                    <p class="text-gray-600">Active Deals</p>
                </div>
            </div>
        </div>

        {/* <!-- Recent Activity --> */}
        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-xl font-bold mb-4">Recent Activity</h2>
            <ul>
                <li class="mb-2">✅ You responded to an inquiry from **XYZ Corporation**</li>
                <li class="mb-2">🕒 **ABC Ltd.** requested more information about your products</li>
                <li>✉️ New message from **Global Exports Ltd.**</li>
            </ul>
            <a href="/activity" class="text-blue-500 hover:underline">View All Activity</a>
        </div>

        {/* <!-- Your Companies --> */}
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-4">Your Companies</h2>
            <table class="min-w-full bg-white">
                <thead>
                    <tr class="w-full text-left bg-gray-200 p-4">
                        <th class="p-2">Company Name</th>
                        <th class="p-2">Country</th>
                        <th class="p-2">Business Type</th>
                        <th class="p-2">Status</th>
                        <th class="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-2">XYZ Corporation</td>
                        <td class="p-2">USA</td>
                        <td class="p-2">Importer</td>
                        <td class="p-2 text-green-500">Verified</td>
                        <td class="p-2">
                            <a href="/" class="text-blue-500 hover:underline">Edit</a> | 
                            <a href="/" class="text-blue-500 hover:underline">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* <!-- Your Tasks --> */}
        <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 class="text-xl font-bold mb-4">Your Tasks</h2>
            <ul>
                <li class="flex items-center justify-between mb-2">
                    <span>Verify company documents for ABC Ltd.</span>
                    <input type="checkbox" />
                </li>
                <li class="flex items-center justify-between mb-2">
                    <span>Respond to message from Global Exports</span>
                    <input type="checkbox" />
                </li>
                <li class="flex items-center justify-between">
                    <span>Update profile information</span>
                    <input type="checkbox" />
                </li>
            </ul>
        </div>

        {/* <!-- Messages --> */}
        <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 class="text-xl font-bold mb-4">Messages</h2>
            <ul>
                <li class="mb-2">New message from **Global Traders**</li>
                <li>Message from **ABC Ltd.** asking about your product catalog</li>
            </ul>
            <a href="/messages" class="text-blue-500 hover:underline">Go to Messages</a>
        </div>
    </div>
</div>

  
    </div>
  )
}

export default UserDashboard
