import React from 'react'

function CvTable({ data, setCurrentShownUser }) {
    



  return (
    <table style={{minWidth: "66%"}} className=" divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Co-Sin</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {data.map(item => (
      <tr key={item.id} onClick={() => setCurrentShownUser(data.find(cur => cur.id === item.id))}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.phoneNr}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.verified}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.cosineSimilarity}</td>
      </tr>
    ))}
  </tbody>
</table>
  );
}

export default CvTable