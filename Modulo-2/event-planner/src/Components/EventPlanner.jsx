import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
                <p>Planifica y organiza tus eventos sin esfuerzo con Event Planner. Desde fiestas de cumpleaños hasta reuniones corporativas, te tenemos cubierto.</p>
                <button className="get-started-button">Comenzar</button>
            </section>
            <section className="events_categories">
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby showers</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exhibitions</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>
            <section className="features">
            <h2>Features</h2>
            <ul>
                <li>Easy event creation and management</li>
                <li>Customizable event templates</li>
                <li>Guest list management</li>
                <li>Real-time collaboration</li>
                <li>Reminders and notifications</li>
            </ul>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
            </section>
            <section className="contact">
                <h2>Contáctanos</h2>
                <form action="">
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo Electrónico" />
                    <textarea placeholder="Mensaje"></textarea>
                    <button className="submit-button">Enviar</button>
                </form>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default EventPlanner;
