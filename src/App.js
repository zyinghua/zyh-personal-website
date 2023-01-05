import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Photos } from "./components/Photos";
import { PageNotFound } from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostRoutes } from "./components/PostRoutes";

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

                <Route path="/posts" element={<PostRoutes />} />
                <Route
                    path="/photos"
                    element={
                        <div>
                            <NavBar />
                            <Photos />
                            <Footer />
                        </div>
                    }
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
