import { Component, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Nav from "./components/Nav";
import SmoothScroll, { scrollToTop } from "./components/SmoothScroll";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import Photography from "./pages/Photography";
import About from "./pages/About";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center px-6">
          <p className="max-w-md text-center text-sm text-muted-foreground">
            Something went wrong.{" "}
            <button className="underline" onClick={() => this.setState({ error: null })}>
              Try again
            </button>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <BrowserRouter>
        <ErrorBoundary>
          <SmoothScroll />
          <ScrollManager />
          <div className="grain" aria-hidden="true" />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
}
