import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ServerName} from "../../../utils/branding";

export class MainContent extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>{ServerName}</h1>
            </div>
        );
    }
}