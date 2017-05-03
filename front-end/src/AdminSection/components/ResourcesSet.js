import React from 'react';
import {Resource, Delete} from 'admin-on-rest';

function ResourcesSet({resource}) {
    console.log('!!!!!!!!',resource)
    return  ( Object.keys(resource).map((key, index) => 
                (<Resource name={key}
                          options={{ label: resource[key].label }}
                          list={ resource[key].component.list}
                          edit={resource[key].component.edit}
                          create={resource[key].component.create}
                          remove={Delete}/>
                          ))
             )
          
}

export default ResourcesSet;