import React, {useEffect, useState} from "react";
import {Button, Input} from "@mui/material";

type Account = {
    id: number
    name: string
    balance: number
}
let id: number = 0;
let meep: Account[] = [];
let doop: Account = {id: 0, name: "", balance: 0}
export const CheckingVersionTwo = () => {
    const [account, setAccounts] = useState<Account[]>([])
    const [tempName, setTempName] = useState<string>("")
    //Custom Methods

    const addNewAccount = (e:  React.FormEvent<HTMLFormElement> , name: string, balance: number) => {
        e.preventDefault()
        id += 1;
        doop = {id: id, name: name, balance: balance}

        meep.push(doop)
        setAccounts(meep)
        setTempName("")
        console.log("INI")
    }

    const init = () => {

    return (
        <>

        </>
    )
    }




    // {account.push({name:"Billy", balance:100})}
    return (
        <>
            {account.map(anything => {
                return (


                    <h1 key={anything.id}>name: {anything.name} balance: {anything.balance}</h1>
                )
            })}
            <form onSubmit={(e) => {addNewAccount(e,tempName, 100)}}>
                <input value={tempName} onChange={(e) => setTempName(e.target.value) } />
                <Button type={"submit"}>Submit New Account</Button>
                <Button disabled={true} type={"submit"}>testTwo</Button>
            </form>

        </>
    )
}


