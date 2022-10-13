import React from 'react'

export default function UserPage() {
  return (
    <div  className='w-full min-h-screen'>

        <h1 className='text-4xl font-medium mb-6 text-sky-900'>User Page</h1>
        <table className='w-full'>
            <thead className='h-12 bg-white'>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>website</th>
                    <th>action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>rhn</td>
                    <td>rhn@gmail.com</td>
                    <td>08989011101</td>
                    <td>rhnrafif.site</td>
                    <td>
                        <div>
                            <button>edit</button>
                            <button>view</button>
                            <button>delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}
