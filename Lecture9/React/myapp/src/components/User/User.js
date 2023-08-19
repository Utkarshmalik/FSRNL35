

function User(props){
    const user =  props.userData;
    return  <div className="user"> 
    <h3> {user.name} </h3>
    <h4>  {user.email} </h4>
    <p>  {user.address.street  + ", " + user.address.city} </p>
    </div>
}

export default User;
