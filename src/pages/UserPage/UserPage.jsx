import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { userInfo } from '../../action';
import './UserPage.scss'
import Account from '../../components/Account/Account';
import { accounts } from '../../services/accounts'; //mocked account data

export default function UserPage() {
    const user = useSelector((state) => state.user); //get user state
    const dispatch = useDispatch()
    
    const [firstName, setfirstName] = useState('');
	const [lastName, setlastName] = useState('');

    const handleInputChange = (event) => {
        event.target.id === 'firstName' ? setfirstName(event.target.value) : setlastName(event.target.value) 
    }
    

    //get user info
    useEffect(() => {
        dispatch(userInfo());
    },[dispatch]);

    if(!user.logged){return <Redirect to='/'/>}

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
                
                <form >
                    <div className="input">
                        <input className="input-edit" type="text" id="firstName" placeholder={user.firstName}  value={firstName} onChange={handleInputChange}/>
                        <input className="input-edit" type="text" id="lastName" placeholder={user.lastName} value={lastName} onChange={handleInputChange}/>
                    </div>
                    <div className="buttons">
                        <button className="edit-button form-button">Save</button>
                        <button className="edit-button form-button">Cancel</button>
                    </div>
                </form>

                <button className="edit-button">Edit Name</button>
                
                
            </div>

            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account,index) =>
                <Account key={index} title={account.title} amount={account.amount} description={account.description} />
            )};
        </main>
    )
}
