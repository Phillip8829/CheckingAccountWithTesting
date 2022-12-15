import React, {FC, ReactElement} from "react";
import exp from "constants";
import {Grid} from "@mui/material";


interface DashboardProps{
    myName: String
}


export const Dashboard = ({myName}: DashboardProps) =>  {

    return (
    <Grid container minHeight={"100vh"} p={0} m={0}>
        <Grid item md={8} px={4}>
            <h2>Content Area</h2>

            </Grid>
        <Grid item md={4}>
            <h2>Sidebar Area</h2>
        </Grid>

    </Grid>
    );

};