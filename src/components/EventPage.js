import React, { Component } from 'react';
import '../styles/EventPage.css';
import {Grid, Panel, PanelGroup} from "react-bootstrap";
import BarHome from "./BarHome";


class EventPage extends Component {

    render() {

        return (
            <div className="EventPage">

                <div className={"container"}>

                    <BarHome/>

                    <Grid>
                        <PanelGroup accordion id="accordion-example ">
                            <Panel eventKey="1" bsStyle="success">
                                <Panel.Heading>
                                    <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                    moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                    wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                    butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="2" bsStyle="success">
                                <Panel.Heading>
                                    <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                    moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                    wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                    butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="3" bsStyle="success">
                                <Panel.Heading>
                                    <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                    moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                    wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                    butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus
                                    labore sustainable VHS.
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
                    </Grid>
                </div>
            </div>
        );
    }

}

export default EventPage;
