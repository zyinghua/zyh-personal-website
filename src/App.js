import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Posts } from "./components/Posts";
import { Photos } from "./components/Photos";
import { PageNotFound } from "./components/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <div className="App">
                            <NavBar />
                            <Banner />
                            <Skills />
                            <Education />
                            <Projects />
                            <Contact />
                            <Footer />
                        </div>
                    }
                />

                <Route path="/posts" element={<Posts />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
