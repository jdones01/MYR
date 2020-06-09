import React, { Component } from "react";
import Tour from "reactour";
import { Button } from "@material-ui/core";
import * as layoutTypes from "../../../constants/LayoutTypes";
import { TourSteps } from "../../../myr/tour";

class MyrTour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewOnlyOnOpen: this.props.viewOnly
        };
    }

    closeTour = () => {
        if (this.state.viewOnlyOnOpen) {
            this.props.changeView();
        }
        this.props.handleTourToggle();
    }

    render() {
        let isDisabled = this.props.layoutType === layoutTypes.REFERENCE;
        return (
            <React.Fragment>
                {!isDisabled ?
                    <React.Fragment>
                        <Tour
                            steps={formatSteps(TourSteps)}
                            maskClassName="mask"
                            isOpen={this.props.tourOpen}
                            onAfterOpen={() => {
                                this.setState({ viewOnlyOnOpen: this.props.viewOnly });
                                if (this.props.viewOnly) {
                                    this.props.changeView();
                                }
                            }}
                            onRequestClose={this.closeTour} />
                        <Button
                            style={{ color: "#fff", fontSize: "66%" }}
                            size="small"
                            className="d-none d-md-block"
                            onClick={() => {
                                this.props.handleTourToggle();
                                if (this.props.referenceOpen) {
                                    this.props.handleReferenceToggle();
                                }
                            }}>
                            Take the Tour
                        </ Button>
                    </React.Fragment>
                    : null
                }
            </React.Fragment>
        );
    }
}

const formatLineBreaks = (string) => {
    if (typeof string !== "string") {
        return string;
    }
    else {
        return (
            <div>
                {
                    string.split("\n").map( (i, key) => {
                        return <div key={key}>{i}</div>;
                    })
                }
            </div>
        );
    }
};

const formatSteps = (steps) => {
    return steps.map( (step) => {
        step.content = formatLineBreaks(step.content);
        return step;
    });
};

export default MyrTour;
