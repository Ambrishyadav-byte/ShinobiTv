import { useState, useEffect } from 'react';

const useFetchAnime = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                console.log("API Response:", result); // Debugging log

                if (result.success) {
                    setData(result.data); // ✅ Fix: Set 'data' as 'result.data'
                } else {
                    console.error("API Error: Success is false");
                }
            } catch (error) {
                console.error("Error fetching anime data:", error);
            }
        };

        fetchData();
    }, [url]);

    return data;
};

export default useFetchAnime;
