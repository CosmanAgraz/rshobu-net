import { BabylonBackground, Header, Wrapper, Footer, Text, PageContent} from "./components/";
import { About, Gallery, Home, Projects } from "./pages";
import { AnimatePresence } from "framer-motion";

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import "./styles/index.scss";

function App()
{
    return (
        <Router>
            <BabylonBackground width={window.innerWidth} height={window.innerHeight}/>
            <Wrapper>
                <Header></Header>
                    <Switch>
                        <Route path="/about">
                            <PageContent>
                                <About />
                            </PageContent>
                        </Route>
                        <Route path="/gallery">
                            <PageContent>
                                <Gallery />
                            </PageContent>
                        </Route>
                        <Route path="/projects">
                            <PageContent>
                                <Projects />
                            </PageContent>
                        </Route>
                        <Route path="/">
                            <PageContent>
                                <Home />
                            </PageContent>
                        </Route>
                    </Switch>
                <Footer>
                    <Text type="body">Sergio Cosman Agraz &#9733; 2021</Text>
                </Footer>
            </Wrapper>
        </Router>
    );
}

export default App;
