import UnAuthorised from "../Components/common/UnAuthorised/unauthorised";
import Unauthenticated from "../Components/common/Unauthenticated/unauthenticated";


function AuthHoc(props){

    const pageId = props.id;
    const isAdmin = localStorage.getItem("userTypes")==="ADMIN";

    //check whether the user and authenticated or not

    let isAuthenticated = localStorage.getItem("userId") && localStorage.getItem("token");

    if(!isAuthenticated){
        return <Unauthenticated/>
    }

    if(pageId==="createMovie" && !isAdmin){
        return <UnAuthorised/>
    }

    return props.children;
}

export default AuthHoc;