import { BabylonBackground, Header, Wrapper, Footer, Text, PageContent} from "./components";
import { About, Gallery, Home } from "./pages";

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
                    <Route path="/">
                        <PageContent>
                            <Home />
                        </PageContent>
                    </Route>
                </Switch>
                
                <Footer>
                    <Text>Sergio Cosman Agraz &#9733; 2021</Text>
                </Footer>
            </Wrapper>
                <div>


                </div>
        </Router>
    );
}

export default App;
