import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import BigSpinner from './components/bigSpinner/BigSpinner'
import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunction,
  ActionFunction,
} from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from './components/products/Products'
import Login from './components/login/Login'
import Cart from './components/cart/Cart'


// interface IRoute {
//   path: string;
//   Element: JSX.Element;
//   loader?: LoaderFunction;
//   action?: ActionFunction;
//   ErrorBoundary?: JSX.Element;
// }

// const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });

// const routes: IRoute[] = [];
// for (const path of Object.keys(pages)) {
//   const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
//   if (!fileName) {
//     continue;
//   }

//   const normalizedPathName = fileName.includes("$")
//     ? fileName.replace("$", ":")
//     : fileName.replace(/\/index/, "");

//   routes.push({
//     path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
//     // @ts-ignore
//     Element: pages[path].default,
//     // @ts-ignore
//     loader: pages[path]?.loader as unknown as LoaderFunction | undefined,
//     // @ts-ignore
//     action: pages[path]?.action as unknown as ActionFunction | undefined,
//     // @ts-ignore
//     ErrorBoundary: pages[path]?.ErrorBoundary as unknown as JSX.Element,
//   });
// }

// const router = createBrowserRouter(
//   routes.map(({ Element, ErrorBoundary, ...rest }) => ({
//     ...rest,
//     // @ts-ignore
//     element: <Element />,
//     // @ts-ignore
//     ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
//   }))
// );

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        {/* <RouterProvider router={router} fallbackElement={ <BigSpinner /> } /> */}
        <Routes>
        {/*  path-հասցե, element-ինչը ցույց տա*/}
          <Route path="/" element={ <Home /> }/>
          <Route path="/products" element={ <Products /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/cart" element={ <Cart /> }/>
          {/* 
              Ридирект
              Սենց կարանք տանք path որը կգննա նույն element-ը
              Սենց խորհուրդ չի տրվում search ռոբոտը կհասկանա 2 դուբլ
              Ճիշտ Ридирект անելու համար խորհուրդա տրվում օգտագործել Navigate կոմպոնենտը
              <Route path="about-us" element={<About />} /> 
          */}
          {/* Navigate to-ով անում ենք պերեադրեսացիյա replace դնում ենք որ հիշողությունում չպահի*/}
          {/* <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="contact" element={<Contact />} />

          {/* <Route path="posts/:id/:category/:title" element={<Singlepage />} /> */}
          {/* posts/:id - սենց կետով փոխանցում ենք useParams {id: "id"}*/}

        
          {/* <Route path="login" element={<Loginpage />} /> */}
          {/* "*"-դնելով հասկացնում ենք մնացած դեպքերում  */}
          {/* <Route path="*" element={<Notfoundpage />} /> */}
 
      </Routes>
      </Layout>
    </div>
  )
}

export default App
