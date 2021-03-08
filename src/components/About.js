import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className="about">
            <h4 className="about-title">Version 1.0.0</h4>
            <p className="about-text">This project was created as a way to familiarize myself with the React framework. It implements hooks, routing, and a mock back-end with JSON Server.
                The material was learned from Traversy Media and built upon further.
            </p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
