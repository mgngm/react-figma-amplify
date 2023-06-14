import React from 'react'

function S3ListComponent({ s3List }) {

    return (

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            eTag
                        </th>
                        <th scope="col" className="px-6 py-3">
                            File Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Size
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Operations
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {s3List.map((s3Items, idx) => (
                        <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {s3Items.etag}
                            </th>
                            <td className="px-6 py-4">
                                {s3Items.key}
                            </td>
                            <td className="px-6 py-4">
                                {s3Items.size}
                            </td>
                            <td className="px-6 py-4">
                                <a href={s3Items.url} target="_blank" rel="noreferrer" className='text-white font-medium px-5 py-2.5 mr-2 mb-2 text-sm bg-transparent border border-white-900 rounded-lg'>
                                    View
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default S3ListComponent