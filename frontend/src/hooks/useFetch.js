import { useState, useEffect } from "react";

// Custom hook for fetching data from a URL
const useFetch = (url) => {
  // State variables for storing data, error, and loading status
  const [data, setData] = useState([]); // Initially empty array
  const [error, setError] = useState(null); // Initially null
  const [loading, setLoading] = useState(false); // Initially false

  // Effect hook to fetch data from the provided URL
  useEffect(() => {
    // Function to fetch data asynchronously
    const fetchData = async () => {
      setLoading(true); // Set loading state to true when fetching starts

      try {
        // Fetch data from the provided URL
        const res = await fetch(url);

        // Check if response is successful
        if (!res.ok) {
          // If response is not ok, set error state
          setError("Failed to fetch");
        }

        // Convert response to JSON format
        const result = await res.json();

        // Set data state with the fetched data
        setData(result.data);

        // Set loading state to false when fetching is complete
        setLoading(false);
      } catch (error) {
        // If an error occurs during fetching, set error state
        setError(error.message);

        // Set loading state to false when fetching is complete
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts or when the URL changes
    fetchData();
  }, [url]); // Dependency array containing the URL

  // Return the data, error, and loading status
  return {
    data,
    error,
    loading,
  };
};

// Export the useFetch custom hook
export default useFetch;
