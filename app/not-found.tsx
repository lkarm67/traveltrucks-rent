"use client";

import { useRouter } from "next/navigation";
import css from "./not-found.module.css";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        className={css.button}
        onClick={() => router.push("/")}
      >
        Go to home
      </button>
    </div>
  );
};

export default NotFound;
