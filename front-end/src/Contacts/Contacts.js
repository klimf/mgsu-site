import React, {Component} from "react";
import {withRouter} from "react-router";
import {connect} from "redux";


class ContactsPage extends Component {
    componentDidMount() {
        /////////////////////////////////////////////////
        // ФОРМАТ this.props.contacts.data
        ////////////////////////////////////////////////
        //
        // _id,
        // firstName,
        // lastName,
        // middleName,
        // description
        // ...
        // 
    }
    render() {
        return (
            <div className="page row expanded">
                <div className="content small-12 row">

                </div>
                <div className="small-12 expanded">
                    <iframe
                        width="600"
                        height="450"
                        frameborder="0" style="border:0"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAH0TpAzPZLkOHi2623tYV3Edn-nBCIM2k
    &q=Space+Needle,Seattle+WA" allowfullscreen>
                    </iframe>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    
}

const mapStateToProps = state => {
    const { key } = state
    return { key }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsPage));
