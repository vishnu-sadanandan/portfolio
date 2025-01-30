
'use client';
import { useDispatch } from "react-redux";
import { menuSliceActions } from "./store/reducers/menu";
import { useEffect } from "react";

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { skillSliceActions } from "./store/reducers/skill";

export default function App({
  pages,
}: Readonly<{
  pages: React.ReactNode;
}>) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menuSliceActions.setMenuRequestLoading({ loading: true })); // saga watchers are listening to this action
  }, [dispatch]);

  useEffect(() => {
    dispatch(skillSliceActions.setSkillRequestLoading({ loading: true })); // saga watchers are listening to this action
}, [dispatch]);

  return (
    <div className="flex flex-1">
      <Menu />
      <div className="flex flex-col w-full h-screen">
        <Navbar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            {pages}
          </main>

          <footer className="h-12 bg-gray-900 text-white flex items-center justify-center">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}