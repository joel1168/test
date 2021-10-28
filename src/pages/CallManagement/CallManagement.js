import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import moment from "moment";
const SPACED_DATE_FORMAT = "DD MMM YYYY";

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'description', headerName: 'Meeting Title', width: 200 },
    { field: 'title', headerName: 'Description', width: 300 },
    
    
    {
        field: 'dateCreated',
        headerName: 'Date Created',
        type: 'date',
        width: 180,
        editable: true,
        customBodyRender: value =>
        moment(new Date(value)).format(SPACED_DATE_FORMAT)

    },


];

const rows = [
    { id: 1, title: 'test 1', description: 'hello', dateCreated: "2017-08-20"},
    { id: 2, title: 'test 2', description: 'asdasda', dateCreated: "2016-08-21"},
    { id: 3, title: 'test 3', description: 'asdasdasdad', dateCreated: "2015-08-22"},
    { id: 4, title: 'test 3', description: 'asdadsasda', dateCreated: "2014-08-21"},
    { id: 5, title: 'test 4', description: 'adsdasdasda', dateCreated: "2013-08-25"},
    { id: 6, title: 'test 5', description: null, dateCreated: "2012-08-11"},
    { id: 7, title: 'test 6', description: 'adsdasdadads', dateCreated: "2011-08-10"},
    { id: 8, title: 'test 7', description: 'adsasdasda', dateCreated: "2010-08-09"},
    { id: 9, title: 'test 8', description: 'adsdadadad', dateCreated: "2009-08-08"},
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '86%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
}