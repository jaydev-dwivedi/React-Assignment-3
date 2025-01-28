import UserCard from './Components/UserCard';
import useData from './hooks/useData';

function App() {
  const { userDataLoading, userError, userData } = useData();

  if (userDataLoading) return <h1>Loading...</h1>;
  if (userError) return <h1>Error: {userError}</h1>;

  return (
    <main id="main-container" className="w-full flex flex-wrap md:justify-evenly xl:justify-start gap-7 p-3">
      {userData?.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          phone={user.phone}
          website={user.website}
        />
      ))}
    </main>
  );
}

export default App;
