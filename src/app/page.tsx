import { Content } from "@/components/content/content";
import { Header } from "@/components/header/head";
import '@/components/header/style.scss';
import { FC } from "react";

const PageDefault: FC = () => {
  return(
    <div className="page-wrapper">
      <Header />
      <Content />
    </div>
  )
}


export default PageDefault;