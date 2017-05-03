import React from 'react';
import {EditableItem} from "../../AdminSection/components/AdminToolbar";
import {Link} from "react-router-dom";

export default (props) => (
 <div className="small-12 medium-12 large-6 columns">
     <EditableItem type='news' id={props.item._id} actions={['edit', 'delete']}>
        <Link to={`/news/${props.item._id}`}>
            <div className="home-news space-6 small-12 columns">
                <div className="bg-img"/>
                <div className="blackout"/>
                <h2>{props.item.title}</h2>
                <p>
                    {props.item.descriptions}
                </p>
           </div>
       </Link>
    </EditableItem>
</div>
)