import AccountSidebar from "../layouts/AccountSidebar";
import "../assets/account_sidebar.css";
import "../assets/account_settings.css";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AccountSettings = () => {
    return (
        <div id="settings-container">
            <AccountSidebar />

            <div className="information-container">
                <h5>Edit Personal Information</h5>
                <div id="edit">
                    <Row>
                        <Col>
                            <label for="newname"> New Name</label> <br />
                            <input type="text" id="box" name="newname" placeholder="New Name" />
                        </Col>
                        <Col>
                            <label for="company"> Company Name</label> <br />
                            <input type="text" id="box" name="company" placeholder="Company Name" />
                        </Col>
                    </Row>

                    <Row>
                        <label id="bio">Bio</label>
                        <textarea placeholder=
                            "Write some information about yourself...">
                        </textarea>
                    </Row>

                </div>


                <div id="authentication">
                    <h5>Authentication</h5>
                    <div id="change">
                        <Row>
                            <label for="newemail">Change Email</label> <br />
                            <input type="text" id="email" name="email" placeholder="Email" />

                        </Row>
                        <Row>
                            <Col>
                                <label for="password">Change Password</label> <br />
                                <input type="text" id="box" name="password" placeholder="password" />
                            </Col>
                            <Col>
                                <label for="password">New Password</label> <br />
                                <input type="text" id="box" placeholder="password" />
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                            </Col>
                            <Col>
                                <Col>
                                    <input type="checkbox" />
                                    <label for="password">Show Password</label>

                                </Col>
                            </Col>
                        </Row>

                    </div>


                </div>

            </div>
        </div>

    );
};

export default AccountSettings;