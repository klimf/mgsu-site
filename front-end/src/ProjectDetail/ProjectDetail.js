import React, {Component} from "react";
import DonationForm from "./components/DonationForm";

class ProjectDetail extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.projectId}</h1>
                <h2>Форма доната</h2>
                <DonationForm/>
            </div>
        )
    }
}

export default ProjectDetail
