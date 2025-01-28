import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'

function useAvatar({
  username = ""
}) {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchData = async () => {
      // const api_url = `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${username}`
      // const api_url = `https://api.dicebear.com/9.x/avataaars/svg?mouth=smile,seed=${username}`
      // const api_url = `https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=${username}`
      const api_url = `https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Felix`
      try {
        const response = await fetch(api_url); // Fetch the data
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const jsonData = await response.json(); // Parse JSON
        setData(jsonData); // Update state with parsed data
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { loading, error, data };
}
export default useAvatar;

useAvatar.propTypes = {
  username: PropTypes.string
}