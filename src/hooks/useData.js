import { useState, useEffect } from 'react';

function useData() {
  const [userData, setUserData] = useState([]);
  const [userDataLoading, setUserDataLoading] = useState(true);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setUserDataLoading(false);
      })
      .catch((error) => {
        setUserError(error.message);
        setUserDataLoading(false);
      });
  }, []);

  return { userData, userDataLoading, userError };
}

export default useData;