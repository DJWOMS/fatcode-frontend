import React from "react";
import MemoNavBar from "../Header/NavBar";
import { Child } from "../../types/HeaderLinks";
import CardsCourse from "../../components/courses/CardsCourse";
import Footer from "../../components/footer/Footer";

const MainLayout: React.FC<Child> = ({children})=>{
  return (
      <>
        <CardsCourse />
        <Footer />
      </>
  );
};


export default MainLayout;

