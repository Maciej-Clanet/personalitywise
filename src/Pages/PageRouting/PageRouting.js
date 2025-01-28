import {Routes, Route} from "react-router";


export default function PageRouting(){


    return(
        <Routes>
            <Route path="/" element={<div>auth page</div>}/>
        </Routes>
    )
}