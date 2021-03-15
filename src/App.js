import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import USERS from './users'
import Home from './components/home/Home';
import UserList from './components/user-list/user-list';
import PrivateRoute from './routes/PrivateRoutes';
import NotFound from './components/NotFound';
import About from './components/about/About';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import Forgot from './components/login/Forgot'
import { isLoggedIn } from './utils/isAuth';
import Logout from './components/logout/Logout';
import Nav from './components/Nav';

class App extends Component {
	constructor(props) {
		super(props);
		// posible values "available/busy and on-campus/home-office"
		this.state = {
			myUser: { ...USERS[0] },
			users: [...USERS ],
      redirect: null
		};
	}

  componentDidMount(){
    const isAuth = isLoggedIn();
    let links = isAuth ? ['home', 'user', 'dashboard', 'logout'] : undefined;
    this.setState({
      isAuth,
      links
    })
  }

	updateUserPlace = (onCampus) => {
		const place = onCampus ? 'on-campus' : 'home-office';
		this.setState((state) => {
			let newList = [...state.users];
			newList[0].place = place;
			return {
				myUser: {
					...state.myUser,
					place,
				},
				list: newList,
			};
		});
	};

	updateUserStatus = (available) => {
		const status = available ? 'available' : 'busy';
		this.setState((state) => {
			let newList = [...state.users];
			newList[0].status = status;
			return {
				myUser: {
					...state.myUser,
					status,
				},
				list: newList,
			};
		});
	};

  updateLoginForm = (newFormType) =>{
    this.setState((state) => {
      return {
        ...state,
        formType: newFormType
      }
    })
  }


  //HandleLogIn and handleLogOut is used to render and set state for what nav is going to look like and if the user is authenticated.
  handleLogIn = () => {
    localStorage.setItem('userAuth', JSON.stringify(true));
    const isAuth = isLoggedIn();
    this.setState({
      isAuth,
      redirect: '/user',
      links: ['home', 'user', 'dashboard', 'logout']
    });
  }

  handleLogOut = () => {
    localStorage.removeItem('userAuth');
    const isAuth = isLoggedIn();
    this.setState({
      isAuth,
      redirect: false,
      links: undefined
    })
  }

	render() {
		return (
			<div className="App">
       <Router>
				<header className='App-header'>
          <Nav links={this.state.links}/>
        </header>
        <main>
         <Switch>
           <Route path="/dashboard">
             <UserList users={this.state.users} />
           </Route>
           <PrivateRoute exact path='/user'>
            <Home user={this.state.myUser} onChange={{place: this.updateUserPlace, status: this.updateUserStatus}} />
           </PrivateRoute>
           <Route path='/login'>
             <Login useFormType='login' redirect={this.state.redirect} isAuth={this.state.isAuth} handleLogIn={this.handleLogIn}/>
           </Route>
           <Route path='/signup'>
             <SignUp useFormType='signup'/>
           </Route>
           <Route path='/forgot'>
             <Forgot useFormType='forgot'/>
           </Route>
           <Route path='/logout'>
            <Logout isAuth={this.state.isAuth} handleLogOut={this.handleLogOut} />
           </Route>
           <Route path='/'>
             <About/>
           </Route>
           <Route>
             <NotFound />
           </Route>
         </Switch>
        </main>
       </Router>
			</div>
		);
	}
}

export default App;
