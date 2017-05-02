import React from "react"
import {resolveStatic} from "../../common/helpers"
import {ImageField} from 'admin-on-rest';

export const StaticImage =  ({ source, record = {} }) => {
    
    var image = record[source] ? record[source].small : '';
    var resolvedImage = resolveStatic(image);
    return <img src={resolvedImage}/>
}