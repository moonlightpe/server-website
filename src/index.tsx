import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/mainpage/navigation/navigation";
import {MainContent} from "./components/mainpage/main/mainContent";

class Index extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <header>
                    <Navigation />
                </header>
                <main>
                    <MainContent />
                </main>
            </div>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);