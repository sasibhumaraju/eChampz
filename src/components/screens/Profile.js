import { useSelector } from "react-redux";
import DateTimeFormatter from "../../util/DateTimeFormatter";
import { TbGenderBigender } from 'react-icons/tb';
import { FaBirthdayCake, FaGenderless, FaUserEdit } from 'react-icons/fa';
import {HiOutlineLogout} from 'react-icons/hi'
import { useNavigate } from "react-router-dom";

function Profile () {

    const navigate = useNavigate();

    const user = useSelector((state)=>{
        return state.user.data;
      
    })

    return ( <div className="profile"> 
            <div className="profile-container">
                
                <div className="profile-head" >
                    <div className="profile-pic">
                        
                    </div>
                    <div className="profile-head-body">
                        <div className="profile-username"> {user.name}</div>
                        <div className="profile-email"> {user.email} </div>
                        
                    </div>
                    <div className="profile-toggle">
                        <div className="profile-edit-button" onClick={()=>{navigate('/dashboard/profile/edit')}}>  <FaUserEdit></FaUserEdit></div>
                    </div>
                    
                </div>

                <div className="profile-body">
                    <div className="profile-body-item"> <FaGenderless/> &nbsp; {user.gender}</div>
                    <div className="profile-body-item"> <FaBirthdayCake/> &nbsp;  {DateTimeFormatter(user.dob)  }</div>
                    {/* <div className="profile-body-item">{user.gender}</div> */}
                </div>

                <div className="profile-alert">
                    <div className="profile-body-item" ><HiOutlineLogout/> &nbsp; Logout</div>
                </div>
            </div>
      </div> );
}

export default Profile;