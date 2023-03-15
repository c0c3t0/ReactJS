import { useState } from "react";

import { getUserById } from '../services/userService';
import CreateUser from "./CreateUser";
import { DeleteUser } from "./DeleteUser";
import EditUser from "./EditUser";

import User from "./User";
import UserDetails from "./UserDetails";

export default function Users({
    users,
    onUserCreate,
    onSuccessfulUpdate,
    onDeleteUser,
    formValues,
    formChangeHandler,
    formErrors,
    formValidation
}) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditUserForm, setShowEditUserForm] = useState(null);
    const [showNewUserForm, setShowNewUserForm] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

    const onInfoClick = async (id) => {
        const user = await getUserById(id);
        setSelectedUser(user);
    };

    const onCloseClick = () => {
        setSelectedUser(null);
        setShowNewUserForm(false);
        setShowDeleteConfirm(false);
        setShowEditUserForm(false);
    };

    const onAddClick = () => {
        setShowNewUserForm(true);
    };

    const onSuccessfulCreate = (e) => {
        onUserCreate(e);
        setShowNewUserForm(false);
    };

    const onEditClick = async (id) => {
        const user = await getUserById(id);

        setShowEditUserForm(user);
    };

    const onEditClickHandler = (e, id) => {
        onSuccessfulUpdate(e, id);
        setShowEditUserForm(null);
    };

    const onDeleteClick = (id) => {
        setShowDeleteConfirm(id);
    };

    const onDeleteClickHandler = () => {
        onDeleteUser(showDeleteConfirm);
        onCloseClick();
    };

    return (
        <>
            {showNewUserForm
                &&
                <CreateUser
                    onCloseClick={onCloseClick}
                    onUserCreate={onSuccessfulCreate}
                    formValues={formValues}
                    formChangeHandler={formChangeHandler}
                    formErrors={formErrors}
                    formValidation={formValidation}
                />}
            {/* {showEditUserForm && <EditUser user={showEditUserForm} onCloseClick={onCloseClick} onUserCreate={onEditClickHandler} formValues={formValues} formChangeHandler={formChangeHandler} />} */}
            {selectedUser && <UserDetails {...selectedUser} onCloseClick={onCloseClick} />}
            {showDeleteConfirm && <DeleteUser onCloseClick={onCloseClick} onDeleteClick={onDeleteClickHandler} />}
            <div className="table-wrapper">
                {/* Overlap components  */}
                {/* <div className="loading-shade"> */}

                {/* <Loading /> */}

                {/* No users added yet  */}

                {/* <div className="table-overlap">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="triangle-exclamation"
                        className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                        ></path>
                    </svg>
                    <h2>There is no users yet.</h2>
                </div> */}

                {/* No content overlap component  */}

                {/* <div className="table-overlap">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="triangle-exclamation"
                        className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                        ></path>
                    </svg>
                    <h2>Sorry, we couldn't find what you're looking for.</h2>
                </div> */}

                {/* On error overlap component  */}

                {/* <div className="table-overlap">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="triangle-exclamation"
                        className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                        ></path>
                    </svg>
                    <h2>Failed to fetch</h2>
                </div> */}
                {/* </div> */}

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u =>
                            <User
                                key={u._id}
                                {...u}
                                onInfoClick={onInfoClick}
                                onEditClick={onEditClick}
                                onDeleteClick={onDeleteClick} />)}
                    </tbody>
                </table>
            </div>
            <button className="btn-add btn" onClick={onAddClick}>Add new user</button>
        </>
    );
};