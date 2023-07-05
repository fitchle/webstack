'use client';
import { runInAction } from "mobx";
import { observer, useLocalObservable } from "mobx-react-lite";
import Image from "next/image";
import React, { useEffect } from "react";
import { api } from "../services/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {StorybookButton} from "@stackfitch/ui"
import {RiArrowRightFill, RiArrowRightLine} from "react-icons/ri"

const Header = () => {
  const router = useRouter();
  return (
    <div className="p-16 flex flex-col lg:flex-row gap-[9vh]">
      <Image
        className="lg:place-self-start place-self-center"
        width={48}
        height={48}
        src={"/logo.svg"}
        alt="logo"
      />
      <nav className="flex gap-[9vw] mx-auto text-white font-quicksand place-items-center place-self-center">
        <a
          href="https://fitchle.dev/github"
          className="hover:opacity-100 opacity-60 transition-all duration-500 text-xl"
        >
          Github
        </a>
        <a
          href="https://fitchle.com/"
          className="hover:opacity-100 opacity-60 transition-all duration-500 text-xl"
        >
          Platform
        </a>
        <a
          href="https://fitchle.dev/behance"
          className="hover:opacity-100 opacity-60 transition-all duration-500 text-xl"
        >
          Behance
        </a>
      </nav>
      <StorybookButton text="Storybook" href="http://localhost:6006"></StorybookButton>
    </div>
  );
};

const Background = () => {
  return (
    <div className="[&>*]:-z-50">
      <div className="p-96 absolute -top-32 -left-32 bg-fitchle-brand2 blur-[400px] opacity-40 hover:opacity-70 duration-1000 transition-opacity"></div>
      <div className="p-96 absolute -bottom-32 -right-32 bg-purple-600 blur-[400px] opacity-40 hover:opacity-70 duration-1000 transition-opacity"></div>
      <div className="p-96 absolute -top-32 left-96 bg-black blur-[200px] opacity-20 hover:opacity-70 duration-1000 transition-opacity"></div>
    </div>
  );
};



const Home = observer(() => {
  const query = api.greetings.greetings.useQuery();
  const message = query.data?.message ?? "Fetching...";
  const nodes = query.data?.nodes ?? [] as Array<any>;
  
  const textState = useLocalObservable(() => ({
    text: "",
    defaultText: "You can start editing!",
    async appendText(str: string) {
      this.text += str;
    },
    async removeLast() {
      runInAction(() => {
        this.text = this.text.slice(0, -1)
      })
    }
  }))
  async function start() {
    for (let index = 0; index < textState.defaultText.length; index++) {
      const char = textState.defaultText.charAt(index);
      await new Promise(f => setTimeout(f, 75));
      await textState.appendText(char)
    }
  }
  useEffect(() => {
    start();
  }, [])
  return (
    <>
      <Background />
      <Header />

      <main className="font-lexend">
        <div className="flex flex-col gap-4 mt-[12vh] font-poppins">
          <h1 className="m-auto text-center text-white font-black text-3xl lg:text-6xl">
            WELCOME TO{" "}
            <span className="text-fitchle-brand2">FITCHLE TEMPLATE!</span>
          </h1>
          <h2 className="m-auto text-center text-white font-black text-xl lg:text-4xl opacity-70">
            {textState.text}
          </h2>

          <h3 className="m-auto w-full my-10 text-center text-white font-black text-lg lg:text-2xl opacity-30 absolute bottom-0">
            <span className="text-green-500 under">API &gt; </span>{message} <br/><span className="text-green-500 under">Nodes &gt; </span> [{nodes.map(n => n.name).join(",")}]
          </h3>
          
        </div>
      </main>
    </>
  );
});

export default Home;
