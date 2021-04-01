import React from 'react';
import './footer.style.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck";
import Button from 'react-bootstrap/Button';


const MyFooter = () => {
    return (
        <div id="footer">
            <div className="text-center footer-style py-2">
            © Arman Golmakan { new Date().getFullYear() }
            </div>

            
        </div>
    );
};

export default MyFooter;