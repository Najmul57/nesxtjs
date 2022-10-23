import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from '@/components/HomePage/HomePage';

function LeftTabsExample() {
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Nav variant="pills" className="flex-column">
                        <div className='flex items-center justify-between'>
                            <div className='flex'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </div>
                            <div>
                                loremdsfdsfdsfdsfsdfds
                            </div>
                        </div>
                    </Nav>

                </Row>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <HomePage />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        fgfg
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </>
    );
}

export default LeftTabsExample;