import AccountSidebar from "../layouts/AccountSidebar";
import "../assets/account_sidebar.css";
import "../assets/account.css";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AccountInformation = () => {
    return (
        <div id="account_container">
            <AccountSidebar />

            <div className="profile-container">
                <section className="section">
                    <div>
                        <img src="src\assets\images\icons8-circle-64.png" alt="Menu Item Icon" />
                        <h4 style={{
                            marginRight: 50
                        }}>Account</h4>
                        <p>Description</p>
                        <p>Hashtags</p>
                    </div>

                </section>

                <div className="double-section-row">
                    <div className="section">
                        <h4>Learning</h4>
                        <p>Choose path</p>
                    </div>

                    <section className="section">
                        <h4>Activity</h4>
                        <p># of followers</p>
                    </section>
                </div>

                <div className="double-section-row">
                    <section className="section">
                        <h4>Experience</h4>

                    </section>

                    <section className="section">
                        <h4>Skills</h4>
                        {/* Skills section content */}
                    </section>
                </div>
                <h2>Subscription Information</h2>
                <section className="section">

                    <div>
                        <Row>
                            <Col>
                                Project Canopus Monthly Donation

                            </Col>
                            <Col>

                            </Col>
                            <Col>
                                Renewal Date

                            </Col>
                            <Col>
                                Renewal Price

                            </Col>
                            <Col>

                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                1 month
                            </Col>
                            <Col>
                                AutoRenew On
                            </Col>
                            <Col>
                                2023.09.15
                            </Col>
                            <Col>
                                5$
                            </Col>
                            <Col>
                                Manage
                            </Col>

                        </Row>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default AccountInformation;
