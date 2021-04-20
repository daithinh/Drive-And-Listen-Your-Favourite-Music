import React from 'react';
import Select from 'react-select';


export default function CitySelections({ data }) {
    const options = [];
    for (let i = 0; i < data.length; i++) {
        var temp = data[i]
        var obj = {};
        obj["value"] = temp['video-location'];
        obj["label"] = temp['video-location'];
        options.push(obj)
    }

    return (
        <div>
            <Select
                options={options}
            />
        </div>
    )
}