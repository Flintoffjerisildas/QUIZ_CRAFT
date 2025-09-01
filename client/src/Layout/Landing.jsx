import React, { useState } from "react";
import "./LandingStyles.css";

function Landing() {
    const [menuActive, setMenuActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive((prev) => !prev);
    };

    const handleModeToggle = () => {
        setDarkMode((prev) => !prev);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <div>
            {/* Responsive Navbar */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="#Landing">Logo</a>
                </div>
                <button className="go-home-btn">
                    <a href="#home">Go to Home</a>
                </button>
                <button
                    className="mode-toggle"
                    id="mode-toggle"
                    aria-label="Toggle dark/light mode"
                    onClick={handleModeToggle}
                >
                    {darkMode ? "Light" : "Dark"}
                </button>
                <button
                    className={`navbar-toggle${menuActive ? " active" : ""}`}
                    id="navbar-toggle"
                    aria-label="Toggle navigation"
                    onClick={handleMenuToggle}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={`navbar-menu${menuActive ? " active" : ""}`} id="navbar-menu">
                    <li><a href="#create-quiz">Create Quiz</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Quick Join Quiz Section from Landing Page */}
            <main>
                <div className="joinCard">
                    <h2>Enter the code to join a live Quiz</h2>
                    <input type="text" placeholder="Enter code" />
                    <button>Join</button>
                </div>

                {/* Hero Section */}
                <div className="hero">
                    <div className="bubbles">
                        <span></span><span></span><span></span><span></span><span></span>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <h1>Welcome to the Quiz Platform</h1>
                    <p>Your one-stop solution for all quiz-related activities.</p>
                    <button><a href="#home">Go to Home</a></button>
                </div>

                {/* About Section */}
                <div className="about">
                    <h1>About us</h1>
                    <div className="ourMission">
                        <h3>OUR MISSION</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam adipisci corrupti repudiandae quo quisquam, hic magnam expedita, repellendus, a iusto eligendi recusandae eius? Qui dolores ratione corporis magni enim?
                        </p>
                    </div>
                    <div className="ourVision">
                        <h3>OUR VISION</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam adipisci corrupti repudiandae quo quisquam, hic magnam expedita, repellendus, a iusto eligendi recusandae eius? Qui dolores ratione corporis magni enim?
                        </p>
                    </div>
                    <div className="ourValues">
                        <h3>OUR VALUES</h3>
                        <ul>
                            <li>Integrity</li>
                            <li>Innovation</li>
                            <li>Collaboration</li>
                            <li>Excellence</li>
                            <li>Customer Focus</li>
                        </ul>
                    </div>

                    {/* Team Section */}
                    <div className="team-section">
                        <h3>OUR TEAM</h3>
                        <div className="team-cards">
                            <div className="team-card">
                                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="John Doe" />
                                <h4>John Doe</h4>
                                <p>Lead Developer</p>
                            </div>
                            <div className="team-card">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith" />
                                <h4>Jane Smith</h4>
                                <p>UI/UX Designer</p>
                            </div>
                            <div className="team-card">
                                <img src="https://randomuser.me/api/portraits/men/8.jpg" alt="Michael Lee" />
                                <h4>Michael Lee</h4>
                                <p>Quiz Master</p>
                            </div>
                            <div className="team-card">
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily Clark" />
                                <h4>Emily Clark</h4>
                                <p>Community Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="contact">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out!</p>
                    <div className="contact-components">
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" rows="4" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p><strong>Email:</strong> support@quizx.com</p>
                            <p><strong>Phone:</strong> +1 234 567 8901</p>
                            <p><strong>Address:</strong> 123 Quiz Lane, Knowledge City</p>
                            <div className="contact-socials">
                                <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" /></a>
                                <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" /></a>
                                <a href="https://twitter.com/" target="_blank" aria-label="X (Twitter)"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X (Twitter)" /></a>
                                <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" /></a>
                                <a href="https://github.com/" target="_blank" aria-label="GitHub"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <p>&copy; 2023 Quiz Platform. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Landing;
