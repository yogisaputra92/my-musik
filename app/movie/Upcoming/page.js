
import Hero from "../../ui/hero";
import Navbar from "../../ui/navbar";
import HomePage from "../../components/upcoming";
import SearchBox from "../../components/searchbox";

export default function Upcoming () {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <SearchBox/>
            <HomePage/>
        </div>
    )
} 