// import { Github } from "@/ui/icons";
import Menu from "@/ui/menu";
import Editor from "@/ui/editor";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center sm:px-5 sm:pt-[calc(20vh)]">
        <script src="https://remarkjs.com/downloads/remark-latest.min.js" async />
      <a
        href="https://github.com/utautattaro/tale"
        target="_blank"
        className="absolute top-5 left-5 z-10 max-h-fit rounded-lg transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto sm:top-5"
      >
        <img src="https://i.imgur.com/wCgFwXy.png" width="60" />
      </a>
      <Menu />
      <Editor />
      <div id="slide" className="aspect-[16/9]"></div>
    </div>
  );
}
