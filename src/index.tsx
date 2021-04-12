import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ServerName} from "./utils/branding";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/navigation";

class Index extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <header>
                    <Navigation />
                </header>
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