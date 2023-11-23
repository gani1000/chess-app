import Login from "../../pages/login";
import Profile from "../../pages/profile";
import Register from "../../pages/register";
import SectionIntro from "../../pages/sectionIntro";
import MainTemplateBoard from "../boardTemplate/mainTemplate";
import MainTemplateEngine from "../engine/mainTemplate";
import TournamentRooms from "../tournament/tournamentRooms";


const publicRoutes = [
    { path: '/', component: <SectionIntro /> },
    { path: '/GameStart', component: <MainTemplateBoard /> },
    { path: '/vsEngine', component: <MainTemplateEngine /> },
    { path: '/Login', component: <Login /> },
    { path: '/Register', component: <Register /> },
    { path: '/Profile', component: <Profile /> },
    { path: '/Tournament', component: <TournamentRooms /> },
    { path: '*', component: <SectionIntro /> },
];

export { publicRoutes }; 