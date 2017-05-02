import React from "react"
import {resolveStatic} from "../../common/helpers"
import {ImageField} from 'admin-on-rest';

export const StaticImage =  ({ source, record = {} }) => {
   
    var image = record[source] ? record[source].small : require('../../media/images/placeholder.png');
    var resolvedImage = resolveStatic(image);
    return <img src={resolvedImage}/>
}