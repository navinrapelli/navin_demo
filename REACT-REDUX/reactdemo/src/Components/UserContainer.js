import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../redux'


function UserContainer({userData,fetchUser}) {
    useEffect(()=>{
        fetchUser()
    },[])
    return userData.loading ? (
        <h2>Loading</h2>
     
    ):userData.error?(
        <h2>{userData.error}</h2>
    ):(
        <div>
            <h2>User List
            </h2>
            <div>
                {
                    userData && userData.users &&userData.users.map(user=><p>user.name</p>)
                }
            </div>
        </div>
    )
}


const mapStateToprop= state =>{

    return{
   
       userData:state.user
    }
   
   
   }
   
   const mapDispatchToprop=dispatch=>{
   
       return{
         
           fetchUser:()=> dispatch(fetchUser())
          
       }
      
      
      }

export default connect(mapStateToprop,mapDispatchToprop) (UserContainer)
