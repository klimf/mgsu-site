import React from "react";

const NotFound = () => (
    <div className="page row expanded">
        <div className="content small-12 row">
            <div className="small-12 space-4 columns"/>
            <img alt="pic" src={require("../media/images/404.png")} className="small-12"/>
        </div>
    </div>
);

export default NotFound;

class ProjectDetail extends Component {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail));
