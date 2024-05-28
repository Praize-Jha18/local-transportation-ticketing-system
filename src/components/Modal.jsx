import React from "react";
import { useState } from "react";
import { TextField } from "./textfield";

export const Modal = () => {

    const [email, setEmail] = useState("")
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <TextField
                                        label={"Email"}
                                        placeHolder={"Enter email address"}
                                        type={"email"}
                                        defaultValue={email}
                                        onChange={
                                            (input) => { setEmail(input) }
                                        }
                                    />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="formGender">Choose</label>
                                    <select className="form-control" id="formGender">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                        <option>Option 4</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}