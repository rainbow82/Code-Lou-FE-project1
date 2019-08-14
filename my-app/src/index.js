import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//navigation component
class Navigation extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li>Nav 1</li>
                        <li>Nav 2</li>
                        <li>Nav 3</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <Navigation />
            </div>
            
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
    
)