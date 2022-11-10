import React from "react";
import { Link } from "react-router-dom";
import author from "../assets/lara.jpeg";
import { useTitle } from "../Hooks/useTitle";

const Blog = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const currentDate = `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;
  useTitle('Blog')
  return (
    <div className="bg-gradient-to-tr from-pink-100 via-white  to-rose-100">
      <div className="relative flex flex-col max-w-xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x  divide-pink-500 lg:ml-72 md:ml-24 pt-16">
        <div className="p-3 space-y-1 xl:ml-6">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
          </span>
          <h3 className="text-3xl font-semibold text-pink-600">Lara Cripton</h3>
          <p className="text-sm dark:text-gray-400">
            Hello! I’m Lara Cripton. Positive behavioral supports is a behavior
            management system used to understand what maintains an individual’s
            challenging behavior. People’s inappropriate behaviors are difficult
            to change because they are functional.
          </p>
        </div>
        <div className="flex items-center p-3 space-x-3">
          <img
            alt=""
            src={author}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="space-y-1">
            <span className="text-sm">{currentDate}</span>
          </div>
        </div>
      </div>

      {/* ============= question and answer part ===============*/}
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"></div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2">
          <div className="duration-300 transform bg-white border-l-4 border-pink-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 border-l-pink-600 rounded-r shadow-sm">
              <h6 className="mb-4 text-xl font-semibold leading-5">
                Difference between SQL and NoSQL
              </h6>
              <p className="text-sm text-gray-900">
                SQL databases are relational, NoSQL databases are
                non-relational. <br />
                <br />
                SQL databases use structured query language and have a
                predefined schema. NoSQL databases have dynamic schemas for
                unstructured data. <br />
                <br />
                SQL databases are vertically scalable, while NoSQL databases are
                horizontally scalable. <br />
                <br />
                SQL databases are table-based, while NoSQL databases are
                document, key-value, graph, or wide-column stores. <br />
                <br />
                SQL databases are better for multi-row transactions, while NoSQL
                is better for unstructured data like documents or JSON.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-pink-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0  rounded-r shadow-sm">
              <h6 className="mb-4 text-xl font-semibold leading-5">
                What is JWT, and how does it work?
              </h6>
              <p className="text-sm text-gray-900">
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. <br />
                <br />
                It differs from other web tokens. Claims are used to transmit
                information between two parties. What these claims are depends
                on the use case at hand. For example, a claim may assert who
                issued the token, how long it is valid for, or what permissions
                the client has been granted.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-pink-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0  rounded-r shadow-sm">
              <h6 className="mb-4 text-xl font-semibold leading-5">
                What is the difference between javascript and NodeJS?
              </h6>
              <p className="text-sm text-gray-900">
                JavaScript is a proper high-level programming language used to
                create web scripts whereas Node.js is a run time environment
                built on google’s v8 engine. <br /> <br />
                JavaScript is executed in the browser whereas using Node.js
                gives us the ability to execute JavaScript outside the browser.{" "}
                <br /> <br />
                JavaScript can manipulate DOM or add HTML within whereas Node.js
                doesn’t have the capability to add HTML. <br /> <br />
                JavaScript is mainly used to create front end web applications
                or develop client-side whereas Node.js is used on the back end
                development that is server-side development. <br /> <br />
                JavaScript follows the standard of JavaScript when writing
                programs whereas Node.js is written in C++ while using the v8
                engine, it runs JavaScript outside the browser. <br /> <br />
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-pink-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0  rounded-r shadow-sm">
              <h6 className="mb-4 text-xl font-semibold leading-5">
                How does NodeJS handle multiple requests at the same time?
              </h6>
              <p className="text-sm text-gray-900">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue. <br /> <br />
                If NodeJS can process the request without I/O blocking then the
                event loop would itself process the request and sends the
                response back to the client by itself. But, it is possible to
                process multiple requests parallelly using the NodeJS cluster
                module or worker_threads module.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400  focus:shadow-outline focus:outline-none bg-gradient-to-bl from-pink-400  via-pink-600 to-pink-400">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
