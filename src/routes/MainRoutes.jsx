import {Routes,Route} from 'react-router-dom'
import { Cryclytics } from '../pages/Cryclytics'
import { FantasyCenter } from '../pages/FantasyCenter'
import { HomePage } from '../pages/HomePage'
import { News } from '../pages/News'
import { Schedule } from '../pages/Schedule'
import { Series } from '../pages/Series'
export const MainRoutes = () => {
    return (
        <Routes>
            <Route path = '/' element = {<HomePage/>}></Route>
            <Route path = '/fantasy-research-center' element = {<FantasyCenter/>}></Route>
            <Route path = '/criclytics' element = {<Cryclytics/>}></Route>
            <Route path = '/schedule' element = {<Schedule/>}></Route>
            <Route path = '/series' element = {<Series/>}></Route>
            <Route path = '/news' element = {<News/>}></Route>
        </Routes>
    )
}