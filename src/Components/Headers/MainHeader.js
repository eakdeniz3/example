import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Auth/auth'

function MainHeader() {

    const { userInfo } = useSelector((state) => state.auth);
const dispatch=useDispatch();


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Hidden brand</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Anasayfa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">Profil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <div className="btn-group dropstart">
  <button type="button" className="btn btn-secondary " data-bs-toggle="dropdown" aria-expanded="false">
  {userInfo?.email}
  </button>
  <ul className="dropdown-menu">
  <li><a className="dropdown-item" href="#">Prpfil</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" onClick={() => dispatch(logout())}>Çıkış</a></li>
  </ul>
</div>

      

      </div>
    </div>
  </nav>
  )
}

export default MainHeader