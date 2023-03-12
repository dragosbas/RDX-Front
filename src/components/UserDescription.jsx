function UserDescription({data}) {



  return (
    <table className="table-auto w-full mx-auto text-left">
  <tbody>
    <tr className='bg-gray-100'>
      <td className="border px-4 py-2 font-bold">Name</td>
      <td className="border px-4 py-2">{data.name}</td>
    </tr>
    <tr className='bg-gray-200'>
      <td className="border px-4 py-2 font-bold">Email</td>
      <td className="border px-4 py-2">{data.email}</td>
    </tr>
    <tr className='bg-gray-100'>
      <td className="border px-4 py-2 font-bold">Phone Number</td>
      <td className="border px-4 py-2">{data.phoneNr}</td>
    </tr>
    <tr className='bg-gray-200'>
      <td className="border px-4 py-2 font-bold">Text CV</td>
      <td className="border px-4 py-2">{data.textcv}</td>
    </tr>
  </tbody>
</table>
  );
}

export default UserDescription