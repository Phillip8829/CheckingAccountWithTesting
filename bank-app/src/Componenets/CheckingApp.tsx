// import React, {useEffect, useState} from "react";
// import {Button, Input} from "@mui/material";
// import {ReactComponent} from "*.svg";
// import {stringify} from "querystring";
//
//
// interface PersonAccount {
//     name: string,
//     balance: number
// }
// let balance = 100;
// let  arrayOfNames: PersonAccount = {name: "", balance: 100};
// let nonArrayPA: PersonAccount[] = [];
//
// export const CheckingApp = () => {
//     const [holderName, setHolderName] = useState<string>("")
//     const [outPut, SetOutPut] = useState<string>("")
//     const [nameExits, setNameExits] = useState<boolean>(false)
//     const [listOfAccounts, SetListOfAccounts] = useState<PersonAccount>({name: "", balance: 100})
//     const [balance, setBalance] = useState<number>(100)
//     const [personal, setPersonal] = useState<PersonAccount[]>([])
//     useEffect(() => {
//
//     }, [])
//
//     //Handle Submit Function
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         let arrayPA: PersonAccount = {name: holderName, balance: 100}
//         console.log(arrayPA)
//
//
//         personal.push(arrayPA);
//         if (!nonArrayPA.at(0)){
//             return
//         }
//         console.log(nonArrayPA)
//
//         SetOutPut(holderName);
//
//         setHolderName("")
//         setNameExits(true)
//     }
//     const handleQuit = (e: React.FormEvent<HTMLFormElement>)  =>
//     {
//         setNameExits(false)
//         SetOutPut("")
//         setHolderName("")
//     }
//
//     const subtractBalance = (e:  React.FormEvent<HTMLFormElement>) => {
//         //SUBTRACT
//     }
//     const addBalance = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
//         //ADD
//     setBalance(900)
//
//     }
//
//
//     return (
//         <>
//             <form onSubmit={(e) => {
//                 handleSubmit(e)
//             }}>
//                 <Input value={holderName} onChange={(e) => {
//                     setHolderName(e.target.value)
//                 }}></Input>
//
//                 <Button type={"submit"}>Create New Account</Button>
//             </form>
//             {nameExits ? <h1>Account Created for {outPut} was Created</h1> : <h1></h1>}
//             <form onSubmit={(e) => {
//                 handleQuit(e)
//             }}>
//                 <Button type={"submit"}>
//                     Clear All AKA Quit
//                 </Button>
//             </form>
//             <ul>
//             {personal.map(anything => {
//                 return (
//                     <div>
//                     <Button key={anything.name}>Checking Account: {anything.name} Balance: ${anything.balance}</Button>
//
//                         <form>
//                         <input>
//                         </input>
//                             <br/>
//                             <Button onClick={} >Add Money</Button>
//                             <br/>
//                             <Button>Subtract Money</Button>
//                         </form>
//                     </div>
//                 )
//             })}
//             </ul>
//         </>
//     )
// }