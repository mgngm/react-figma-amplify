import React, { useState, useEffect, useContext } from 'react'
import { Storage } from 'aws-amplify';
import S3ListComponent from './S3ListComponent';
import { Auth as UserAuth } from '../contexts/Auth';

function StorageComponent() {

    const [items, setItems] = useState([])

    const user = useContext(UserAuth)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { results } = await Storage.list('', { pageSize: 10 });

                const promises = results.map(async (itm) => {
                    const url = await Storage.get(itm.key, { expires: 60 * 60 * 24, level: 'public', cacheControl: 'no-cache' });

                    return {
                        etag: itm.eTag,
                        key: itm.key,
                        size: itm.size,
                        url
                    };
                });

                const newItems = await Promise.all(promises);
                setItems([...newItems]);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);


    async function onChange(e) {
        const file = e.target.files[0];
        try {
            await Storage.put(file.name, file, {
                contentType: "image/png", // contentType is optional
                cacheControl: 'no-cache',
                progressCallback(progress) {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                },
            });
        } catch (error) {
            console.log("Error uploading file: ", error);
        }
    }

    return (
        <div className="flex flex-col items-center gap-8 w-full relative pt-24">
            <div className="flex flex-col gap-10 sm:gap-14 items-center">
                <div className="md:text-center px-2 w-80 sm:w-fit">
                    <h2 className="text-5xl font-bold text-yellow-400">Storage Component</h2>
                    <h2 className="text-1xl pt-4 dark:text-white">Storage with Amplify</h2>
                </div>

                {items.length > 0 ? (<S3ListComponent s3List={items} />) : <h2 className="text-1xl pt-4 dark:text-white">No Items in S3 Bucket</h2>}

                {user.length > 0 ? (
                    <div className="flex flex-col gap-4 items-center">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                        <input onChange={onChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                    </div>
                ) : (
                    <h2 className="text-1xl pt-4 dark:text-white">Sign in to upload a file</h2>
                )}

            </div>
        </div>
    )
}

export default StorageComponent