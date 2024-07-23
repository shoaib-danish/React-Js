import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Cards />
      <Modal />
    </div>
  );
}

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <img src="user.png" alt="" width="40" height="40" />
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Login
//               </a>
//             </li>
//             <li className="nav-item"></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

function Cards() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="container-fluid bg-dark mt-5 row ">
        {users.map((user) => (
          <>
            <Card key={user.id} user={user} />
          </>
        ))}
      </div>
    </>
  );
}

// function Card({ user }) {
//   return (
//     <>
//       <div
//         className="col-md-6 col-lg-3 mb-5"
//         data-bs-toggle="modal"
//         data-bs-target={`#exampleModal${user.id}`}
//       >
//         <ul className="list-group">
//           <li className="list-group-item">
//             👤<strong>Name: </strong>
//             {user.name}
//           </li>
//           <li className="list-group-item">
//             ✉️ <strong>Email</strong>: {user.email}
//           </li>
//           <li className="list-group-item">
//             🧑
//             <strong>Username</strong>: {user.username}
//           </li>
//           <li>
//             <Modal
//               name={user.name}
//               id={user.id}
//               website={user.website}
//               company={user.company.name}
//             />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

function Card({ user }) {
  return (
    <>
      <div
        className="col-md-6 col-lg-2 mb-5 mt-3"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal${user.id}`}
      >
        <div className="card border-light  border-2 text-light bg-secondary">
          <div className="card-body ">
            <h5 className=" text-light bg-gradient bg-dark card-header">
              🧑🏽‍💼USER INFO
            </h5>
            <p className="card-text pt-2 ">
              <li className="list list-group ">
                <span>
                  <strong>👤 Name: </strong> {user.name}
                </span>
                <span>
                  <strong> 📧 Email: </strong> {user.email}
                </span>
                <span>
                  <strong>👩🏽‍💻 Username: </strong> {user.username}
                </span>
              </li>
            </p>
          </div>
        </div>

        <Modal
          name={user.name}
          id={user.id}
          website={user.website}
          company={user.company.name}
        />
      </div>
    </>
  );
}

function Modal(props) {
  // console.log(props.name, props.id);
  return (
    <>
      <div
        className="modal fade"
        id={`exampleModal${props.id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby={`exampleModalLabel${props.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`exampleModalLabel${props.id}`}>
                {props.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              I am {props.name}, My company name is {props.company} and this is
              my <strong>Website</strong>: {props.website}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
