import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Blogs } from "./components/Blogs";
import { Photos } from "./components/Photos";
import { PageNotFound } from "./components/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <HashRouter>
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

                <Route exact path="/blogs" element={<Blogs />} />
                <Route exact path="/photos" element={<Photos />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
