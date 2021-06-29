import React from 'react';
import UserService from './Service/UserService';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Order List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Order Id</td>
                            <td> Order name</td>
                            <td> Order quantity</td>
                            <td> Order Price</td>
                        </tr>

                    </thead>                                            
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.orderName}</td>   
                                     <td> {user.quantity}</td>   
                                     <td> {user.price}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent