import "./HomePage.scss"
import Greet from "../GreetPage/GreetPage"
import Dev from "../DevPage/DevPage"
import CountPage from "../CountPage/CountPage"
import MorePage from "../MorePage/MorePage"


const HomePage = () => {

    return (
        <main id="home">


            <Greet />
            
            <CountPage />


            <MorePage />
            
            <Dev />


        </main>
    )
}

export default HomePage