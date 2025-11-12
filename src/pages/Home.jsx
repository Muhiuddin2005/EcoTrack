import { NavLink, useLoaderData } from 'react-router';
import Challenge from '../components/challenge';

const Home = () => {
    const challenges=useLoaderData();
    return (
    <>
    

    <div>
    <NavLink to='/logIn'>
          Log in
        </NavLink>
      </div>
        <div>
          <NavLink to='signUp'>
            Register
          </NavLink>
        </div>
    <div className="grid grid-cols-3 gap-3">
        {challenges.map((challenge) => (
          <Challenge key={challenge._id} challenge={challenge} />
        ))}
      </div>
      </>
        
    );
};

export default Home;