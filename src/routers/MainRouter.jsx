import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ReservasPage from "../pages/Reservas";
import { Carta } from "../pages/Carta";

export const MainRoutes = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservas" element={<ReservasPage menu={"menu1"} />} />
        {/* <Route path="/reservas" element={<ReservasPage />} /> */}
        <Route path="/carta" element={<Carta />} />
        {/* <Route path='usuarios' element={<UsuariosPage />} /> */}
        {/* <Route path="/usuarios/:otrouuid" element={<UserPage />} /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

// export const MainRouter = ({ user }) => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />

//       {/* <Route path="/usuarios" element={
//       <ProtectedRoutes user={user}>
//         <UsuariosPage />
//       </ProtectedRoutes>
//       } /> */}

//       <Route element={<ProtectedRoutes isAllowed={!!user} />}>
//         <Route path="/usuarios" element={<UsuariosPage />} />
//         <Route path="/usuarios/:uuid" element={<UserPage />} />
//         <Route path='/frases' element={<QuotesPages />} />
//         <Route path='/crud' element={<CrudPage />} />
//       </Route>

//       <Route
//         element={<ProtectedRoutes isAllowed={user?.role === 'ADMIN_ROLE'} />}
//       >
//         <Route path="/admin" element={<AdminPage />} />
//       </Route>
//       {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };
