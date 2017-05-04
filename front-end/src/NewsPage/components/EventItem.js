import React from 'react';
import {EditableItem} from "../../AdminSection/components/AdminToolbar";
import {Link} from "react-router-dom";
import {formatEventDate} from "../../common/helpers";

export default (props) => {

const date = formatEventDate(props.item.date)

return( <div className="small-12 medium-12 large-6 columns end">
        <EditableItem type='news' id={props.item._id} actions={['edit', 'delete']}>
            <Link to={`/events/${props.item._id}`}>
                <div className="home-event small-12 columns">
                    <div className="bg-border"/>
                    <h1>{date.day}</h1>
                    <h2>{date.month}</h2>
                    <p>
                    {props.item.title}
                    </p>
                </div>
        </Link>
        </EditableItem>
    </div>
)
}