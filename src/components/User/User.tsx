import {useActions} from "../../hooks/useActions.ts";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";

type UserPropsType = {
  userId: number
}

const User = ({userId}: UserPropsType) => {
  const {isLoading, error, user} = useTypedSelector(state => state.user);
  const {getUserById} = useActions();

  return (
    <div>
      <button onClick={() => getUserById(userId)}>Get user</button>
      {isLoading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
        user?.name ? <h2>User: {user.name}</h2> :
        <h1>User not found</h1>
      }
    </div>
  )
}
export default User
