import './UsersTable.scss'
import {
    Link,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';





export const UsersBlock = (props) => {
    const users = useSelector(elem => elem.users.store.users)


    return (
        <table className="users-table" id="users-table" >

            <tr className="users-table__header">
                <td className="users-table__header-title users-table__header-title_left">Id</td>
                <td className="users-table__header-title">First name</td>
                <td className="users-table__header-title">Last name</td>
                <td className="users-table__header-title">Email</td>
                <td className="users-table__header-title">Gender</td>
                <td className="users-table__header-title">IP address</td>
                <td className="users-table__header-title">Total clicks</td>
                <td className="users-table__header-title users-table__header-title_right">Total page views</td>
            </tr>
            {users.map(elem => (
                <tr className={`users-table__user`} key={elem.id}>

                    <Link to={`/user/${elem.id}`} className="users-table__link" >
                        <td className="users-table__elem">{elem.id}</td>
                        <td className="users-table__elem">{elem.first_name}</td>
                        <td className="users-table__elem">{elem.last_name}</td>
                        <td className="users-table__elem">{elem.email}</td>
                        <td className="users-table__elem">{elem.gender}</td>
                        <td className="users-table__elem">{elem.ip_address}</td>
                        <td className="users-table__elem">{elem.total_clicks}</td>
                        <td className="users-table__elem">{elem.total_page_views}</td>

                    </Link>
                </tr>

            ))
            }
        </table >
    )
}