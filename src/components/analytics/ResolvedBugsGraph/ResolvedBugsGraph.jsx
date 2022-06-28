import React from "react";
import {WhiteTile} from "@/components/surfaces";
import {Typography} from "@mui/material";
import {Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {GraphData} from "@/utilities/FakeData";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

function ResolvedBugsGraph(){
    return (
        <WhiteTile sx={{mt: "25px"}}>
            <CardHeader 
                title="Bug Analytics"
                sx={{fontSize: '1.1rem'}}
            />
            <CardContent>
            <ResponsiveContainer width="99%" height={350}>
                <AreaChart data={GraphData}
>
                    <defs>
                        <linearGradient id="colorMinor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="green" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="green" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorModerate" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="blue" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="blue" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorCritical" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="red" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="red" stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#343159" />
                    <YAxis stroke="#343159" label={{ value: '# bugs resolved', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' }}} />
                    <CartesianGrid strokeDasharray="5 5" stroke="rgba(123, 128, 154, 0.2)" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={50}/>
                    <Area type="monotone" dataKey="Minor" stroke="green" fillOpacity={1} fill="url(#colorMinor)" />
                    <Area type="monotone" dataKey="Moderate" stroke="blue" fillOpacity={1} fill="url(#colorModerate)" />
                    <Area type="monotone" dataKey="Critical" stroke="red" fillOpacity={1} fill="url(#colorCritical)" />
                </AreaChart>
            </ResponsiveContainer>
            </CardContent>
        </WhiteTile>
    )
}

export default ResolvedBugsGraph;
export { ResolvedBugsGraph };