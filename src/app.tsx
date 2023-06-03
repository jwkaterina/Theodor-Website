/** @jsx createElement */
import { createElement } from "./utils";
// import { Reactish } from "./reactish";
import { Header } from "./component/header";
import { Main } from "./component/main";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";

import "./css/main.css";
import "./css/mobile.css";

const App = (props: any) => {

    // const [count, setCount] = Reactish.useState(1);

    return <div>
        <Header/>
        <Main/>
        <Contact/>
        <Footer/>
    </div>
}

export {
    App
}